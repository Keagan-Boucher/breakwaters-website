import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: { outDir: "build" },
  server: {
    // Local PHP for the contact form: `php -S localhost:8001 -t public` (see DEPLOY.md)
    proxy: { "/contact.php": "http://127.0.0.1:8001" },
  },
});
