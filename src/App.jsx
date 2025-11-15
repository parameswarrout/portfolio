import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeModal, setActiveModal] = useState(null);

  useEffect(() => {
    // Check if dark mode was previously enabled
    const savedDarkMode = localStorage.getItem('darkMode') === 'enabled';
    if (savedDarkMode) {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    // Apply dark mode class to body
    if (darkMode) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('darkMode', 'enabled');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('darkMode', 'disabled');
    }

    // Scroll animation effect
    const handleScroll = () => {
      const elements = document.querySelectorAll('.section');
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('animate-on-scroll', 'visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run once on load

    return () => window.removeEventListener('scroll', handleScroll);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const openModal = (modalId) => {
    setActiveModal(modalId);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <div className={darkMode ? 'dark-mode' : ''}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Header />
      <About className="animate-on-scroll" />
      <Skills className="animate-on-scroll" />
      <Experience className="animate-on-scroll" />
      <Education className="animate-on-scroll" />
      <Projects openModal={openModal} className="animate-on-scroll" />
      <Certifications className="animate-on-scroll" />
      <Contact className="animate-on-scroll" />
      <Footer />
      <ProjectModal
        modalId={activeModal}
        isOpen={!!activeModal}
        closeModal={closeModal}
      />
    </div>
  );
}

export default App;
