<<<<<<< HEAD
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

=======



import { useLocation, Link } from "react-router-dom";


import { useEffect } from "react";


const NotFound = () => {
  
  const location = useLocation();

  
>>>>>>> 598802d0d123e6dacf70fae5bee070dc9f7fe7ca
  useEffect(() => {
    console.error("404 Error: User visited a page that doesn't exist:", location.pathname);
  }, [location.pathname]);

  return (
<<<<<<< HEAD
    <div
      className="flex min-h-screen items-center justify-center"
      style={{ background: "hsl(var(--background))" }}
    >
      <div className="text-center">
        <h1
          className="mb-4 text-8xl font-bold"
          style={{
            background: "var(--gradient-gold)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
=======
    
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
>>>>>>> 598802d0d123e6dacf70fae5bee070dc9f7fe7ca
          }}
        >
          404
        </h1>

<<<<<<< HEAD
        <p className="mb-8 text-muted-foreground">
          Oops! The page <span className="text-primary">{location.pathname}</span> doesn't exist.
        </p>
=======
        {}
        <p className="mb-2 text-2xl font-bold text-foreground">Page Not Found</p>
        <p className="mb-8 text-muted-foreground">
          Oops! The page <span className="text-primary">{location.pathname}</span> doesn't exist.
        </p>

        {/* Link back to home — uses React Router Link (no page reload) */}
>>>>>>> 598802d0d123e6dacf70fae5bee070dc9f7fe7ca
        <Link to="/" className="btn-primary">
          ← Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
