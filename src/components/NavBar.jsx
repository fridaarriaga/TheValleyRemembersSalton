// NavBar.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";  // Import the CSS file

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="logo">Salton Sea</div>

        <div className="nav-links">
          <Link to="/" className="nav-link home-link">Home</Link>
          <Link to = "/data" className="nav-link data-link">Data & Research</Link>
          <Link to="/voices" className="nav-link voices-link">Voices</Link>
          <Link to="/learn" className="nav-link learn-link">About Frida</Link>
          
        </div>
      </div>
    </nav>
  );
}
