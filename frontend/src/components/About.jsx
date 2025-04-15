import React from 'react';
import { FaHandshake, FaStar, FaLaptopCode, FaShieldAlt } from 'react-icons/fa';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <header className="hero-section">
        <h1>About Us</h1>
        <p>Discover more about our journey, values, and what sets us apart.</p>
      </header>

      <section className="intro-section">
        <h2>Our Story</h2>
        <p>
          Founded in 2025, CertiSys was established with a vision to revolutionize certificate verification.
          Our team is dedicated to ensuring the authenticity and integrity of certificates through 
          state-of-the-art technology and unmatched expertise.
        </p>
        <p>
          Our mission is to build trust and reliability in the certification process, making it seamless 
          for users and organizations to verify certificates with confidence.
        </p>
        <p>
          With a strong foundation in advanced technology and a commitment to customer satisfaction, 
          we have quickly become a leading name in the certificate verification industry.
        </p>
        <p>
          We pride ourselves on our user-centric approach, constantly innovating to meet the evolving 
          needs of our clients and staying ahead of industry trends.
        </p>
      </section>

      <section className="why-choose-us">
        <h2>Why Choose Us?</h2>
        <div className="why-cards">
          <div className="card">
            <FaHandshake className="icon" />
            <h3>Trusted Partner</h3>
            <p>We are a trusted partner for many organizations, delivering reliable and secure certificate verification services.</p>
          </div>
          <div className="card">
            <FaStar className="icon" />
            <h3>Exceptional Quality</h3>
            <p>Our verification process is rigorous and thorough, ensuring the highest quality and accuracy in certificate validation.</p>
          </div>
          <div className="card">
            <FaLaptopCode className="icon" />
            <h3>Innovative Technology</h3>
            <p>We utilize the latest technology to provide efficient and effective certificate verification solutions.</p>
          </div>
          <div className="card">
            <FaShieldAlt className="icon" />
            <h3>Top-Notch Security</h3>
            <p>Your data and certificates are safeguarded with robust security measures, ensuring complete protection and confidentiality.</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <h3>CertiSys</h3>
        <p>Your trusted partner in excellence. Providing quality and reliable services with a commitment to customer satisfaction.</p>
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Contact Us</a>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 CertiSys. All rights reserved. | Designed by <a href="#">Bonga University Student</a></p>
        </div>
      </footer>
    </div>
  );
};

export default About;
