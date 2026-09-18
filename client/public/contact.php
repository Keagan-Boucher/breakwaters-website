<?php
/**
 * Contact form endpoint for breakwatersrecruiting.co.za.
 * Served directly by Hostinger from public_html/contact.php (the SPA rewrite
 * in .htaccess skips real files). Accepts POST, validates, rate-limits,
 * routes by audience and sends plain-text mail. Returns JSON only.
 *
 * Keep the addresses below in sync with client/src/config/site.js.
 */

declare(strict_types=1);

const SITE_DOMAIN     = 'breakwatersrecruiting.co.za';
// All form submissions currently go to one inbox (owner request, 2026-09-18).
// Note the domain: breakwatersrecruitMENT, not the site's breakwatersrecruitING.
const EMAIL_RECRUITS  = 'recruits@breakwatersrecruitment.co.za';  // job seekers
const EMAIL_VANESSA   = 'recruits@breakwatersrecruitment.co.za';  // employers
const FORM_RECIPIENT  = 'recruits@breakwatersrecruitment.co.za';  // "Other"
const FROM_ADDRESS    = 'no-reply@breakwatersrecruiting.co.za';   // must exist on the Hostinger mailbox/SPF for delivery

const RATE_LIMIT      = 5;        // submissions
const RATE_WINDOW     = 3600;     // per IP per seconds
const MIN_FILL_SECONDS = 3;       // faster than this is a bot
const MAX_FORM_AGE    = 86400;    // form_ts older than this is stale

const LIMITS = ['name' => 100, 'email' => 254, 'phone' => 40, 'message' => 5000];

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');
header('Cache-Control: no-store');

function respond(int $status, array $body): never
{
    http_response_code($status);
    echo json_encode($body, JSON_UNESCAPED_SLASHES);
    exit;
}

function field(string $key): string
{
    $v = $_POST[$key] ?? '';
    return is_string($v) ? trim($v) : '';
}

/** Strip anything that could start a new mail header. */
function header_safe(string $v): string
{
    return str_replace(["\r", "\n", "\0"], '', $v);
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Allow: POST');
    respond(405, ['ok' => false, 'error' => 'Method not allowed.']);
}

// --- Bot traps -----------------------------------------------------------
if (field('website') !== '') {
    respond(400, ['ok' => false, 'error' => 'Submission rejected.']);
}
$ts = (int) field('form_ts');                      // ms since epoch, set on page load
$age = time() - intdiv($ts, 1000);
if ($ts <= 0 || $age < MIN_FILL_SECONDS || $age > MAX_FORM_AGE) {
    respond(400, ['ok' => false, 'error' => 'Submission rejected.']);
}

// --- Rate limit (file-based, fail closed) --------------------------------
$ip = $_SERVER['REMOTE_ADDR'] ?? '0.0.0.0';
$dir = dirname(__DIR__) . '/contact-rate';         // one level above public_html
if (!is_dir($dir) && !@mkdir($dir, 0700, true)) {
    $dir = sys_get_temp_dir() . '/bw-contact-rate';
    if (!is_dir($dir)) {
        @mkdir($dir, 0700, true);
    }
}
if (!is_dir($dir) || !is_writable($dir)) {
    respond(503, ['ok' => false, 'error' => 'The form is temporarily unavailable. Please email us instead.']);
}
$file = $dir . '/' . hash('sha256', $ip) . '.json';
$now = time();
$hits = [];
$fh = fopen($file, 'c+');
if ($fh === false) {
    respond(503, ['ok' => false, 'error' => 'The form is temporarily unavailable. Please email us instead.']);
}
flock($fh, LOCK_EX);
$raw = stream_get_contents($fh);
if ($raw !== false && $raw !== '') {
    $hits = json_decode($raw, true) ?: [];
}
$hits = array_values(array_filter($hits, fn($t) => is_int($t) && $t > $now - RATE_WINDOW));
if (count($hits) >= RATE_LIMIT) {
    flock($fh, LOCK_UN);
    fclose($fh);
    respond(429, ['ok' => false, 'error' => 'Too many messages from this connection. Please try again later or email us.']);
}
$hits[] = $now;
ftruncate($fh, 0);
rewind($fh);
fwrite($fh, json_encode($hits));
flock($fh, LOCK_UN);
fclose($fh);

// --- Validation ----------------------------------------------------------
$name     = field('name');
$email    = field('email');
$phone    = field('phone');
$audience = field('audience');
$message  = field('message');
$consent  = field('consent');

$errors = [];
if ($name === '') {
    $errors[] = 'name';
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'email';
}
if (!in_array($audience, ['job_seeker', 'employer', 'other'], true)) {
    $errors[] = 'audience';
}
if (mb_strlen($message) < 10) {
    $errors[] = 'message';
}
if ($consent !== 'yes') {
    $errors[] = 'consent';
}
foreach (LIMITS as $key => $max) {
    if (mb_strlen($$key) > $max) {
        $errors[] = $key;
    }
}
if ($errors) {
    respond(422, ['ok' => false, 'error' => 'Please check the highlighted fields.', 'fields' => array_values(array_unique($errors))]);
}

// --- Route + send --------------------------------------------------------
$to = match ($audience) {
    'job_seeker' => EMAIL_RECRUITS,
    'employer'   => EMAIL_VANESSA,
    default      => FORM_RECIPIENT !== '' ? FORM_RECIPIENT : EMAIL_RECRUITS,
};
$audienceLabel = ['job_seeker' => 'Job seeker', 'employer' => 'Employer', 'other' => 'Other'][$audience];

$safeName  = header_safe($name);
$safeEmail = header_safe($email);
$subject   = header_safe("Website enquiry ({$audienceLabel}): {$safeName}");

$body = implode("\n", [
    "New enquiry via " . SITE_DOMAIN,
    "",
    "Name:     {$name}",
    "Email:    {$email}",
    "Phone:    " . ($phone !== '' ? $phone : '-'),
    "I am a:   {$audienceLabel}",
    "Consent:  yes (POPIA), " . gmdate('c'),
    "",
    "Message:",
    $message,
    "",
    "--",
    "Sent from IP " . $ip,
]);
$body = str_replace("\0", '', $body);

$headers = [
    'From: Breakwaters Website <' . FROM_ADDRESS . '>',
    'Reply-To: ' . mb_encode_mimeheader($safeName, 'UTF-8') . ' <' . $safeEmail . '>',
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: 8bit',
    'X-Mailer: PHP/' . PHP_VERSION,
];

$sent = @mail($to, mb_encode_mimeheader($subject, 'UTF-8'), $body, implode("\r\n", $headers), '-f' . FROM_ADDRESS);

if (!$sent) {
    respond(502, ['ok' => false, 'error' => 'Mail could not be sent. Please email us directly.']);
}

respond(200, ['ok' => true]);
