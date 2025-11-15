import React from 'react';

const About = ({ className = '' }) => {
  return (
    <section id="about" className={`section ${className}`}>
      <div className="container">
        <h2 className="section-title text-center">About Me</h2>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="card shadow-sm p-4 border-0">
              <p className="lead text-center mb-4">
                Creative and Innovative Data Scientist with expertise in AI/ML, Data Engineering, Data Analysis & Gen AI.
              </p>
              <p className="text-center">
                Dynamic and detail-oriented professional with 2+ years of industry experience in AI/ML, Data Engineering, and Data Analysis.
                M.Tech graduate from IIT Patna with hands-on expertise in developing predictive models, building scalable data pipelines,
                and implementing Generative AI solutions to tackle complex challenges. Passionate about leveraging data for impactful insights,
                I continually explore cutting-edge technologies to drive intelligent, data-driven outcomes.
              </p>
              <div className="row mt-4">
                <div className="col-md-4 text-center">
                  <div className="p-3">
                    <div className="mb-3">
                      <span className="d-inline-block p-3 rounded-circle bg-primary bg-opacity-10 fs-3">🤖</span>
                    </div>
                    <h5 className="fw-bold">AI & ML</h5>
                    <p className="text-muted mb-0">Machine Learning & Deep Learning</p>
                  </div>
                </div>
                <div className="col-md-4 text-center">
                  <div className="p-3">
                    <div className="mb-3">
                      <span className="d-inline-block p-3 rounded-circle bg-success bg-opacity-10 fs-3">⚙️</span>
                    </div>
                    <h5 className="fw-bold">Data Engineering</h5>
                    <p className="text-muted mb-0">Scalable pipelines & infrastructure</p>
                  </div>
                </div>
                <div className="col-md-4 text-center">
                  <div className="p-3">
                    <div className="mb-3">
                      <span className="d-inline-block p-3 rounded-circle bg-warning bg-opacity-10 fs-3">📊</span>
                    </div>
                    <h5 className="fw-bold">Data Analysis</h5>
                    <p className="text-muted mb-0">Statistical modeling & insights</p>
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