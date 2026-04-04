/* =====================================================
   NOT FOUND PAGE — NotFound.jsx
   Route: "*" (any URL that doesn't match other routes)
   
   This page shows when a user visits a URL that doesn't exist.
   Example: /random-page → shows this 404 page.
   
   React Router automatically shows this because App.jsx has:
   <Route path="*" element={<NotFound />} />
   (The "*" wildcard catches ALL unmatched routes)

   REACT CONCEPTS USED:
   - useLocation hook → reads current URL
   - useEffect        → runs side effects (console.error here)
   ===================================================== */

/* -------------------------------------------------------
   REACT ROUTER IMPORTS
   useLocation → hook that gives current URL info
   Link        → like <a> but uses React Router (no page reload)
   ------------------------------------------------------- */
import { useLocation, Link } from "react-router-dom";

/* -------------------------------------------------------
   REACT IMPORT
   useEffect → runs a function AFTER the component renders
   ------------------------------------------------------- */
import { useEffect } from "react";

/* =====================================================
   COMPONENT
   ===================================================== */
const NotFound = () => {
  /* -------------------------------------------------------
     useLocation() → returns the current URL's location object
     location.pathname = the URL path, e.g. "/random-page"
     ------------------------------------------------------- */
  const location = useLocation();

  /* -------------------------------------------------------
     useEffect → runs once after component mounts
     → Logs the broken URL to the browser console
     
     Dependencies array [location.pathname]:
     → Re-runs if the URL changes (user navigates to another broken URL)
     ------------------------------------------------------- */
  useEffect(() => {
    console.error("404 Error: User visited a page that doesn't exist:", location.pathname);
  }, [location.pathname]);

  return (
    /* Full-screen centered layout */
    <div
      className="flex min-h-screen items-center justify-center"
      style={{ background: "hsl(var(--background))" }} /* Dark background */
    >
      <div className="text-center">
        {/* Large 404 number */}
        <h1
          className="mb-4 text-8xl font-bold"
          style={{
            /* Inline style using CSS variables for the gold gradient */
            background: "var(--gradient-gold)",
            WebkitBackgroundClip: "text",       /* Clip gradient to text */
            WebkitTextFillColor: "transparent", /* Make text transparent */
          }}
        >
          404
        </h1>

        {/* Error message */}
        <p className="mb-2 text-2xl font-bold text-foreground">Page Not Found</p>
        <p className="mb-8 text-muted-foreground">
          Oops! The page <span className="text-primary">{location.pathname}</span> doesn't exist.
        </p>

        {/* Link back to home — uses React Router Link (no page reload) */}
        <Link to="/" className="btn-primary">
          ← Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
