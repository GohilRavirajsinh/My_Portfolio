


import { useLocation, Link } from "react-router-dom";


import { useEffect } from "react";


const NotFound = () => {
  
  const location = useLocation();

  
  useEffect(() => {
    console.error("404 Error: User visited a page that doesn't exist:", location.pathname);
  }, [location.pathname]);

  return (
    
    <div
      className="flex min-h-screen items-center justify-center"
      style={{ background: "hsl(var(--background))" }} 
    >
      <div className="text-center">
        {}
        <h1
          className="mb-4 text-8xl font-bold"
          style={{
            
            background: "var(--gradient-gold)",
            WebkitBackgroundClip: "text",       
            WebkitTextFillColor: "transparent", 
          }}
        >
          404
        </h1>

        {}
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
