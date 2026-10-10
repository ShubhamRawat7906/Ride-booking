import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        {/* If you want text or an image logo, put it here */}
        <span>RideLogo</span> 
      </div>
      
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/career">Career</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/login">Login</Link>
      </div>

      <h1 className="nav-slogan">Make your journey safe and easy by choosing us</h1>
    </nav>
  );
}

export default Navbar;