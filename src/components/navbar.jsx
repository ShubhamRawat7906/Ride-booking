import React from "react";
import { Link } from "react-router-dom";
import './navbar.css'
function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/career">Career</Link>
         <Link to="/login" className="login-button">Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;