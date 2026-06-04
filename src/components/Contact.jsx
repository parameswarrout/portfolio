import React from 'react';

const Contact = ({ className = '' }) => {
  return (
    <section id="contact" className={`section ${className}`}>
      <div className="container">
        <h2 className="section-title">Contact</h2>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card border-0 text-center shadow-lg">
              <div className="card-body p-5">
                <h3 className="fw-bold text-white mb-3" style={{ fontSize: '1.75rem' }}>
                  Let's Build Something Together
                </h3>
                <p className="text-secondary mb-4 mx-auto" style={{ maxWidth: '550px' }}>
                  I'm currently open to new opportunities, collaboration on open-source AI projects, or data consulting roles. Drop me a line or connect with me on social platforms.
                </p>
                
                <div className="d-flex flex-wrap justify-content-center gap-3 mt-4">
                  <a
                    href="https://www.linkedin.com/in/parameswar73/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary px-4 py-3 d-flex align-items-center gap-2"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href="https://github.com/parameswarrout"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-dark px-4 py-3 d-flex align-items-center gap-2"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    <span>GitHub</span>
                  </a>
                  <a
                    href="mailto:parameswar.work@gmail.com"
                    className="btn btn-outline-light px-4 py-3 d-flex align-items-center gap-2"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    <span>Email Me</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;