import React from 'react';

const Education = ({ className = '' }) => {
  return (
    <section id="education" className={`section ${className}`}>
      <div className="container">
        <h2 className="section-title text-center">Education</h2>
        <div className="row gy-4">
          <div className="col-lg-6">
            <div className="card h-100 shadow-sm border-0 education-card">
              <div className="card-body p-4">
                <div className="d-flex align-items-start">
                  <img
                    src="/images/iitp.svg"
                    alt="IIT Patna Logo"
                    className="education-logo me-4"
                    style={{ width: '70px', height: '70px', objectFit: 'contain' }}
                  />
                  <div>
                    <h4 className="card-title fw-bold">IIT Patna</h4>
                    <h6 className="text-muted mb-2">M.Tech in Mechanical Engineering</h6>
                    <p className="mb-1"><strong>Duration:</strong> July 2022 - July 2024</p>
                    <p className="mb-0"><strong>Score:</strong> CPI: 7.79</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card h-100 shadow-sm border-0 education-card">
              <div className="card-body p-4">
                <div className="d-flex align-items-start">
                  <img
                    src="/images/BPUT.png"
                    alt="BPUT Logo"
                    className="education-logo me-4"
                    style={{ width: '70px', height: '70px', objectFit: 'contain' }}
                  />
                  <div>
                    <h4 className="card-title fw-bold">BPUT</h4>
                    <h6 className="text-muted mb-2">B.Tech in Mechanical Engineering</h6>
                    <p className="mb-1"><strong>Duration:</strong> June 2013 - June 2017</p>
                    <p className="mb-0"><strong>Score:</strong> CPI: 7.67</p>
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

export default Education;