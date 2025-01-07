import React from "react";
import "./NavBar.css"; 
import solarlogo from "../assets/bgremovesolar.png"
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img
          src={solarlogo} 
          alt="Logo"
          className="logo-icon"
        />
        <span className="logo-text">Micron Solar</span>
      </div>
      <div className="navlinks-container">
      <ul className="navbar-links">
      <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/products">Products</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
      </div>
      <button className="get-started-button">Get Started</button>
    </nav>
  );
};

export default NavBar;
