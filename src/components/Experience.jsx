import React from 'react';

const Experience = ({ className = '' }) => {
  return (
    <section id="experience" className={`section ${className}`}>
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="timeline">
              
              {/* Rasonix */}
              <div className="timeline-item active">
                <div className="card border-0">
                  <div className="card-body p-4">
                    <div className="d-flex justify-content-between align-items-start flex-wrap gap-2">
                      <div className="d-flex align-items-center gap-3">
                        <img
                          src="/images/rasonix.jpg"
                          alt="Rasonix Logo"
                          className="company-logo rounded-2"
                          style={{ 
                            width: '45px', 
                            height: '45px',
                            objectFit: 'cover', 
                            border: '1px solid var(--glass-border)' 
                          }}
                        />
                        <div>
                          <h4 className="fw-bold mb-1 text-white" style={{ fontSize: '1.25rem' }}>Software Engineer</h4>
                          <h5 className="text-secondary mb-0 fw-medium" style={{ fontSize: '1rem' }}>Rasonix · Full-time</h5>
                        </div>
                      </div>
                      <div className="text-end">
                        <span className="badge bg-secondary bg-opacity-10 text-secondary px-3 py-2 fw-semibold d-block mb-1">
                          Apr 2026 – Present
                        </span>
                        <span className="text-secondary small d-block">Bengaluru, India · On-site</span>
                      </div>
                    </div>
                    <div className="mt-4">
                      <ul className="list-unstyled mb-0">
                        <li className="d-flex align-items-start gap-3">
                          <span className="text-secondary fs-5 leading-none" style={{ color: 'var(--secondary-color) !important' }}>✓</span>
                          <span className="text-secondary">
                            <strong>Full Stack Development & AI/ML:</strong> Developing modern, high-performance web applications and deploying intelligent systems. Designing model inference endpoints and connecting machine learning services with responsive, real-time user interfaces.
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Crawlsight AI */}
              <div className="timeline-item">
                <div className="card border-0">
                  <div className="card-body p-4">
                    <div className="d-flex justify-content-between align-items-start flex-wrap gap-2">
                      <div className="d-flex align-items-center gap-3">
                        <img
                          src="/images/crawlsight.svg"
                          alt="Crawlsight AI Logo"
                          className="company-logo rounded-2"
                          style={{ 
                            width: '45px', 
                            height: '45px', 
                            objectFit: 'contain',
                            border: '1px solid var(--glass-border)',
                            padding: '4px',
                            background: 'rgba(255, 255, 255, 0.05)'
                          }}
                        />
                        <div>
                          <h4 className="fw-bold mb-1 text-white" style={{ fontSize: '1.25rem' }}>AI & Data Engineer</h4>
                          <h5 className="text-secondary mb-0 fw-medium" style={{ fontSize: '1rem' }}>Crawlsight AI · Full-time</h5>
                        </div>
                      </div>
                      <div className="text-end">
                        <span className="badge bg-secondary bg-opacity-10 text-secondary px-3 py-2 fw-semibold d-block mb-1">
                          Aug 2024 – Apr 2026
                        </span>
                        <span className="text-secondary small d-block">Remote</span>
                      </div>
                    </div>
                    <div className="mt-4">
                      <ul className="list-unstyled mb-0">
                        <li className="mb-3 d-flex align-items-start gap-3">
                          <span className="text-primary fs-5 leading-none">✓</span>
                          <span className="text-secondary">
                            <strong>Production RAG Architecture:</strong> Engineered semantic search pipelines using LangChain and FAISS, reducing query latency to &lt;120ms.
                          </span>
                        </li>
                        <li className="mb-3 d-flex align-items-start gap-3">
                          <span className="text-primary fs-5 leading-none">✓</span>
                          <span className="text-secondary">
                            <strong>High-Volume Ingestion:</strong> Built and orchestrated distributed scrapers (Scrapy) processing 1M+ records/month, maintaining 99.9% data availability.
                          </span>
                        </li>
                        <li className="mb-3 d-flex align-items-start gap-3">
                          <span className="text-primary fs-5 leading-none">✓</span>
                          <span className="text-secondary">
                            <strong>Scalable ETL Systems:</strong> Engineered fault-tolerant data pipelines with FastAPI microservices, handling automated retry logic and proxy rotation.
                          </span>
                        </li>
                        <li className="d-flex align-items-start gap-3">
                          <span className="text-primary fs-5 leading-none">✓</span>
                          <span className="text-secondary">
                            <strong>Data Marketplace:</strong> Developed the core data delivery platform, integrating Stripe/Razorpay for monetization and OAuth2 security.
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* AlmaBetter */}
              <div className="timeline-item">
                <div className="card border-0">
                  <div className="card-body p-4">
                    <div className="d-flex justify-content-between align-items-start flex-wrap gap-2">
                      <div className="d-flex align-items-center gap-3">
                        <img
                          src="/images/almabetter.png"
                          alt="AlmaBetter Logo"
                          className="company-logo rounded-2"
                          style={{ 
                            width: '45px', 
                            height: '45px', 
                            objectFit: 'contain',
                            border: '1px solid var(--glass-border)',
                            padding: '4px',
                            background: 'rgba(255, 255, 255, 0.05)'
                          }}
                        />
                        <div>
                          <h4 className="fw-bold mb-1 text-white" style={{ fontSize: '1.25rem' }}>Data Science Trainee</h4>
                          <h5 className="text-secondary mb-0 fw-medium" style={{ fontSize: '1rem' }}>AlmaBetter (Remote)</h5>
                        </div>
                      </div>
                      <div className="text-end">
                        <span className="badge bg-secondary bg-opacity-10 text-secondary px-3 py-2 fw-semibold d-block mb-1">
                          Jan 2024 – Aug 2024
                        </span>
                        <span className="text-secondary small d-block">Remote</span>
                      </div>
                    </div>
                    <div className="mt-4">
                      <ul className="list-unstyled mb-0">
                        <li className="mb-3 d-flex align-items-start gap-3">
                          <span className="text-secondary fs-5 leading-none">✓</span>
                          <span className="text-secondary">
                            Built data ingestion workflows and automated EDA pipelines for ML datasets.
                          </span>
                        </li>
                        <li className="mb-3 d-flex align-items-start gap-3">
                          <span className="text-secondary fs-5 leading-none">✓</span>
                          <span className="text-secondary">
                            Developed machine learning models (XGBoost, Random Forest, SVM) with cross-validation and ROC-AUC evaluation.
                          </span>
                        </li>
                        <li className="d-flex align-items-start gap-3">
                          <span className="text-secondary fs-5 leading-none">✓</span>
                          <span className="text-secondary">
                            Handled missing values, outliers, and data imbalance using statistical and ML-based techniques.
                          </span>
                        </li>
                      </ul>
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

export default Experience;