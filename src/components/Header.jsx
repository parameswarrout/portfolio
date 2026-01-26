import React from 'react';
import './Header.css';

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
        <p className="lead">Data & AI Engineer</p>
        <div className="mt-4">
          <p className="mb-2">
            📍 <span className="fw-bold">Hyderabad, India</span>
          </p>
          <p className="mb-2">
            📧 <a href="mailto:parameswar.work@gmail.com" className="text-white text-decoration-underline">parameswar.work@gmail.com</a>
          </p>
          <p>
            📱 <span className="fw-bold">+91 9178446662</span>
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;