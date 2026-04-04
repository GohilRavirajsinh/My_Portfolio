/* =====================================================
   MAIN.JSX — Entry Point of the React Application
   
   This is the FIRST file React runs.
   It finds the <div id="root"> in index.html
   and mounts (renders) the entire React app inside it.

   FLOW:
   index.html → main.jsx → App.jsx → all pages

   IMPORTS:
   - createRoot : React 18's way to mount the app
   - App        : the root component (App.jsx)
   - index.css  : global styles + Tailwind
   ===================================================== */

import { StrictMode } from "react";       // Helps catch errors during development
import { createRoot } from "react-dom/client"; // React 18 API to render into the DOM
import App from "./App.jsx";              // Root component — contains all routes
import "./index.css";                     // Global CSS + Tailwind styles

/* -------------------------------------------------------
   Mount the app into the <div id="root"> in index.html
   
   document.getElementById("root") — finds that div
   createRoot(...)                  — creates a React root
   .render(...)                     — renders App inside it
   ------------------------------------------------------- */
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* StrictMode runs extra checks in development only */}
    <App />
  </StrictMode>
);