import React, { useState } from 'react';
import './Home.css'; // Navbar styles ko isi CSS me rakho

function Navbar({ toggleLoginModal }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <span className="logo-text">Connect2Learn Hub</span>
        </div>

        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <a href="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>Home</a>
          <a href="/about" className="nav-link" onClick={() => setIsMenuOpen(false)}>About</a>
          <a href="#services" className="nav-link" onClick={() => setIsMenuOpen(false)}>Our Services</a>
          <a href="#team" className="nav-link" onClick={() => setIsMenuOpen(false)}>Our Team</a>
          <a href="#blog" className="nav-link" onClick={() => setIsMenuOpen(false)}>Blog</a>
          <button className="contact-btn">Contact Us</button>
          <div className="user-icon" onClick={toggleLoginModal}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M20 21V19C20 17.9391 19.5786 16.9217 
                18.8284 16.1716C18.0783 15.4214 17.0609 15 
                16 15H8C6.93913 15 5.92172 15.4214 
                5.17157 16.1716C4.42143 16.9217 
                4 17.9391 4 19V21" 
                stroke="currentColor" strokeWidth="2" 
                strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="12" cy="7" r="4" 
                stroke="currentColor" strokeWidth="2" 
                strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        <div className="nav-icons">
          <div 
            className={`hamburger ${isMenuOpen ? 'active' : ''}`} 
            onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
