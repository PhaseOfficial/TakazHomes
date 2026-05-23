import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import ProductDetail from "./pages/ProductDetail";
import Profile from "./pages/Profile";
import Voice from "./pages/Voice";
import { useEffect } from "react";

const App = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/voice" element={<Voice />} />
      
      <Route
        path="*"
        element={
          <div className="text-center mt-40 text-2xl font-headline-lg text-primary uppercase tracking-widest">
            404 - Page Not Found
          </div>
        }
      />
    </Routes>
  );
};

export default App;
