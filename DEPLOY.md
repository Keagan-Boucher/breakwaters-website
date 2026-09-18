# Deploying breakwatersrecruiting.co.za

Static site (Vite + React, prerendered) plus one PHP script for the contact
form. Hosted on Hostinger shared hosting; nothing else runs server-side.

## 1. Before the first deploy: fill in the TODOs

`client/src/config/site.js`

| Constant        | What to put there                                              |
|-----------------|----------------------------------------------------------------|
| `linkedinUrl`   | Full LinkedIn company page URL. Empty = icon not rendered.     |
| `facebookUrl`   | Full Facebook page URL. Empty = icon not rendered.             |
| `whatsappE164`  | Digits only, country code first: `27823703603`. Empty = no WhatsApp button. |
| `formRecipient` | Inbox for form submissions where "I am a…" = Other.            |

`client/public/contact.php` — mirror `FORM_RECIPIENT` there (PHP cannot read
the JS config). `FROM_ADDRESS` must be a mailbox that exists on the domain
(see §4).

## 2. Build

```bash
cd client
npm install
npm run build
```

`npm run build` runs three steps: the client bundle, an SSR bundle, and
`scripts/prerender.mjs`, which writes a static `index.html` for every route:

```
build/
  index.html                 /
  about/index.html           /about
  services/index.html        /services
  job-seekers/index.html     /job-seekers
  contact/index.html         /contact
  contact.php                form endpoint
  .htaccess                  redirects, headers, caching, routing
  assets/                    hashed JS/CSS/fonts/SVG
  og-image.png  logo-512.png  apple-touch-icon.png  favicon.ico
  robots.txt  sitemap.xml
```

## 3. Upload

Upload the **contents** of `client/build/` into `public_html/` (hPanel →
Files → File Manager, or FTP). Replace everything that was there. Make sure
the hidden `.htaccess` came across — File Manager hides dotfiles by default.

`contact.php` lands at `public_html/contact.php` and is served directly:
the `.htaccess` routing rules pass real files through before any rewrite.

The rate limiter writes to `public_html/../contact-rate/` (i.e. next to
`public_html`, not inside it). PHP creates it on first use; if the account
does not allow that it falls back to the system temp dir. If neither is
writable the form returns 503 rather than accepting unlimited submissions.

## 4. Mail: make Hostinger deliver it

`contact.php` uses PHP `mail()`. Hostinger only relays mail whose `From`
address is on a domain hosted in the same account, and receiving servers
check SPF/DKIM for that domain. To set up:

1. **Create the sender mailbox**: hPanel → Emails → create
   `no-reply@breakwatersrecruiting.co.za` (any password; nobody logs in).
   This must match `FROM_ADDRESS` in `contact.php`.
2. **SPF**: hPanel → Emails → DNS/Email settings usually adds it
   automatically. Check that the domain's DNS has a TXT record like
   `v=spf1 include:_spf.mail.hostinger.com ~all`. If mail is also sent
   from Google Workspace/Microsoft 365, keep both includes in one record.
3. **DKIM**: hPanel → Emails → DKIM → enable for the domain; it publishes the
   TXT record for you.
4. **DMARC** (optional but helps): TXT at `_dmarc` with
   `v=DMARC1; p=none; rua=mailto:vanessa@breakwatersrecruiting.co.za`.
5. Confirm `recruits@` and `vanessa@` exist (they are the To addresses).

## 5. Verify end to end after deploy

1. `https://breakwatersrecruiting.co.za/about` loads directly (not via the
   homepage) and View Source shows the page's own `<title>` and `<h1>`.
2. `http://www.breakwatersrecruiting.co.za/services` 301s to
   `https://breakwatersrecruiting.co.za/services`.
3. `curl -I https://breakwatersrecruiting.co.za/contact.php` returns
   `405` with `Content-Type: application/json`.
4. Submit the form on `/contact` as **Job seeker** → mail arrives at
   `recruits@`; as **Employer** → `vanessa@`. Reply-To is the submitter.
5. Submit six times quickly → the sixth gets "Too many messages" (429).
6. Paste the homepage URL into LinkedIn's Post Inspector and WhatsApp: the
   1200×630 card shows.
7. Google Search Console → URL Inspection on `/services`: rendered HTML
   contains the content and the `BreadcrumbList`.

## 6. Local development

```bash
cd client
npm start                         # Vite on http://localhost:5173
php -S localhost:8001 -t public   # in a second terminal: contact.php
```

Vite proxies `/contact.php` to port 8001. Without the PHP server the form
shows a "Dev mode: /contact.php did not return JSON…" message so a missing
proxy is never mistaken for a production bug. PHP will try to send real
mail; to capture it locally instead, run PHP with
`-d SMTP=127.0.0.1 -d smtp_port=1025` and any local SMTP sink.

`npm run preview` serves the production build (with prerendered routes) on
http://localhost:4173, also proxying `/contact.php`.

## 7. Things that still need a human

- Founder portrait: `AboutUsPage` renders a placeholder frame. Drop a
  `founder-vanessa-boucher.webp` (4:5) into `src/assets/images/` and replace
  `ImagePlaceholder` with an `<img width height loading="lazy">`.
- If the GA4 inline snippet in `client/index.html` is ever edited, re-hash
  it for the CSP in `public/.htaccess` (`script-src 'sha256-…'`), or the
  browser will block it.
