<<<<<<< HEAD
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Index from "./pages/Index.jsx";
import Education from "./pages/Education.jsx";
import Experience from "./pages/Experience.jsx";
import Achievements from "./pages/Achievements.jsx";
import Contact from "./pages/Contact.jsx";
import NotFound from "./pages/NotFound.jsx";


import Navbar from "./components/Navbar.jsx";

// GitHub Pages serves the app under /My_Portfolio/; Vite sets import.meta.env.BASE_URL
=======



import { BrowserRouter, Routes, Route } from "react-router-dom";


import Index       from "./pages/Index.jsx";        
import Education   from "./pages/Education.jsx";    
import Experience  from "./pages/Experience.jsx";   
import Achievements from "./pages/Achievements.jsx"; 
import Contact     from "./pages/Contact.jsx";      
import NotFound    from "./pages/NotFound.jsx";     


import Navbar from "./components/Navbar.jsx"; 


>>>>>>> 598802d0d123e6dacf70fae5bee070dc9f7fe7ca
const routerBasename =
  import.meta.env.BASE_URL === "/"
    ? undefined
    : import.meta.env.BASE_URL.replace(/\/$/, "");

<<<<<<< HEAD
const App = () => (
  <BrowserRouter basename={routerBasename}>


    <Navbar />


    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/education" element={<Education />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/achievements" element={<Achievements />} />
      <Route path="/contact" element={<Contact />} />


      <Route path="*" element={<NotFound />} />
=======

const App = () => (
  
  <BrowserRouter basename={routerBasename}>

    {}
    <Navbar />

    {}
    <Routes>
      <Route path="/"             element={<Index />} />
      <Route path="/education"    element={<Education />} />
      <Route path="/experience"   element={<Experience />} />
      <Route path="/achievements" element={<Achievements />} />
      <Route path="/contact"      element={<Contact />} />

      {}
      <Route path="*"             element={<NotFound />} />
>>>>>>> 598802d0d123e6dacf70fae5bee070dc9f7fe7ca
    </Routes>

  </BrowserRouter>
);

export default App;
