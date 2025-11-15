import React from 'react';

const Experience = ({ className = '' }) => {
  return (
    <section id="experience" className={`section ${className}`}>
      <div className="container">
        <h2 className="section-title text-center">Experience</h2>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="card shadow-sm border-0">
              <div className="card-body p-5">
                <div className="d-flex justify-content-between align-items-start">
                  <div>
                    <h4 className="card-title fw-bold">AI/Data Scientist</h4>
                    <h5 className="text-muted">Crawlsight AI Pvt Ltd, Remote</h5>
                  </div>
                  <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2 fw-bold">August 2024 – Present</span>
                </div>
                <div className="mt-4">
                  <ul className="list-unstyled">
                    <li className="mb-3">
                      <div className="d-flex">
                        <div className="me-3 text-primary fs-4">✓</div>
                        <div>
                          <p className="mb-1 fw-semibold">Developed and maintained Python-based web scrapers and data extraction pipelines for various websites and APIs.</p>
                        </div>
                      </div>
                    </li>
                    <li className="mb-3">
                      <div className="d-flex">
                        <div className="me-3 text-primary fs-4">✓</div>
                        <div>
                          <p className="mb-1 fw-semibold">Built robust, scalable data pipelines with automated validation and cleansing mechanisms for high-quality datasets.</p>
                        </div>
                      </div>
                    </li>
                    <li className="mb-3">
                      <div className="d-flex">
                        <div className="me-3 text-primary fs-4">✓</div>
                        <div>
                          <p className="mb-1 fw-semibold">Implemented semantic search & RAG (Retrieval-Augmented Generation) systems using LangChain, HuggingFace, and FAISS for intelligent information retrieval.</p>
                        </div>
                      </div>
                    </li>
                    <li className="mb-3">
                      <div className="d-flex">
                        <div className="me-3 text-primary fs-4">✓</div>
                        <div>
                          <p className="mb-1 fw-semibold">Designed and deployed real-time REST APIs using FastAPI for AI-powered search and data analysis services.</p>
                        </div>
                      </div>
                    </li>
                    <li className="mb-3">
                      <div className="d-flex">
                        <div className="me-3 text-primary fs-4">✓</div>
                        <div>
                          <p className="mb-1 fw-semibold">Developed machine learning models for data analysis and prediction tasks, with performance optimization and monitoring.</p>
                        </div>
                      </div>
                    </li>
                    <li className="mb-3">
                      <div className="d-flex">
                        <div className="me-3 text-primary fs-4">✓</div>
                        <div>
                          <p className="mb-1 fw-semibold">Created data visualization dashboards and reports to provide actionable insights to stakeholders.</p>
                        </div>
                      </div>
                    </li>
                    <li className="mb-3">
                      <div className="d-flex">
                        <div className="me-3 text-primary fs-4">✓</div>
                        <div>
                          <p className="mb-1 fw-semibold">Integrated Generative AI models to enhance data processing and automation capabilities.</p>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <div className="mt-4 pt-3 border-top">
                    <h6 className="fw-bold text-primary mb-3">Technologies Used</h6>
                    <p className="mb-0"><strong>Environment:</strong> Python, Scrapy, BeautifulSoup, FastAPI, LangChain, HuggingFace, FAISS, TensorFlow, Pandas, NumPy, AWS, Docker, etc.</p>
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

export default Experience;