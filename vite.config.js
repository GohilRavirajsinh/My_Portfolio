/* =====================================================
   VITE CONFIG — vite.config.js
   
   Vite is the build tool that runs your React app.
   This file tells Vite HOW to run and build the project.

   HOW TO START DEV SERVER:
   → npm run dev   (runs on http://localhost:5173)

   HOW TO BUILD FOR PRODUCTION:
   → npm run build (creates a /dist folder with final files)

   PLUGINS USED:
   - @vitejs/plugin-react → makes Vite understand JSX (React)
   - @tailwindcss/vite    → processes Tailwind CSS automatically

   PATH ALIAS:
   - "@" maps to the "src" folder
   - So instead of "../../components/Navbar" you write "@/components/Navbar"
   ===================================================== */

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

import path from "path";
import { copyFileSync } from "fs";
import { componentTagger } from "lovable-tagger";

/** GitHub Pages serves 404.html for unknown paths; copy SPA shell so /contact etc. refreshes work. */
function ghPagesSpa404() {
  return {
    name: "gh-pages-spa-404",
    apply: "build",
    closeBundle() {
      const dist = path.resolve(__dirname, "dist");
      copyFileSync(path.join(dist, "index.html"), path.join(dist, "404.html"));
    },
  };
}

export default defineConfig(({ mode }) => ({
  // GitHub Pages project site (production only); dev keeps "/" for simpler local URLs
  base: mode === "production" ? "/My_Portfolio/" : "/",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(),
    tailwindcss(),
    mode === "production" && ghPagesSpa404(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));