/* =====================================================
   APP.JSX — Root Application Component
   
   This is the "shell" of the whole app.
   It sets up:
   - React Router → handles page navigation without reload
   - All page routes → which URL shows which page

   REACT ROUTER BASICS:
   <BrowserRouter> → enables client-side routing (SPA)
   <Routes>        → container for all route definitions
   <Route>         → maps a URL path to a React component

   EXAMPLE:
   User visits "/education" → React shows <Education /> component
   No full page reload! React swaps the component instantly.

   ===================================================== */

/* -------------------------------------------------------
   REACT ROUTER IMPORTS
   BrowserRouter → wraps app to enable routing
   Routes        → groups all Route definitions
   Route         → one URL path = one page component
   ------------------------------------------------------- */
import { BrowserRouter, Routes, Route } from "react-router-dom";

/* -------------------------------------------------------
   PAGE IMPORTS
   Each file is a separate page (URL route)
   ------------------------------------------------------- */
import Index       from "./pages/Index.jsx";        // "/" — Home / Profile
import Education   from "./pages/Education.jsx";    // "/education"
import Experience  from "./pages/Experience.jsx";   // "/experience"
import Achievements from "./pages/Achievements.jsx"; // "/achievements"
import Contact     from "./pages/Contact.jsx";      // "/contact"
import NotFound    from "./pages/NotFound.jsx";     // "*" — 404 page

/* -------------------------------------------------------
   COMPONENT IMPORTS
   ------------------------------------------------------- */
import Navbar from "./components/Navbar.jsx"; // Top navigation bar

/* =====================================================
   ROOT APP COMPONENT
   
   📝 REACT TODO: When you learn React Query (data fetching):
   1. Install: npm install @tanstack/react-query
   2. import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
   3. const queryClient = new QueryClient()
   4. Wrap <BrowserRouter> with <QueryClientProvider client={queryClient}>
   5. Then use useQuery() hook in any page to fetch from your Node.js API
   ===================================================== */
const App = () => (
  /* BrowserRouter — enables SPA navigation across the whole app */
  <BrowserRouter>

    {/* -------------------------------------------------------
        NAVBAR — placed OUTSIDE <Routes> so it shows on EVERY page
        ------------------------------------------------------- */}
    <Navbar />

    {/* -------------------------------------------------------
        ROUTES — defines which component shows at which URL
        
        ORDER MATTERS: Put specific routes FIRST, catch-all LAST
        path="*" → catches any URL that doesn't match above routes
        ------------------------------------------------------- */}
    <Routes>
      <Route path="/"             element={<Index />} />
      <Route path="/education"    element={<Education />} />
      <Route path="/experience"   element={<Experience />} />
      <Route path="/achievements" element={<Achievements />} />
      <Route path="/contact"      element={<Contact />} />

      {/* ⚠️ ALWAYS keep this LAST — it's the 404 fallback */}
      <Route path="*"             element={<NotFound />} />
    </Routes>

  </BrowserRouter>
);

export default App;
