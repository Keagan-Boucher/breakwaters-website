// Renders each route to static HTML after `vite build`.
// build/index.html (from Vite) is the template; the SSR bundle in build-ssr/
// supplies render(path). Output: build/index.html, build/about/index.html, ...
import { readFileSync, writeFileSync, mkdirSync, rmSync, readdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const build = join(root, "build");
const { render } = await import(pathToFileURL(join(root, "build-ssr", "entry-server.js")));
const { ROUTES } = await import(pathToFileURL(join(root, "src", "seo", "routes.js")));
const site = await import(pathToFileURL(join(root, "src", "config", "site.js")));
const { siteUrl, siteName, socialLinks } = site;

const template = readFileSync(join(build, "index.html"), "utf8");
const esc = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
const jsonLd = (obj) => `<script type="application/ld+json">${JSON.stringify(obj)}</script>`;

// Site-wide JSON-LD. Built here (not in index.html) so fields still marked
// TODO in config/site.js are left out instead of shipped empty.
const ORG = `${siteUrl}/#organization`;
const FOUNDER = `${siteUrl}/#founder`;
const SERVICES = ["Talent acquisition", "SAP recruitment", "Oracle recruitment", "IT recruitment", "Payroll outsourcing", "Workforce solutions", "Coaching and development", "Change management"];
const graph = [
  {
    "@type": "EmploymentAgency",
    "@id": ORG,
    name: siteName,
    url: `${siteUrl}/`,
    logo: `${siteUrl}/logo-512.png`,
    image: `${siteUrl}/og-image.png`,
    description: "People and talent solutions for South African businesses: talent acquisition, payroll outsourcing, coaching and development, and change management, with specialist SAP, Oracle and IT recruitment.",
    email: site.emailVanessa,
    ...(site.whatsappE164 && { telephone: `+${site.whatsappE164}` }),
    address: { "@type": "PostalAddress", addressLocality: site.locality, addressRegion: site.region, addressCountry: site.country },
    areaServed: { "@type": "Country", name: "South Africa" },
    founder: { "@id": FOUNDER },
    knowsAbout: SERVICES,
    contactPoint: [{ "@type": "ContactPoint", contactType: "employers", email: site.emailVanessa, availableLanguage: "en" }],
    sameAs: socialLinks.map((s) => s.url),
  },
  {
    "@type": "Person",
    "@id": FOUNDER,
    name: site.owner,
    jobTitle: "Founder",
    worksFor: { "@id": ORG },
    description: "Founder of Breakwaters Recruiting after nearly two decades in IT consulting, working with SAP, Oracle and IT teams across South Africa.",
    knowsAbout: ["SAP", "Oracle", "IT recruitment", "IT consulting"],
    ...(site.founderLinkedinUrl && { sameAs: [site.founderLinkedinUrl] }),
  },
  {
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: `${siteUrl}/`,
    name: siteName,
    inLanguage: "en-ZA",
    publisher: { "@id": ORG },
  },
];
const siteLd = jsonLd({ "@context": "https://schema.org", "@graph": graph });

// Per-route extras: the services page lists what it offers.
const routeLd = {
  "/services": jsonLd({
    "@context": "https://schema.org",
    "@graph": SERVICES.map((name) => ({
      "@type": "Service",
      name,
      serviceType: name,
      provider: { "@id": ORG },
      areaServed: { "@type": "Country", name: "South Africa" },
    })),
  }),
};

// Both fonts are used above the fold on every route; preload their hashed files.
const fontPreloads = readdirSync(join(build, "assets"))
  .filter((f) => f.endsWith(".woff2"))
  .map((f) => `<link rel="preload" as="font" type="font/woff2" crossorigin href="/assets/${f}" />`);

function head(path, meta) {
  const url = `${siteUrl}${path}`;
  const tags = [
    ...fontPreloads,
    `<title>${esc(meta.title)}</title>`,
    `<meta name="description" content="${esc(meta.description)}" />`,
    `<meta property="og:title" content="${esc(meta.title)}" />`,
    `<meta property="og:description" content="${esc(meta.description)}" />`,
    `<meta name="twitter:title" content="${esc(meta.title)}" />`,
    `<meta name="twitter:description" content="${esc(meta.description)}" />`,
  ];
  // The 404 page is served at whatever URL was requested: no canonical, no og:url.
  if (!meta.noindex) tags.push(`<link rel="canonical" href="${url}" />`, `<meta property="og:url" content="${url}" />`);
  tags.push(siteLd);
  if (routeLd[path]) tags.push(routeLd[path]);
  if (meta.service) {
    tags.push(jsonLd({
      "@context": "https://schema.org",
      "@type": "Service",
      name: meta.service,
      serviceType: meta.service,
      description: meta.description,
      url,
      provider: { "@id": ORG },
      areaServed: { "@type": "Country", name: "South Africa" },
    }));
  }
  if (meta.breadcrumb) {
    const ld = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: siteName, item: `${siteUrl}/` },
        ...(meta.parent ? [{ "@type": "ListItem", position: 2, name: ROUTES[meta.parent].breadcrumb, item: `${siteUrl}${meta.parent}` }] : []),
        { "@type": "ListItem", position: meta.parent ? 3 : 2, name: meta.breadcrumb, item: url },
      ],
    };
    tags.push(jsonLd(ld));
  }
  return tags.join("\n    ");
}

for (const [path, meta] of Object.entries(ROUTES)) {
  const html = template
    .replace('<meta name="robots" content="index,follow" />', `<meta name="robots" content="${meta.noindex ? "noindex,nofollow" : "index,follow"}" />`)
    .replace("<!--app-head-->", head(path, meta))
    // React 19 hoists <link rel="preload"> for images to the top of the body
    // when there is no <head> in the tree; the client never renders them.
    .replace("<!--app-html-->", render(path).replace(/^(<link [^>]*\/>)+/, ""));
  const out = path === "/" ? join(build, "index.html") : join(build, path.slice(1), "index.html");
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, html);
  console.log("prerendered", path, "->", out.replace(root, ""));
}
rmSync(join(root, "build-ssr"), { recursive: true, force: true });
