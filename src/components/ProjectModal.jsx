import React from 'react';

const ProjectModal = ({ modalId, isOpen, closeModal }) => {
  // Function to render modal content based on modalId
  const renderModalContent = () => {
    switch (modalId) {
      case 1:
        return (
          <>
            <div className="modal-header">
              <h5 className="modal-title"><strong>Prediction of Tensile Strength of Friction Stir Weld </strong></h5>
              <button type="button" className="btn-close" onClick={closeModal}></button>
            </div>
            <div className="modal-body">
              <p><strong>Duration:</strong>July 2023 – Jan 2024</p>
              <p><strong>Description:</strong> Developed a predictive ML/DL model for weld strength.</p>
              <ul>
                <li>Developed a predictive model using Python, Pandas, Numpy, Scikit-learn, and TensorFlow, achieving high accuracy in predicting weld joint tensile strength.</li>
                <li>Conducted data preprocessing, exploratory data analysis, and feature engineering to enhance model performance.</li>
                <li>Evaluated and optimized models with metrics like R², MAE, and MSE, providing actionable insights for quality control and process optimization.</li>
              </ul>
              <p><strong>Technologies:</strong> TensorFlow, Scikit-learn, Numpy, Pandas</p>
            </div>
          </>
        );
      case 2:
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
      case 3:
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
      case 4:
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