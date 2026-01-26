import React from 'react';

const Experience = ({ className = '' }) => {
  return (
    <section id="experience" className={`section ${className}`}>
      <div className="container">
        <h2 className="section-title text-center">Experience</h2>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            
            {/* Crawlsight AI */}
            <div className="card shadow-sm border-0 mb-4">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-start flex-wrap">
                  <div>
                    <h4 className="card-title fw-bold">Data & AI Engineer</h4>
                    <h5 className="text-muted">Crawlsight AI (Remote)</h5>
                  </div>
                  <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2 fw-bold">Aug 2024 – Present</span>
                </div>
                <div className="mt-4">
                  <ul className="list-unstyled">
                    <li className="mb-3">
                      <div className="d-flex">
                        <div className="me-3 text-primary fs-4">✓</div>
                        <div>
                          <p className="mb-1 fw-semibold"><strong>Production RAG Architecture:</strong> Architected semantic search pipelines using LangChain and FAISS, reducing query latency to &lt;120ms for AI-driven search contexts.</p>
                        </div>
                      </div>
                    </li>
                    <li className="mb-3">
                      <div className="d-flex">
                        <div className="me-3 text-primary fs-4">✓</div>
                        <div>
                          <p className="mb-1 fw-semibold"><strong>High-Volume Ingestion:</strong> Built and orchestrated distributed scrapers (Scrapy) processing 1M+ records/month, maintaining 99.9% data availability via automated health checks.</p>
                        </div>
                      </div>
                    </li>
                    <li className="mb-3">
                      <div className="d-flex">
                        <div className="me-3 text-primary fs-4">✓</div>
                        <div>
                          <p className="mb-1 fw-semibold"><strong>Scalable ETL Systems:</strong> Engineered fault-tolerant data pipelines with FastAPI microservices, handling automated retry logic, proxy rotation, and data validation.</p>
                        </div>
                      </div>
                    </li>
                    <li className="mb-3">
                      <div className="d-flex">
                        <div className="me-3 text-primary fs-4">✓</div>
                        <div>
                          <p className="mb-1 fw-semibold"><strong>Data Marketplace:</strong> Developed the core data delivery platform, integrating Stripe/Razorpay for monetization and OAuth2 for secure API consumption.</p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* AlmaBetter */}
            <div className="card shadow-sm border-0">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-start flex-wrap">
                  <div>
                    <h4 className="card-title fw-bold">Data Science Trainee</h4>
                    <h5 className="text-muted">AlmaBetter (Remote)</h5>
                  </div>
                  <span className="badge bg-secondary bg-opacity-10 text-secondary px-3 py-2 fw-bold">Jan 2024 – Aug 2024</span>
                </div>
                <div className="mt-4">
                  <ul className="list-unstyled">
                    <li className="mb-3">
                      <div className="d-flex">
                        <div className="me-3 text-secondary fs-4">✓</div>
                        <div>
                          <p className="mb-1 fw-semibold">Built data ingestion workflows and automated EDA pipelines for ML datasets.</p>
                        </div>
                      </div>
                    </li>
                    <li className="mb-3">
                      <div className="d-flex">
                        <div className="me-3 text-secondary fs-4">✓</div>
                        <div>
                          <p className="mb-1 fw-semibold">Developed ML models (XGBoost, SVM) with cross-validation and ROC-AUC evaluation.</p>
                        </div>
                      </div>
                    </li>
                    <li className="mb-3">
                      <div className="d-flex">
                        <div className="me-3 text-secondary fs-4">✓</div>
                        <div>
                          <p className="mb-1 fw-semibold">Designed analytics dashboards using Power BI and Seaborn.</p>
                        </div>
                      </div>
                    </li>
                    <li className="mb-3">
                      <div className="d-flex">
                        <div className="me-3 text-secondary fs-4">✓</div>
                        <div>
                          <p className="mb-1 fw-semibold">Performed feature engineering and feature selection to improve model performance and stability.</p>
                        </div>
                      </div>
                    </li>
                    <li className="mb-3">
                      <div className="d-flex">
                        <div className="me-3 text-secondary fs-4">✓</div>
                        <div>
                          <p className="mb-1 fw-semibold">Handled missing values, outliers, and data imbalance using statistical and ML-based techniques.</p>
                        </div>
                      </div>
                    </li>
                  </ul>
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