import { NavLink, Link } from "react-router-dom";
import './navbar.css'

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner">

        <nav className="nav-links">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/career">Career</NavLink>
        </nav>

        <Link to="/login" className="login-button">Login</Link>
      </div>
    </header>
  );
}

export default Navbar;