import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          CertiSys
        </Link>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/" className="navbar-links">
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/about" className="navbar-links">
              About
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/contact" className="navbar-links">
              Contact
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/student-portal" className="navbar-links">
              Student Portal
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/login" className="navbar-links">
              Admin Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
