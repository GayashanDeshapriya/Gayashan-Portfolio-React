import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { useEffect } from "react";
import About from "../pages/about/About";
import Portfolio from "../pages/portfolio/Portfolio";
import Contact from "../pages/contact/Contact";
import Home from "../pages/Home/home";
import Skills from "../pages/Skills/Skills";
import Certify from "../pages/certification/certifi";

const AnimatedRoutes = ({ personalDetails }) => {
  const location = useLocation();

  useEffect(() => {
    // Redirect to the home page when the user visits the root URL
    if (location.pathname === "/") {
      return <Navigate to="/home" replace />;
    }
  }, [location]);

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/home" element={<Home />} />
      <Route
        path="/about"
        element={
          <About
            name={personalDetails.name}
            location={personalDetails.location}
            email={personalDetails.email}
            availability={personalDetails.availability}
            brand={personalDetails.brand}
          />
        }
      />
      <Route path="/skills" element={<Skills />} />

      <Route path="/certificate" element={<Certify />} />

      <Route path="/portfolio" element={<Portfolio />} />

      <Route
        path="/contact"
        element={
          <Contact
            name={personalDetails.name}
            location={personalDetails.location}
            email={personalDetails.email}
          />
        }
      />
    </Routes>
  );
};

export default AnimatedRoutes;
