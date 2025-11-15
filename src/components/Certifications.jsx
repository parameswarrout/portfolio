import React from 'react';

const Certifications = () => {
  const certificates = [
    {
      id: 1,
      title: "Machine Learning",
      issuer: "Aug 2023 - DeepLearning.AI",
      link: "https://www.coursera.org/account/accomplishments/specialization/certificate/J8EBV79B9YJT"
    },
    {
      id: 2,
      title: "Deep Learning",
      issuer: "Nov 2023 - DeepLearning.AI",
      link: "https://www.coursera.org/account/accomplishments/specialization/certificate/Q3UPRJRKA7TC"
    },
    {
      id: 3,
      title: "The Ultimate MySQL Bootcamp",
      issuer: "Dec 2023 - Udemy",
      link: "https://www.udemy.com/certificate/UC-9e466811-2564-4e18-a218-498dab2d9deb/"
    },
    {
      id: 4,
      title: "TensorFlow for Deep Learning Bootcamp",
      issuer: "Udemy",
      link: "https://www.udemy.com/certificate/UC-c0111176-0347-49ea-917f-9e31ff3e247b/"
    },
    {
      id: 5,
      title: "Full Stack Data Science and AI",
      issuer: "AlmaBetter",
      link: "https://verified.sertifier.com/en/verify/51975435184061/"
    },
    {
      id: 6,
      title: "Natural Language Processing",
      issuer: "Udemy",
      link: "https://www.udemy.com/certificate/UC-583daf29-eed8-40a4-bc3e-975d005121b3/"
    }
  ];

  return (
    <section id="certifications" className="section bg-light">
      <div className="container">
        <h2 className="section-title text-center text-dark">Certifications</h2>
        <div className="row">
          {certificates.map((cert) => (
            <div className="col-md-6 mb-4" key={cert.id}>
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">{cert.title}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">{cert.issuer}</h6>
                  <p><a href={cert.link} target="_blank" rel="noopener noreferrer">View Certificate</a></p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;