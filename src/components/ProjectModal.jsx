import React from 'react';
import './ProjectModal.css';

const ProjectModal = ({ modalId, isOpen, closeModal }) => {
  const renderModalContent = () => {
    switch (modalId) {
      case 1:
        return (
          <>
            <div className="modal-header">
              <h5 className="modal-title">AI Business Intelligence Assistant</h5>
              <button type="button" className="btn-close" onClick={closeModal} aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p className="text-secondary mb-3 fw-bold">Full-Stack Enterprise Analytics Platform (Proof of Concept)</p>
              <ul>
                <li className="mb-2"><strong>SQL Translation & Validation:</strong> Translates natural language questions to structured SQL queries executed against an SQLite database, featuring query correction loops.</li>
                <li className="mb-2"><strong>Multi-Agent Team Workspace:</strong> Orchestrates 8 specialized agents (SQL Engineer, Risk Auditor, Performance DBA, Quality Control, Design Agent, Business Strategist, Trend Forecaster, Action Planner) collaborating sequentially.</li>
                <li className="mb-2"><strong>Advanced Integrations:</strong> Supports local Ollama server control (via auto-booting headless subprocess monitoring) and Amazon Bedrock models.</li>
                <li className="mb-2"><strong>Modern Dashboard Features:</strong> Dynamic glassmorphic liquid date/region filters, edit & re-run raw SQL console, visual chart mappings (Recharts), and CSV dataset exports.</li>
              </ul>
              <p className="mt-4 mb-3"><strong>Technologies:</strong> Next.js 15, React 19, FastAPI, SQLite, SQLAlchemy ORM, Amazon Bedrock, Ollama, TailwindCSS</p>
              <div className="mt-4">
                <a
                  href="https://github.com/parameswarrout/ai-bi-assistant"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-dark d-inline-flex align-items-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                  <span>View GitHub Repository</span>
                </a>
              </div>
            </div>
          </>
        );
      case 2:
        return (
          <>
            <div className="modal-header">
              <h5 className="modal-title">Bangalore House Price ML Project</h5>
              <button type="button" className="btn-close" onClick={closeModal} aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p className="text-secondary mb-3 fw-bold">End-to-End Real Estate Price Prediction Dashboard</p>
              <ul>
                <li className="mb-2"><strong>Model Optimization Loop:</strong> Implemented a CLI tool (`ML/train.py`) supporting XGBoost, LightGBM, and CatBoost training with Optuna optimization loops.</li>
                <li className="mb-2"><strong>Deep Learning Architectures:</strong> Trained PyTorch architectures (Embedding MLP and TabNet) to model complex multi-feature inputs.</li>
                <li className="mb-2"><strong>Model Interpretability:</strong> Integrated SHAP framework to generate feature importance explanations, exporting outputs directly to the UI dashboard.</li>
                <li className="mb-2"><strong>Analysis Research:</strong> Conducted extensive Exploratory Data Analysis (EDA) and feature engineering compiled inside research notebooks.</li>
              </ul>
              <p className="mt-4 mb-3"><strong>Technologies:</strong> Python, FastAPI, React + Vite, PyTorch, Optuna, SHAP, Scikit-learn, Docker</p>
              <div className="mt-4">
                <a
                  href="https://github.com/parameswarrout/Bangalore-House-Price-Predictor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-dark d-inline-flex align-items-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                  <span>View GitHub Repository</span>
                </a>
              </div>
            </div>
          </>
        );
      case 3:
        return (
          <>
            <div className="modal-header">
              <h5 className="modal-title">Enterprise RAG Orchestration Agent</h5>
              <button type="button" className="btn-close" onClick={closeModal} aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p className="text-secondary mb-3 fw-bold">High-Precision Intelligent Search & QA Platform</p>
              <ul>
                <li className="mb-2"><strong>Hybrid Retrieval Architecture:</strong> Combined semantic vector search (FAISS) with traditional keyword match (BM25), leveraging Cross-Encoders for high-accuracy reranking.</li>
                <li className="mb-2"><strong>Multi-LLM Asynchronous Streaming:</strong> Formulated a FastAPI backend handling asynchronous response streaming, dynamically routing requests between cloud providers and local APIs.</li>
                <li className="mb-2"><strong>Production Monitoring:</strong> Integrated Prometheus metrics and tracing correlation IDs for full-stack API request tracking and observability.</li>
              </ul>
              <p className="mt-4 mb-3"><strong>Technologies:</strong> FastAPI, React 19, LangChain, FAISS, Prometheus, Docker</p>
              <div className="mt-4">
                <a
                  href="https://github.com/parameswarrout/Rag-Chatbot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-dark d-inline-flex align-items-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                  <span>View GitHub Repository</span>
                </a>
              </div>
            </div>
          </>
        );
      case 4:
        return (
          <>
            <div className="modal-header">
              <h5 className="modal-title">Serverless Media Data Pipeline</h5>
              <button type="button" className="btn-close" onClick={closeModal} aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p className="text-secondary mb-3 fw-bold">Automated Daily Extraction and Sync Engine</p>
              <ul>
                <li className="mb-2"><strong>High-Resilience Scraping:</strong> Developed Python scraping scripts designed to bypass high-latency user interfaces, ads, and CAPTCHAs to collect metadata links directly.</li>
                <li className="mb-2"><strong>Zero-Cost Compute:</strong> Deployed a cron-triggered pipeline running daily jobs serverlessly on GitHub Actions, removing the need for dedicated EC2 instances.</li>
                <li className="mb-2"><strong>Google Sheets API Sync:</strong> Automated daily data synchronization directly to a Google Sheets sheet, serving as a real-time serverless database.</li>
              </ul>
              <p className="mt-4 mb-3"><strong>Technologies:</strong> Python, Scrapy, GitHub Actions, Google Sheets API</p>
              <div className="mt-4">
                <a
                  href="https://github.com/parameswarrout/daily-scraper"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-dark d-inline-flex align-items-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                  <span>View GitHub Repository</span>
                </a>
              </div>
            </div>
          </>
        );
      case 5:
        return (
          <>
            <div className="modal-header">
              <h5 className="modal-title">Physics-Informed Neural Networks (PINNs)</h5>
              <button type="button" className="btn-close" onClick={closeModal} aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p className="text-secondary mb-3 fw-bold">M.Tech Thesis | Material Strength Deep Learning Simulation</p>
              <ul>
                <li className="mb-2"><strong>Multivariate Regression Modelling:</strong> Built regression networks to predict Friction Stir Welded joint tensile strength from weld velocity, tools, and thermal logs.</li>
                <li className="mb-2"><strong>Physics-Aware Training Constraints:</strong> Designed a custom network that penalizes predictions violating physical conservation laws, simulating defect thresholds.</li>
                <li className="mb-2"><strong>Interactive Modeling Dashboard:</strong> Developed visualization widgets to chart predicted joint properties against historical limits.</li>
              </ul>
              <p className="mt-4 mb-2"><strong>Technologies:</strong> Python, PyTorch, NumPy, Matplotlib, SciPy</p>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className={`modal fade ${isOpen ? 'show d-block' : 'd-none'}`}
      id="projectModal"
      tabIndex="-1"
      style={{ display: isOpen ? 'block' : 'none' }}
      aria-labelledby="projectModalLabel"
      aria-hidden={!isOpen}
      onClick={closeModal}
    >
      <div className="modal-dialog modal-lg modal-dialog-centered" onClick={(e) => e.stopPropagation()}>
        <div className="modal-content">
          {renderModalContent()}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;