import React from 'react';
import './ProjectModal.css';

const ProjectModal = ({ modalId, isOpen, closeModal }) => {
  // Function to render modal content based on modalId
  const renderModalContent = () => {
    switch (modalId) {
      case 1:
        return (
          <>
            <div className="modal-header">
              <h5 className="modal-title"><strong>Enterprise RAG Orchestration Agent</strong></h5>
              <button type="button" className="btn-close" onClick={closeModal}></button>
            </div>
            <div className="modal-body">
              <p className="text-muted mb-3">GenAI Platform</p>
              <ul>
                <li className="mb-2"><strong>Hybrid Retrieval Architecture:</strong> Engineered a high-precision search system combining Semantic Search (FAISS) and Keyword Matching (BM25), utilizing Cross-Encoders for result reranking to maximize context relevance.</li>
                <li className="mb-2"><strong>Async Streaming & Multi-LLM Routing:</strong> Built a FastAPI backend with asynchronous streaming support, enabling dynamic routing between OpenAI, Gemini, and local LLMs (Ollama) based on query complexity.</li>
                <li className="mb-2"><strong>Full-Stack Observability:</strong> Deployed a production-ready React 19 frontend and instrumented the backend with Prometheus metrics and correlation IDs for request tracing.</li>
              </ul>
            </div>
          </>
        );
      case 2:
        return (
          <>
            <div className="modal-header">
              <h5 className="modal-title"><strong>Serverless Media Data Aggregation Pipeline</strong></h5>
              <button type="button" className="btn-close" onClick={closeModal}></button>
            </div>
            <div className="modal-body">
              <ul>
                <li className="mb-2"><strong>Automated Extraction Engine:</strong> Developed a Python-based scraper to bypass high-latency UI elements (ads, CAPTCHAs, wait-timers) and successfully extract direct media access links and metadata.</li>
                <li className="mb-2"><strong>Zero-Cost Infrastructure:</strong> Architected a serverless workflow using GitHub Actions (Cron) to execute daily data extraction jobs, eliminating the need for paid cloud compute (EC2).</li>
                <li className="mb-2"><strong>API-Driven Storage:</strong> Integrated Google Sheets API as a lightweight database, automating the structured storage of movie titles, unique IDs, and download URLs for real-time access.</li>
              </ul>
            </div>
          </>
        );
      case 3:
        return (
          <>
            <div className="modal-header">
              <h5 className="modal-title"><strong>Physics-Informed Neural Networks (PINNs)</strong></h5>
              <button type="button" className="btn-close" onClick={closeModal}></button>
            </div>
            <div className="modal-body">
              <p className="text-muted mb-3">M.Tech Thesis | Predictive Modeling</p>
              <ul>
                <li className="mb-2"><strong>Deep Learning for Material Properties:</strong> Developed a multivariate regression model to predict Ultimate Tensile Strength (UTS) of Friction Stir Welded joints, utilizing inputs like RPM, traverse speed, tool geometry, and thermal profiles.</li>
                <li className="mb-2"><strong>Physics-Aware Architecture:</strong> Designed a novel framework combining data-driven deep learning with physical conservation laws (PINNs) to simulate process stability and defect formation with high accuracy.</li>
                <li className="mb-2"><strong>Real-Time Visualization:</strong> Built interactive dashboards to visualize complex time-series data and model predictions for real-time anomaly detection.</li>
              </ul>
            </div>
          </>
        );
      case 4:
        return (
          <>
            <div className="modal-header">
              <h5 className="modal-title"><strong>JustWatch | Movie Data Management</strong></h5>
              <button type="button" className="btn-close" onClick={closeModal}></button>
            </div>
            <div className="modal-body">
              <p><strong>Duration:</strong>April 2024 – May 2024</p>
              <ul>
                <li>Scraped movie data from the Justwatch platform using BeautifulSoup, extracting detailed information on movie availability, genres, and ratings for comprehensive dataset creation.</li>
                <li>Conducted in-depth data analysis with Pandas to identify trends in movie streaming patterns, popular genres, and audience preferences, providing actionable insights for content strategy.</li>
              </ul>
              <p><strong>Technologies:</strong> BeautifulSoup, Pandas, Python</p>
              <p><strong>GitHub:</strong> <a href="https://github.com/parameswarrout/Projects-company/blob/main/Web-Scraping-justwatch.ipynb" target="_blank" rel="noopener noreferrer">View Project</a></p>
            </div>
          </>
        );
      case 5:
        return (
          <>
            <div className="modal-header">
              <h5 className="modal-title"><strong>Food Vision Image Classification</strong></h5>
              <button type="button" className="btn-close" onClick={closeModal}></button>
            </div>
            <div className="modal-body">
              <p><strong>Duration:</strong>Jan 2024 – March 2024</p>
              <ul>
                <li>Developed deep learning models for image classification using EfficientNetB0 and Convolutional Neural Network (CNNs), achieving high accuracy through transfer learning.</li>
                <li>Implemented state-of-the-art techniques to enhance model performance, leveraging TensorFlow and Keras.</li>
                <li>Utilized tools like TensorFlow, Keras, Scipy, Pandas, Numpy, Scikit-learn, Matplotlib.</li>
              </ul>
              <p><strong>Technologies:</strong> TensorFlow, Keras, Numpy, Scikit-learn</p>
            </div>
          </>
        );
      case 6:
        return (
          <>
            <div className="modal-header">
              <h5 className="modal-title"><strong>Bank Customer Churn Prediction</strong></h5>
              <button type="button" className="btn-close" onClick={closeModal}></button>
            </div>
            <div className="modal-body">
              <ul>
                <li>Analyzed a bank customer dataset from Kaggle to identify factors influencing customer churn through exploratory data analysis (EDA) and visualizations.</li>
                <li>Preprocessed data by handling missing values, encoding categorical features, and scaling numerical data.</li>
                <li>Built and evaluated multiple machine learning models (Logistic Regression, Decision Tree, Random Forest, Gradient Boosting, XGBoost, SVM) to classify customers as likely to churn or not.</li>
                <li>Applied hyperparameter tuning (GridSearchCV) to optimize Random Forest performance.</li>
                <li>Developed a deep learning model using TensorFlow and Keras with dropout regularization and early stopping to improve accuracy and prevent overfitting.</li>
                <li>Evaluated models using metrics like Accuracy, F1 Score, Confusion Matrix, and ROC-AUC.</li>
                <li>Key insights: older customers and inactive members were more likely to churn; ensemble methods performed best at capturing complex patterns.</li>
              </ul>
              <p><strong>Technologies:</strong> Scikit-learn, XGBoost, Keras, Matplotlib</p>
              <p><strong>GitHub:</strong> <a href="https://github.com/parameswarrout/Bank-Customer-Churn-Analysis/blob/main/README.md" target="_blank" rel="noopener noreferrer">View Project</a></p>
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
      onClick={closeModal} // Close modal when clicking outside
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