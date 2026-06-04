import React from 'react';

const Education = ({ className = '' }) => {
  const certifications = [
    {
      title: "Machine Learning Specalization",
      issuer: "DeepLearning.AI / Coursera",
      link: "https://www.coursera.org/account/accomplishments/specialization/certificate/J8EBV79B9YJT"
    },
    {
      title: "Deep Learning Specalization",
      issuer: "DeepLearning.AI / Coursera",
      link: "https://www.coursera.org/account/accomplishments/specialization/certificate/Q3UPRJRKA7TC"
    },
    {
      title: "Full Stack Data Science & AI",
      issuer: "AlmaBetter",
      link: "https://verified.sertifier.com/en/verify/51975435184061/"
    },
    {
      title: "The Ultimate MySQL Bootcamp",
      issuer: "Udemy",
      link: "https://www.udemy.com/certificate/UC-9e466811-2564-4e18-a218-498dab2d9deb/"
    },
    {
      title: "TensorFlow Deep Learning Bootcamp",
      issuer: "Udemy",
      link: "https://www.udemy.com/certificate/UC-c0111176-0347-49ea-917f-9e31ff3e247b/"
    },
    {
      title: "Natural Language Processing",
      issuer: "Udemy",
      link: "https://www.udemy.com/certificate/UC-583daf29-eed8-40a4-bc3e-975d005121b3/"
    }
  ];

  return (
    <section id="education" className={`section ${className}`}>
      <div className="container">
        <div className="row g-5">
          
          {/* Education Column */}
          <div className="col-lg-6">
            <h2 className="section-title text-start mb-4 ms-0 left-0 transform-none" style={{ left: 0, transform: 'none' }}>
              Education
            </h2>
            <div className="d-flex flex-column gap-4">
              
              {/* IIT Patna */}
              <div className="card border-0">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center gap-3">
                    <img
                      src="/images/iitp.svg"
                      alt="IIT Patna Logo"
                      style={{ width: '50px', height: '50px', objectFit: 'contain' }}
                    />
                    <div>
                      <h5 className="fw-bold mb-1 text-white" style={{ fontSize: '1.15rem' }}>
                        Indian Institute of Technology (IIT) Patna
                      </h5>
                      <h6 className="text-secondary fw-semibold mb-1" style={{ fontSize: '0.9rem' }}>
                        M.Tech in Mechanical Engineering
                      </h6>
                      <p className="mb-0 small text-secondary">
                        2022 - 2024 | CPI: 7.79
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* BPUT */}
              <div className="card border-0">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center gap-3">
                    <img
                      src="/images/BPUT.png"
                      alt="BPUT Logo"
                      style={{ width: '50px', height: '50px', objectFit: 'contain' }}
                    />
                    <div>
                      <h5 className="fw-bold mb-1 text-white" style={{ fontSize: '1.15rem' }}>
                        Biju Patnaik University of Technology (BPUT)
                      </h5>
                      <h6 className="text-secondary fw-semibold mb-1" style={{ fontSize: '0.9rem' }}>
                        B.Tech in Mechanical Engineering
                      </h6>
                      <p className="mb-0 small text-secondary">
                        2013 - 2017 | CPI: 7.67
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Certifications Column */}
          <div className="col-lg-6">
            <h2 className="section-title text-start mb-4 ms-0 left-0 transform-none" style={{ left: 0, transform: 'none' }}>
              Certifications
            </h2>
            <div className="card border-0 h-100">
              <div className="card-body p-4 d-flex flex-column justify-content-between">
                <div className="d-flex flex-column gap-3">
                  {certifications.map((cert, index) => (
                    <div key={index} className="d-flex justify-content-between align-items-center border-bottom border-light border-opacity-10 pb-2">
                      <div>
                        <h6 className="fw-bold mb-0 text-white" style={{ fontSize: '0.95rem' }}>
                          {cert.title}
                        </h6>
                        <span className="text-secondary small" style={{ fontSize: '0.8rem' }}>
                          {cert.issuer}
                        </span>
                      </div>
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-dark btn-sm py-1 px-3 fs-7"
                        style={{ fontSize: '0.8rem' }}
                      >
                        Verify
                      </a>
                    </div>
                  ))}
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