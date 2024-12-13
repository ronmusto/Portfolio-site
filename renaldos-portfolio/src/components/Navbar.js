import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="site-name">Renaldo Musto</h1>
      <ul className="nav-links">
        <li><NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink></li>
        <li><NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>About</NavLink></li>
        <li><NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>Contact</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;
