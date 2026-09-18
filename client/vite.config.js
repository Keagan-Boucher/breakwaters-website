import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

// Mirrors the .htaccess rules: /about -> /about/index.html, no redirect;
// unknown paths get build/404/index.html with a 404 status.
const prerenderedRoutes = {
  name: "prerendered-routes",
  configurePreviewServer(server) {
    server.middlewares.use((req, res, next) => {
      if (/^\/[a-z0-9-]+$/.test(req.url)) req.url += "/";
      if (/^\/[a-z0-9-]+\/?$/.test(req.url) && !existsSync(join("build", req.url, "index.html"))) {
        res.writeHead(404, { "Content-Type": "text/html" });
        return res.end(readFileSync(join("build", "404", "index.html")));
      }
      next();
    });
  },
};

export default defineConfig(({ isPreview }) => ({
  plugins: [react(), prerenderedRoutes],
  // preview serves the prerendered build/<route>/index.html like Apache will;
  // dev keeps the SPA fallback because routes only exist in memory there.
  appType: isPreview ? "mpa" : "spa",
  build: { outDir: "build", target: "es2022" },
  preview: { port: Number(process.env.PORT) || 4173 },
  server: {
    // Local PHP for the contact form: `php -S localhost:8001 -t public` (see DEPLOY.md)
    proxy: { "/contact.php": "http://127.0.0.1:8001" },
  },
}));
