import React from 'react';

const Header = () => {
  return (
    <header className="header-section">
      <div className="content container">
        <img
          src="/images/myimage.jpg"
          alt="Parameswar Rout"
          className="profile-img img-fluid rounded-circle shadow-lg"
        />
        <h1 className="display-3">Parameswar Rout</h1>
        <p className="lead">Creative and Innovative  AI/ML Engineer | Data Scientist | | Data Engineer | Gen AI Specialist</p>
        <div className="mt-4">
          <p className="mb-2">
            📍 <span className="fw-bold">Hyderabad</span>
          </p>
          <p>
            📧 <a href="mailto:parameswar.work@gmail.com" className="text-white text-decoration-underline">parameswar.work@gmail.com</a>
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;