import { useEffect } from "react";
import { ROUTES } from "../../seo/routes";
import { siteUrl } from "../../config/site";

function setTag(selector, attrs) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement(selector.startsWith("link") ? "link" : "meta");
    document.head.appendChild(el);
  }
  Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
}

// Client-side counterpart of the prerendered <head>: keeps tags correct on
// in-app navigation. Prerender emits the same set at build time.
export default function PageMeta({ path }) {
  useEffect(() => {
    const meta = ROUTES[path];
    if (!meta) return;
    const url = `${siteUrl}${path === "/" ? "/" : path}`;
    document.title = meta.title;
    setTag("meta[name='description']", { name: "description", content: meta.description });
    setTag("meta[name='robots']", { name: "robots", content: meta.noindex ? "noindex,nofollow" : "index,follow" });
    if (meta.noindex) document.head.querySelector("link[rel='canonical']")?.remove();
    else setTag("link[rel='canonical']", { rel: "canonical", href: url });
    setTag("meta[property='og:title']", { property: "og:title", content: meta.title });
    setTag("meta[property='og:description']", { property: "og:description", content: meta.description });
    setTag("meta[property='og:url']", { property: "og:url", content: url });
    setTag("meta[name='twitter:title']", { name: "twitter:title", content: meta.title });
    setTag("meta[name='twitter:description']", { name: "twitter:description", content: meta.description });
  }, [path]);
  return null;
}
