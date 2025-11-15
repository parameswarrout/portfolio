import React from 'react';

const Education = () => {
  return (
    <section id="education" className="section">
      <div className="container">
        <h2 className="section-title text-center text-dark">Education</h2>
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">IIT Patna</h5>
                <h6 className="card-subtitle mb-2 text-muted">M.Tech in Mechanical Engineering</h6>
                <p>July 2022 - July 2024 | CPI: 7.79</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">BPUT</h5>
                <h6 className="card-subtitle mb-2 text-muted">B.Tech in Mechanical Engineering</h6>
                <p>Jun 2013 - Jun 2017 | CPI: 7.67</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;