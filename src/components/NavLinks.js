import { useState } from "react";
import { NavLink } from "react-router-dom";
import openMenu from "../images/open.svg";
import closeMenu from "../images/close.svg";

const NavLinks = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <button className="dropdown-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? (
          <img className="closeMenu" src={closeMenu} alt="Close" />
        ) : (
          <img className="openMenu" src={openMenu} alt="Open" />
        )}
      </button>
      <nav className={`links ${isMenuOpen ? "open" : "closed"}`}>
        <NavLink to="/" onClick={() => setIsMenuOpen(false)}>
          Home
        </NavLink>
        <NavLink to="/about" onClick={() => setIsMenuOpen(false)}>
          About
        </NavLink>

        <NavLink to="/skills" onClick={() => setIsMenuOpen(false)}>
        Skills/Technologies
        </NavLink>

        <NavLink to="/certificate" onClick={() => setIsMenuOpen(false)}>
          Certifications
        </NavLink>

        <NavLink to="/badges" onClick={() => setIsMenuOpen(false)}>
          Badges
        </NavLink>
        
        <NavLink to="/portfolio" onClick={() => setIsMenuOpen(false)}>
          Projects
        </NavLink>
        
        <NavLink to="/contact" onClick={() => setIsMenuOpen(false)}>
          Contact
        </NavLink>
        
      </nav>
    </>
  );
};

export default NavLinks;
