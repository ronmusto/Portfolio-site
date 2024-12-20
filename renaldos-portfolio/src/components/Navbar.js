import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode', !darkMode);
  };

  return (
    <nav className="navbar">
      <h1 className="site-name">Renaldo Musto</h1>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
      <label className="theme-toggle">
        <input type="checkbox" checked={darkMode} onChange={toggleTheme} />
        <span className="slider"></span>
      </label>
    </nav>
  );
}

export default Navbar;
