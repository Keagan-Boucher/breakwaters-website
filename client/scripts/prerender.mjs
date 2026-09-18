// Renders each route to static HTML after `vite build`.
// build/index.html (from Vite) is the template; the SSR bundle in build-ssr/
// supplies render(path). Output: build/index.html, build/about/index.html, ...
import { readFileSync, writeFileSync, mkdirSync, rmSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const build = join(root, "build");
const { render } = await import(pathToFileURL(join(root, "build-ssr", "entry-server.js")));
const { ROUTES } = await import(pathToFileURL(join(root, "src", "seo", "routes.js")));
const { siteUrl, siteName } = await import(pathToFileURL(join(root, "src", "config", "site.js")));

const template = readFileSync(join(build, "index.html"), "utf8");
const esc = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

function head(path, meta) {
  const url = `${siteUrl}${path}`;
  const tags = [
    `<title>${esc(meta.title)}</title>`,
    `<meta name="description" content="${esc(meta.description)}" />`,
    `<link rel="canonical" href="${url}" />`,
    `<meta property="og:title" content="${esc(meta.title)}" />`,
    `<meta property="og:description" content="${esc(meta.description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta name="twitter:title" content="${esc(meta.title)}" />`,
    `<meta name="twitter:description" content="${esc(meta.description)}" />`,
  ];
  if (meta.breadcrumb) {
    const ld = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: siteName, item: `${siteUrl}/` },
        { "@type": "ListItem", position: 2, name: meta.breadcrumb, item: url },
      ],
    };
    tags.push(`<script type="application/ld+json">${JSON.stringify(ld)}</script>`);
  }
  return tags.join("\n    ");
}

for (const [path, meta] of Object.entries(ROUTES)) {
  const html = template
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
