import { Link } from "react-router-dom";
import "../styling/content-pages.css";
import PageMeta from "../components/seo/PageMeta";
import { siteName, siteUrl, owner, emailVanessa, locality, region } from "../config/site";

// Generic legal pages. Both share one layout: a plain header, then headed
// sections in a text-width column. Last-reviewed date is static on purpose
// (no Date.now() in render; the client hydrates prerendered HTML).
const REVIEWED = "18 September 2026";
const HOST = siteUrl.replace("https://", "");

function Legal({ path, title, intro, sections }) {
  return (
    <>
      <PageMeta path={path} />
      <header className="cx-header surface-cream">
        <div className="container container--narrow cx-header__inner">
          <h1>{title}</h1>
          <p className="cx-lede">{intro}</p>
          <p className="cx-legal__date">Last reviewed {REVIEWED}</p>
        </div>
      </header>
      <section className="cx-section">
        <div className="container container--text cx-legal">
          {sections.map(({ h, body }) => (
            <section key={h} className="cx-prose">
              <h2>{h}</h2>
              {body}
            </section>
          ))}
        </div>
      </section>
    </>
  );
}

const PRIVACY = [
  { h: "Who we are", body: (
    <p>{siteName} ("we", "us") is a recruitment agency based in {locality}, {region}, South Africa, and is the responsible party for personal information collected through {HOST}. Our Information Officer is {owner}, reachable at <a href={`mailto:${emailVanessa}`}>{emailVanessa}</a>.</p>
  )},
  { h: "What we collect", body: (<>
    <p>When you use the contact form or email us we receive what you send: your name, email address, optional phone number, whether you are a job seeker or an employer, and your message. If you send a CV we also receive whatever it contains, such as your work history, qualifications and references.</p>
    <p>We use Google Analytics to understand how the site is used. It sets cookies and records anonymised usage data such as pages visited, approximate location and device type. It does not identify you personally.</p>
  </>)},
  { h: "Why we collect it", body: (<>
    <p>We process personal information under the Protection of Personal Information Act 4 of 2013 (POPIA) for the following purposes:</p>
    <ul>
      <li>to respond to your enquiry;</li>
      <li>for job seekers, to assess your suitability for roles and introduce you to prospective employers, with your consent;</li>
      <li>for employers, to understand your requirements and propose candidates;</li>
      <li>to keep basic records of our dealings with you;</li>
      <li>to comply with legal obligations.</li>
    </ul>
  </>)},
  { h: "Who we share it with", body: (<>
    <p>We share a job seeker's details with a prospective employer only after discussing the role with the job seeker and obtaining their agreement. We do not sell personal information or share it for marketing.</p>
    <p>Our website and email are hosted by Hostinger, and analytics are provided by Google. These providers process data on our behalf under their own privacy terms. Some processing may take place outside South Africa; where it does, we rely on the provider's contractual safeguards.</p>
  </>)},
  { h: "How long we keep it", body: (
    <p>Enquiries are kept for as long as needed to deal with them and for a reasonable period afterwards. Job seeker profiles and CVs are kept while you remain interested in opportunities through us, and are deleted on request. Records we must keep by law are retained for the legally required period.</p>
  )},
  { h: "Your rights", body: (<>
    <p>Under POPIA you may ask us to confirm what personal information we hold about you, to correct or delete it, or to stop processing it. You may withdraw consent at any time. To exercise any of these rights, email <a href={`mailto:${emailVanessa}`}>{emailVanessa}</a>.</p>
    <p>If you are not satisfied with our response you may lodge a complaint with the Information Regulator (South Africa) at <a href="https://inforegulator.org.za" target="_blank" rel="noopener noreferrer">inforegulator.org.za</a>.</p>
  </>)},
  { h: "Cookies", body: (
    <p>The only cookies this site sets are those used by Google Analytics. You can block or delete them in your browser settings without affecting the site's content or the contact form.</p>
  )},
  { h: "Security", body: (
    <p>The site is served over HTTPS. Form submissions are sent by email to the relevant inbox and are not stored on the web server. We take reasonable steps to protect the information we hold, but no transmission over the internet is completely secure.</p>
  )},
  { h: "Changes to this policy", body: (
    <p>We may update this policy from time to time. The date at the top shows when it was last reviewed. Continued use of the site after a change means you accept the updated policy.</p>
  )},
];

const TERMS = [
  { h: "Using this website", body: (
    <p>By using {HOST} you agree to these terms. If you do not agree, please do not use the site. The site is operated by {siteName} from {locality}, South Africa, and these terms are governed by South African law.</p>
  )},
  { h: "What the site is for", body: (
    <p>The site describes our recruitment services and lets job seekers and employers contact us. Nothing on the site is an offer of employment, a guarantee of placement, or professional, legal or financial advice.</p>
  )},
  { h: "Job seekers", body: (<>
    <p>By sending us your CV you confirm that the information in it is accurate and that you have the right to share any references it contains. We will discuss a role with you before introducing you to an employer, and we introduce you only with your agreement.</p>
    <p>We do not charge job seekers for our services.</p>
  </>)},
  { h: "Employers", body: (
    <p>Enquiries through the site are not a contract for services. Recruitment engagements, including fees, replacement guarantees and payment terms, are agreed separately in writing before any work begins.</p>
  )},
  { h: "Your conduct", body: (<>
    <p>You agree not to:</p>
    <ul>
      <li>submit false, misleading or unlawful information through the site;</li>
      <li>use the contact form to send spam, marketing or bulk messages;</li>
      <li>attempt to interfere with the site's operation or security;</li>
      <li>copy or reuse the site's content, logo or branding without our written permission.</li>
    </ul>
  </>)},
  { h: "Content and accuracy", body: (
    <p>We try to keep the site accurate and up to date, but we do not guarantee that it is free of errors or omissions and we may change it at any time. Links to other websites are provided for convenience; we are not responsible for their content or privacy practices.</p>
  )},
  { h: "Intellectual property", body: (
    <p>All content on the site, including text, the Breakwaters name and logo, is owned by {siteName} or used with permission, and is protected by copyright and trademark law.</p>
  )},
  { h: "Limitation of liability", body: (
    <p>To the extent permitted by law, {siteName} is not liable for any loss or damage arising from your use of, or inability to use, the site or its content. Nothing in these terms limits liability that cannot be excluded under South African law, including the Consumer Protection Act where it applies.</p>
  )},
  { h: "Privacy", body: (
    <p>How we handle personal information is set out in our <Link to="/privacy">privacy policy</Link>, which forms part of these terms.</p>
  )},
  { h: "Contact", body: (
    <p>Questions about these terms can be sent to <a href={`mailto:${emailVanessa}`}>{emailVanessa}</a>.</p>
  )},
];

export function PrivacyPage() {
  return (
    <Legal
      path="/privacy"
      title="Privacy policy"
      intro="How Breakwaters Recruiting collects, uses and protects your personal information, in line with POPIA."
      sections={PRIVACY}
    />
  );
}

export function TermsPage() {
  return (
    <Legal
      path="/terms"
      title="Terms and conditions"
      intro="The terms that apply when you use this website or contact us through it."
      sections={TERMS}
    />
  );
}
