import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import './styles/variables.css';
import './styles/global.css';
import './styles/shared.css';

function App() {
  const [activeModal, setActiveModal] = useState(null);

  useEffect(() => {
    // Permanently enable dark mode
    document.body.classList.add('dark-mode');
    
    // Scroll animation effect
    const handleScroll = () => {
      const elements = document.querySelectorAll('.section');
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run once on load

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openModal = (modalId) => {
    setActiveModal(modalId);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <div className="dark-mode">
      <Navbar />
      <Header />
      <Skills className="animate-on-scroll" />
      <Experience className="animate-on-scroll" />
      <Projects openModal={openModal} className="animate-on-scroll" />
      <Education className="animate-on-scroll" />
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
