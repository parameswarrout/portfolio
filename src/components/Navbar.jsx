import React, { useState, useEffect } from 'react';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={`navbar navbar-expand-lg navbar-dark ${scrolled ? 'bg-dark' : ''}`}>
      <div className="container">
        <a className="navbar-brand" href="#">Parameswar Rout</a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
          aria-controls="navbarNav"
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse justify-content-end ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#about" onClick={closeMenu}>About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills" onClick={closeMenu}>Skills</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#experience" onClick={closeMenu}>Experience</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#education" onClick={closeMenu}>Education</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects" onClick={closeMenu}>Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact" onClick={closeMenu}>Contact</a>
            </li>
            <li className="nav-item">
              <button
                id="darkModeToggle"
                className="btn btn-outline-light ms-2"
                onClick={toggleDarkMode}
              >
                {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;