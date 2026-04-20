

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

import path from "path";
import { copyFileSync } from "fs";
import { componentTagger } from "lovable-tagger";


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