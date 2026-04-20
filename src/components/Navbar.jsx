

import { NavLink } from "react-router-dom"; 
import { useState } from "react";            
import { Menu, X, Code2 } from "lucide-react"; 


const NAV_ITEMS = [
  { label: "Profile",      path: "/"            },
  { label: "Education",    path: "/education"   },
  { label: "Experience",   path: "/experience"  },
  { label: "Achievements", path: "/achievements"},
  { label: "Contact",      path: "/contact"     },
];


const Navbar = () => {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    
    <nav className="navbar-glass sticky top-0 z-50 w-full">

      {}
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {}
        <NavLink to="/" className="flex items-center gap-2">
          {}
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center"
            style={{ background: "var(--gradient-gold)" }} 
          >
            <Code2 size={18} className="text-primary-foreground" />
          </div>
          {}
          <span className="text-xl font-bold text-gradient-gold">
            Ravirajsinh Gohil
          </span>
        </NavLink>

        {}
        <div className="hidden md:flex items-center gap-8">
          {}
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.path}      
              to={item.path}       
              end={item.path === "/"} 
              className={({ isActive }) =>
                
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

        {}
        <a
          href="#" 
          className="hidden md:inline-flex btn-primary text-sm"
        >
          Download CV
        </a>

        {}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-muted-foreground hover:text-primary transition-colors"
          aria-label="Toggle menu" 
        >
          {}
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>

      {}
      {isMenuOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-4 border-t border-border mt-2 pt-4">

          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              onClick={() => setIsMenuOpen(false)} 
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive ? "text-primary" : "text-muted-foreground"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}

          {}
          <a href="#" className="btn-primary text-sm text-center">
            Download CV
          </a>

        </div>
      )}

    </nav>
  );
};

export default Navbar;