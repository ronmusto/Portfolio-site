import React from 'react';
import Navbar from './components/Navbar.js';
import Home from './components/Home.js';
import Footer from './components/Footer.js';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About.js';
import Contact from './components/Contact.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<div>Page Not Found</div>} /> {/* Fallback route */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
