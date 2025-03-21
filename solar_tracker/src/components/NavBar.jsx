import React, { useState } from "react";
import "./NavBar.css";
import solarlogo from "../assets/bgremovesolar.png";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Importing icons

const NavBar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={solarlogo} alt="Logo" className="logo-icon" />
        <span className="logo-text">Micron Solar</span>
      </div>
      
      <div className={`navlinks-container ${isMobile ? "mobile-menu" : ""}`}>
        <ul className="navbar-links">
          <li><NavLink to="/" onClick={() => setIsMobile(false)}>Home</NavLink></li>
          <li><NavLink to="/products" onClick={() => setIsMobile(false)}>Products</NavLink></li>
          <li><NavLink to="/about" onClick={() => setIsMobile(false)}>About</NavLink></li>
          <li><NavLink to="/contact" onClick={() => setIsMobile(false)}>Contact</NavLink></li>
        </ul>
      </div>
      
      <button className="get-started-button">Get Started</button>
      
      {/* Mobile menu icon */}
      <div className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default NavBar;
