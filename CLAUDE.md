# CLAUDE.md — Breakwaters Recruiting website

Marketing site for Breakwaters Recruiting, a human-led recruitment agency in
Johannesburg (founder: Vanessa Boucher) specialising in SAP, Oracle and IT
hiring. Five pages, static hosting on Hostinger, one PHP script for the
contact form. Nothing else runs server-side.

## Branches — read this first

- `main` is the **old** app: Express `server/`, auth, dashboards, react-query.
  Do not build on it.
- `claude/remove-backend-database-567ba1` is the live line of work: the
  5-page brochure site described below. Commit here. It usually lives in a
  worktree at `.claude/worktrees/remove-backend-database-567ba1`.
- `Working-Branch`, `Test-Branch`, `Render-API-Hosted` are historical.

## Stack

- Vite 6 + React 19 + react-router-dom 6, JSX files are `.jsx`.
- `npm run build` = client bundle → SSR bundle → `scripts/prerender.mjs`,
  which writes `build/index.html` and `build/<route>/index.html` for every
  route with that route's own `<title>`, description, canonical, OG/Twitter
  tags and a `BreadcrumbList`. The client **hydrates** (`hydrateRoot`), so
  server and client markup must match — no `Date.now()`/`Math.random()` or
  `typeof window` branches in render.
- `build/` is what goes into `public_html/` (see `DEPLOY.md`). Output dir is
  deliberately still `build`, not `dist`.
- Dependencies are intentionally minimal: react, react-dom, react-router-dom,
  react-icons, web-vitals. No GSAP, no `motion`, no CSS framework. Don't add
  an animation library.
- No tests. The one CRA test was deleted (it asserted text no page renders).

## Hard constraints (from the client brief)

- Brand palette is fixed. All colours are tokens in `client/src/index.css`;
  do not introduce new hex values in components. Fonts: Montagu Slab
  (display) + Roboto (body), self-hosted variable woff2 in
  `src/assets/fonts/`.
- Routes are `/`, `/about`, `/services`, `/job-seekers`, `/contact`. They are
  indexed and in `sitemap.xml`. Don't rename.
- Logo files `src/assets/logos/Logo-full.svg` (header) and the inline
  `LogoMark.jsx` (footer/icons) are used as-is.
- GA4 tag `G-KXCPR8BZMG` in `client/index.html` must keep working. Its
  inline snippet is **hash-listed in the CSP** in `public/.htaccess`; if you
  edit the snippet, re-hash it or the browser blocks it.
- Static only. No Node/Express server, no database. The only server code is
  `client/public/contact.php`. Do not switch it to PHPMailer/SMTP without
  asking — that adds credentials to manage.
- Do not touch `LICENSE`. `client/README.md` is stale CRA boilerplate that
  the owner asked to leave alone.

## Where things live

```
client/
  index.html                 template; site-wide meta + JSON-LD; <!--app-head--> / <!--app-html--> placeholders
  vite.config.js             outDir build, es2022, /contact.php proxy → :8001, preview serves prerendered routes
  scripts/prerender.mjs      route → static HTML; fills sameAs, font preloads, breadcrumbs
  public/                    copied verbatim: .htaccess, contact.php, robots, sitemap, og-image, icons
  src/
    config/site.js           SINGLE SOURCE OF TRUTH for emails, socials, WhatsApp, location
    seo/routes.js            per-route title/description/breadcrumb (used by PageMeta and prerender)
    index.css                tokens, base, buttons, focus, skip link, WhatsApp FAB
    styling/content-pages.css the `cx-` editorial system every page uses (header, section, rows, columns, CTA, form, reveal)
    styling/home.css         homepage hero only (sand gradient, noise, wave-masked title, drifting wave bands)
    styling/header.css, Footer.css
    components/layout/       Layout (skip link + header + <main> + footer + FAB), SiteHeader, WhatsAppButton
    components/seo/PageMeta.js   client-side head updates on in-app navigation
    components/ui/common/    Reveal, ContactDetails, LogoMark
    components/ui/forms/ContactForm.jsx
    hooks/useInView.js       visible-once observer; marks in-viewport nodes visible in a layout effect (no flicker, nothing hidden without JS)
    pages/*.jsx              one file per route
DEPLOY.md                    build, upload, Hostinger mail (SPF/DKIM), verification, local dev
```

## Design system in one paragraph

The editorial `cx-` language is the foundation: flat colour bands
(`.surface-cream/-khaki/-navy` re-tint the semantic tokens), hairline rules,
numbered rows (`cx-list > cx-row`), three-column pillars, a centred CTA
band, pill buttons (`.btn--primary/--secondary`, roles invert on navy).
The homepage hero is the only place the sand/noise/wave treatment appears.
Section rhythm: `--section-y` padding, `.container` (72rem) /
`--narrow` (58rem) / `--text` (44rem). Contrast was computed for every
pairing; the traps are `#5c7096`-style muted text on khaki and `#1a4fa3`
links on khaki — the khaki surface overrides those tokens for that reason.
Focus ring is `--focus` (navy-400 on light, cream on navy), 3px, offset 3px.

## Contact form

- Client: `ContactForm.jsx` → `fetch("/contact.php")`, expects JSON. Fields:
  name, email, phone (optional), audience select (job_seeker/employer/other),
  message, POPIA consent, honeypot `website`, `form_ts` (page-load ms).
  Non-JSON response in dev shows a "start php -S …" message on purpose.
- Server: POST only (405), honeypot/time-trap (400), server-side validation
  + length caps (422), per-IP file rate limit 5/hour in `../contact-rate`
  above the web root, fails closed (503/429). CR/LF stripped from anything
  in headers. Plain-text mail via `mail()`, `From: no-reply@<domain>`,
  `Reply-To` = submitter. Routing: job_seeker → `recruits@`, employer →
  `vanessa@`, other → `FORM_RECIPIENT` (falls back to `recruits@`).
- Nothing is stored; the email is the record.
- The addresses in `contact.php` duplicate `config/site.js` — keep in sync.

## Local dev

```
cd client && npm start                       # :5173, SPA mode
cd client && php -S localhost:8001 -t public # form endpoint (PHP not on this machine's PATH)
cd client && npm run build && npm run preview # :4173, prerendered, what Hostinger serves
```

`vite preview` runs in MPA mode with a tiny middleware so `/about` maps to
`about/index.html` — same as the `.htaccess` rule, no trailing-slash redirect.

## Still TODO (owner input needed)

In `src/config/site.js` (UI hides the feature until filled):
`linkedinUrl`, `facebookUrl`, `whatsappE164`, `formRecipient` (+ the same
`FORM_RECIPIENT` in `contact.php`). After deploy: create the
`no-reply@` mailbox and enable SPF/DKIM on Hostinger.

## Verified state (2026-09-18, commit bfea5a7)

Lighthouse 12 mobile on all five routes: Performance 97–99, Accessibility
100, Best Practices 100, SEO 100. No hydration or console errors. No
horizontal overflow at 360/390/768/1024/1440. One `<h1>` per route.
`contact.php` exercised for 405/400/422/200/429 and header injection with a
local SMTP sink.

## Working conventions the owner asked for

- Report findings before editing; raise structural decisions early.
- Small commits, one concern each, commit messages explain *why*.
- Run `npm run build` after each phase and confirm no new warnings.
- Verify claims with real numbers (Lighthouse, curl, browser), not assurances.
- Tell the owner when the code contradicts the brief instead of guessing.
