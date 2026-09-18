import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Mirrors the .htaccess rule: /about -> /about/index.html, no redirect.
const prerenderedRoutes = {
  name: "prerendered-routes",
  configurePreviewServer(server) {
    server.middlewares.use((req, _res, next) => {
      if (/^\/[a-z-]+$/.test(req.url)) req.url += "/";
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
  server: {
    // Local PHP for the contact form: `php -S localhost:8001 -t public` (see DEPLOY.md)
    proxy: { "/contact.php": "http://127.0.0.1:8001" },
  },
}));
