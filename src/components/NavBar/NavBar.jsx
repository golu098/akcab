import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import "./NavBar.css";
import Home from "../../Pages/Home/Home";
import Contact from "../../Pages/Contact/Contact";
import Destination from "../../Pages/Destination/Destination";
import About from "../../Pages/About/About";

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State for toggle

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  return (
    <>
     <Router>
      <div>
        {/* Navbar */}
        <nav className="navbar">
          <Link to="/" className="logo">Test</Link>
          <button className="toggle-btn" onClick={toggleMenu}>
            ☰
          </button>
          <div className={`nav-links ${isMenuOpen ? 'show' : ''}`}>
            <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link to="/destination" onClick={() => setIsMenuOpen(false)}>Destination</Link>
            <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          </div>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
    </>
  )
}
