import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <header className="hero-section">
        <h1>Contact Us</h1>
        <p>We're here to help. Get in touch with us for any queries or support.</p>
      </header>

      <section className="contact-intro">
        <h2>Why Contact Us?</h2>
        <p>At CertiSys, we value our customers and are committed to providing exceptional support. Whether you have a question about our services, need assistance with your account, or want to give feedback, we are here to listen and help.</p>
        <p>Our dedicated team is ready to assist you with any inquiries you may have, ensuring a smooth and satisfactory experience. Reach out to us, and let us know how we can serve you better.</p>
      </section>

      <section className="contact-details">
        <h2>Get in Touch</h2>
        <div className="contact-cards">
          <div className="card">
            <FaPhoneAlt className="icon" />
            <h3>Phone</h3>
            <p>+91 98765 43210</p>
          </div>
          <div className="card">
            <FaEnvelope className="icon" />
            <h3>Email</h3>
            <p>support@certisys.com</p>
          </div>
          <div className="card">
            <FaMapMarkerAlt className="icon" />
            <h3>Office</h3>
            <p>123, Business Park, Mumbai, India</p>
          </div>
        </div>
      </section>

      <section className="map-section">
        <h2>Our Location</h2>
        <div className="map-container">
          <iframe
            title="Company Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.795401394675!2d72.8272365750082!3d19.0760!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce11e8e0e2b7%3A0x2a25177e4dbd7595!2sMumbai!5e0!3m2!1sen!2sin!4v1687770152598!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
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
          <p>&copy; 2024 CertiSys. All rights reserved. | Designed by <a href="#">Rohan</a></p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
