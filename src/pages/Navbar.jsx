import React, { useState, useEffect } from 'react';
import "../style/Navbar.css"; // Import Navbar styling sheet

const Navbar = ({ scrolled, menuOpen, toggleMenu }) => {
  // Handle link clicks to close menu
  useEffect(() => {
    const handleLinkClick = () => {
      if (menuOpen) {
        toggleMenu();
      }
    };

    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
      link.addEventListener('click', handleLinkClick);
    });

    // Cleanup
    return () => {
      navLinks.forEach(link => {
        link.removeEventListener('click', handleLinkClick);
      });
    };
  }, [menuOpen, toggleMenu]);

  return (
    <header className={`netflix-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <h1 className="netflix-logo">NISHFLIX</h1>
        <button
          className="mobile-nav-toggle"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <i className="fas fa-bars"></i>
        </button>
        <nav className={menuOpen ? 'mobile-active' : ''}>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#achievements">Achievements</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;