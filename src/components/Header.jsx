import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [copiedText, setCopiedText] = useState('');

  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(''), 2000);
  };

  return (
    <header id="about" className="header-section">
      <div className="header-overlay"></div>
      <div className="container content">
        <div className="row align-items-center g-5">
          
          {/* Left Column: Glassmorphic Profile Card */}
          <div className="col-lg-5">
            <div className="card profile-card border-0 text-center p-4 shadow-lg animate-on-scroll visible">
              <div className="profile-container mb-3">
                <img
                  src="/images/myimage.jpg"
                  alt="Parameswar Rout"
                  className="profile-img img-fluid rounded-circle"
                />
                <div className="profile-glow"></div>
              </div>
              
              <h1 className="h2 fw-bold text-white mb-1">Parameswar Rout</h1>
              <p className="lead-title mb-4">Data & AI Engineer</p>
              
              <div className="d-flex flex-column gap-2 mb-4 text-start align-items-center w-100">
                <span className="badge-item w-100 justify-content-center">
                  <span className="badge-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  </span>
                  <span className="badge-label text-truncate">Hyderabad, India</span>
                </span>
                <span 
                  className="badge-item clickable w-100 justify-content-center" 
                  onClick={() => copyToClipboard('parameswar.work@gmail.com', 'Email')}
                  title="Click to copy email"
                >
                  <span className="badge-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  </span>
                  <span className="badge-label text-truncate">parameswar.work@gmail.com</span>
                  {copiedText === 'Email' && <span className="copy-tooltip">Copied!</span>}
                </span>
                <span 
                  className="badge-item clickable w-100 justify-content-center"
                  onClick={() => copyToClipboard('+919178446662', 'Phone')}
                  title="Click to copy phone"
                >
                  <span className="badge-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  </span>
                  <span className="badge-label text-truncate">+91 9178446662</span>
                  {copiedText === 'Phone' && <span className="copy-tooltip">Copied!</span>}
                </span>
              </div>

              <div className="d-flex flex-column gap-2 w-100">
                <a 
                  href="/resume/Resume for all ai_data-enginerring jan 2026.docx" 
                  download="Resume_Parameswar_Rout.docx"
                  className="btn btn-primary w-100 py-2.5"
                >
                  Download Resume
                </a>
                <a href="#projects" className="btn btn-dark w-100 py-2.5">
                  Explore Projects
                </a>
              </div>
            </div>
          </div>
          
          {/* Right Column: Integrated About Me details */}
          <div className="col-lg-7">
            <div className="about-text-container text-start animate-on-scroll visible">
              <h2 className="section-title text-start mb-4 ms-0 left-0 transform-none" style={{ left: 0, transform: 'none' }}>
                About Me
              </h2>
              <p className="lead mb-4 fw-medium text-white-50" style={{ fontSize: '1.15rem', lineHeight: '1.7' }}>
                I am a Software Engineer at Rasonix and former Data & AI Engineer with 2+ years of professional experience building high-performance AI-driven systems, scalable ETL pipelines, and robust backend APIs.
              </p>
              <p className="text-secondary mb-5" style={{ fontSize: '0.95rem', lineHeight: '1.8' }}>
                Specialized in architecting semantic search and Retrieval-Augmented Generation (RAG) pipelines, building high-volume web scraping structures that process millions of rows, and writing production-ready API services. I focus on bridging the gap between raw data engineering and intelligent model inference.
              </p>
              
              <div className="row g-3">
                <div className="col-md-4">
                  <div className="card h-100 border-0 bg-opacity-20">
                    <div className="card-body p-3 text-center d-flex flex-column align-items-center">
                      <div className="project-icon mb-2 fs-4">🤖</div>
                      <h6 className="fw-bold mb-1 text-white">AI & ML</h6>
                      <p className="text-secondary mb-0 small" style={{ fontSize: '0.75rem' }}>
                        RAG pipelines, vector search, LangChain & local LLM.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card h-100 border-0 bg-opacity-20">
                    <div className="card-body p-3 text-center d-flex flex-column align-items-center">
                      <div className="project-icon mb-2 fs-4">⚙️</div>
                      <h6 className="fw-bold mb-1 text-white">Pipelines</h6>
                      <p className="text-secondary mb-0 small" style={{ fontSize: '0.75rem' }}>
                        Distributed scrapers, ETL systems & proxy rotation.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card h-100 border-0 bg-opacity-20">
                    <div className="card-body p-3 text-center d-flex flex-column align-items-center">
                      <div className="project-icon mb-2 fs-4">⚡</div>
                      <h6 className="fw-bold mb-1 text-white">Backend</h6>
                      <p className="text-secondary mb-0 small" style={{ fontSize: '0.75rem' }}>
                        Highly concurrent FastAPI, Express & payments API.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </header>
  );
};

export default Header;