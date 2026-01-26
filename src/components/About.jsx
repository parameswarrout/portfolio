import React from 'react';

const About = ({ className = '' }) => {
  return (
    <section id="about" className={`section ${className}`}>
      <div className="container">
        <h2 className="section-title text-center">About Me</h2>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="card shadow-sm border-0">
              <div className="card-body p-4">
                <p className="lead text-center mb-4">
                  Data & AI Engineer with 2+ years of experience building scalable data pipelines, large-scale web scraping systems, and AI-driven search applications.
                </p>
                <p className="text-center">
                  Strong hands-on skills in Python, SQL, FastAPI, and Scrapy. Experienced in semantic search, RAG pipelines, vector databases (FAISS), LangChain, NLP workflows, and production-grade API development. Proven ability to automate data ingestion, process millions of records, and deploy high-performance AI/ML solutions.
                </p>
                <div className="row mt-4">
                  <div className="col-md-4 text-center">
                    <div className="p-3">
                      <div className="mb-3">
                        <span className="d-inline-block p-3 rounded-4 bg-primary bg-opacity-10 fs-3">🤖</span>
                      </div>
                      <h5 className="fw-bold">AI & ML</h5>
                      <p className="text-secondary mb-0">RAG, LangChain, semantic search</p>
                    </div>
                  </div>
                  <div className="col-md-4 text-center">
                    <div className="p-3">
                      <div className="mb-3">
                        <span className="d-inline-block p-3 rounded-4 bg-success bg-opacity-10 fs-3">⚙️</span>
                      </div>
                      <h5 className="fw-bold">Data Engineering</h5>
                      <p className="text-secondary mb-0">Scrapy, ETL, High-Volume Ingestion</p>
                    </div>
                  </div>
                  <div className="col-md-4 text-center">
                    <div className="p-3">
                      <div className="mb-3">
                        <span className="d-inline-block p-3 rounded-4 bg-warning bg-opacity-10 fs-3">📊</span>
                      </div>
                      <h5 className="fw-bold">Backend & Cloud</h5>
                      <p className="text-secondary mb-0">FastAPI, AWS, Docker</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;