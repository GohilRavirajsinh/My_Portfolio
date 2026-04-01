/* =====================================================
   NAVBAR COMPONENT — Navbar.jsx

   PURPOSE: Top navigation bar — visible on EVERY page.
   Placed in App.jsx OUTSIDE the <Routes> block.

   REACT CONCEPTS USED:
   - useState  → controls mobile menu open/close
   - NavLink   → from react-router-dom, highlights active page

   CUSTOM CSS USED:
   - .navbar-glass → frosted glass effect (see index.css)
   - .btn-primary  → gold button (see index.css)

   TAILWIND USED:
   - sticky top-0 z-50 → stays fixed at the top while scrolling
   - hidden md:flex   → hidden on mobile, flex on desktop
   - flex items-center justify-between → horizontal layout
   ===================================================== */

import { NavLink } from "react-router-dom"; // NavLink = React Router's smart link
import { useState } from "react";            // useState = React hook for state
import { Menu, X, Code2 } from "lucide-react"; // Icons from lucide-react package

/* -------------------------------------------------------
   NAV ITEMS ARRAY
   Each object has:
   - label → text shown in the navbar
   - path  → URL route it links to

   📝 TODO: Add new pages here if you create them
   Example: { label: "Blog", path: "/blog" }
   ------------------------------------------------------- */
const NAV_ITEMS = [
  { label: "Profile",      path: "/"            },
  { label: "Education",    path: "/education"   },
  { label: "Experience",   path: "/experience"  },
  { label: "Achievements", path: "/achievements"},
  { label: "Contact",      path: "/contact"     },
];

/* =====================================================
   NAVBAR COMPONENT
   ===================================================== */
const Navbar = () => {
  /* -------------------------------------------------------
     useState HOOK — controls mobile menu visibility
     
     isMenuOpen = current value (true = open, false = closed)
     setIsMenuOpen = function to UPDATE the value
     
     When setIsMenuOpen is called, React re-renders the component
     with the new value — this is called "reactivity"
     
     📝 REACT TODO: Add useEffect for hide-on-scroll behavior:
     useEffect(() => {
       const handleScroll = () => {
         if (window.scrollY > 100) setIsHidden(true)
         else setIsHidden(false)
       }
       window.addEventListener('scroll', handleScroll)
       return () => window.removeEventListener('scroll', handleScroll) // cleanup
     }, [])
     ------------------------------------------------------- */
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    /* -------------------------------------------------------
       <nav> — semantic HTML5 element for navigation
       .navbar-glass → frosted glass from index.css
       sticky top-0  → sticks to top of page while scrolling
       z-50          → renders above all other content
       ------------------------------------------------------- */
    <nav className="navbar-glass sticky top-0 z-50 w-full">

      {/* Inner container — max width, centered, horizontal layout */}
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* -------------------------------------------------------
            LOGO / BRAND
            NavLink from react-router-dom — goes to "/" on click
            ------------------------------------------------------- */}
        <NavLink to="/" className="flex items-center gap-2">
          {/* Gold icon box */}
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center"
            style={{ background: "var(--gradient-gold)" }} /* Gold gradient from index.css */
          >
            <Code2 size={18} className="text-primary-foreground" />
          </div>
          {/* Brand name — gold gradient text */}
          <span className="text-xl font-bold text-gradient-gold">
            Ravirajsinh Gohil
          </span>
        </NavLink>

        {/* -------------------------------------------------------
            DESKTOP NAV LINKS
            hidden md:flex → invisible on mobile, shown on tablet+
            ------------------------------------------------------- */}
        <div className="hidden md:flex items-center gap-8">
          {/* .map() loops over NAV_ITEMS and renders a <NavLink> for each */}
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.path}      /* React needs unique key when rendering lists */
              to={item.path}       /* Route this link goes to */
              end={item.path === "/"} /* "end" = exact match for "/" (home) only */
              className={({ isActive }) =>
                /* -------------------------------------------------------
                   CONDITIONAL CLASS — isActive is provided by NavLink
                   If this link matches current URL → isActive = true
                   We apply gold styling to the active link
                   ------------------------------------------------------- */
                `text-sm font-medium transition-colors duration-200 pb-1 ${
                  isActive
                    ? "text-primary border-b-2 border-primary"       /* ACTIVE: gold + underline */
                    : "text-muted-foreground hover:text-foreground"   /* INACTIVE: grey */
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        {/* -------------------------------------------------------
            DOWNLOAD CV BUTTON — desktop only
            📝 NODE.JS TODO: Create server/routes/resume.js
            - GET /api/resume/download → sends PDF file as response
            - Use: res.download('./files/your-resume.pdf')
            Then replace href="#" with "/api/resume/download"
            ------------------------------------------------------- */}
        <a
          href="#" // try to add CV in drive and than the drive link copy here and see what happend 
          className="hidden md:inline-flex btn-primary text-sm"
        >
          Download CV
        </a>

        {/* -------------------------------------------------------
            HAMBURGER BUTTON — mobile only (md:hidden = hide on desktop)
            onClick → toggles isMenuOpen between true and false
            !isMenuOpen = "NOT isMenuOpen" → flips the boolean
            ------------------------------------------------------- */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-muted-foreground hover:text-primary transition-colors"
          aria-label="Toggle menu" /* Accessibility label for screen readers */
        >
          {/* Show X (close) icon if menu is open, else show Menu (hamburger) */}
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>

      {/* -------------------------------------------------------
          MOBILE DROPDOWN MENU
          
          {isMenuOpen && ...} → Conditional Rendering
          This JSX only renders when isMenuOpen === true
          When false, React removes it from the DOM entirely
          ------------------------------------------------------- */}
      {isMenuOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-4 border-t border-border mt-2 pt-4">

          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              onClick={() => setIsMenuOpen(false)} /* Close menu when a link is clicked */
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive ? "text-primary" : "text-muted-foreground"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}

          {/* Download CV button in mobile menu too */}
          <a href="#" className="btn-primary text-sm text-center">
            Download CV
          </a>

        </div>
      )}

    </nav>
  );
};

export default Navbar;