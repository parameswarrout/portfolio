import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title text-center">Contact</h2>
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <p className="lead mb-4">
              Parameswar Rout +91 9178446662 | parameswar.work@gmail.com
            </p>
            <div className="d-flex flex-wrap justify-content-center gap-4">
              <a href="https://www.linkedin.com/in/parameswar73/" target="_blank" rel="noopener noreferrer" className="btn btn-primary px-4 py-2">
                LinkedIn
              </a>
              <a href="https://github.com/parameswarrout" target="_blank" rel="noopener noreferrer" className="btn btn-dark px-4 py-2">
                Github
              </a>
              <a href="https://parameswarrout.github.io/" target="_blank" rel="noopener noreferrer" className="btn btn-info text-white px-4 py-2">
                Website
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;