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
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(),
    tailwindcss(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));