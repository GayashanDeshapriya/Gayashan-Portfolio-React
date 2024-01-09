import { Routes, Route, useLocation } from "react-router-dom";
import About from "../pages/about/About";
import Portfolio from "../pages/portfolio/Portfolio";
import Contact from "../pages/contact/Contact";
import Home from "../pages/Home/home";
import Skills from "../pages/Skills/Skills";
import Certify from "../pages/certification/certifi";
import Badges from "../pages/Badges/Badge";
import Education from "../pages/education/Education";




const AnimatedRoutes = ({ personalDetails }) => {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home />} />
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

      <Route path="/education" element={<Education />} />

      <Route path="/certificate" element={<Certify />} />

      <Route path="/portfolio" element={<Portfolio />} />

      <Route path="/badges" element={<Badges />} />

      <Route
        path="/contact" element={<Contact name={personalDetails.name} location={personalDetails.location} email={personalDetails.email} />
        }
      />
    </Routes>
  );
};

export default AnimatedRoutes;
