import React from 'react';
import { FaChartLine, FaUsers, FaRegThumbsUp, FaBullseye, FaShieldAlt, FaCheckCircle, FaHeadset } from 'react-icons/fa';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import './Home.css';
import Service1 from '../../assets/service1.jpg'
import Service2 from '../../assets/service2.jpg'
import Service3 from '../../assets/service3.jpg'
import Service4 from '../../assets/service4.jpg'
import People1 from '../../assets/people1.jpg'
import People2 from '../../assets/people2.jpg'
import People3 from '../../assets/people3.jpg'
import People4 from '../../assets/people4.jpg'

const Home = () => {
  const chartData = {
    labels: ['2021', '2022', '2023', '2024'],
    datasets: [
      {
        label: 'Certificates Issued',
        data: [120, 200, 350, 500],
        backgroundColor: 'rgba(75,192,192,0.6)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 2,
        borderRadius: 10,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          color: '#333',
          font: {
            size: 14,
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: '#333',
          font: {
            size: 12,
          },
        },
      },
      x: {
        ticks: {
          color: '#333',
          font: {
            size: 12,
          },
        },
      },
    },
  };

  return (
    <div className="home">
      <header className="hero-section ">
        <h1 className=''>Welcome to Certificate Verification System</h1>
        <p>Ensuring the authenticity and reliability of your certificates with advanced technology.</p>
      </header>

      <section className="about-section">
        <h2>Why Choose Us?</h2>
        <p>We offer a reliable and secure system for verifying your certificates, backed by advanced technology and expert support.</p>
        <div className="about-stats">
          <div className="stat">
            <FaUsers className="icon" />
            <h3>1000+</h3>
            <p>Verified Users</p>
          </div>
          <div className="stat">
            <FaRegThumbsUp className="icon" />
            <h3>500+</h3>
            <p>Satisfied Clients</p>
          </div>
          <div className="stat">
            <FaChartLine className="icon" />
            <h3>Growth</h3>
            <p>Consistent Growth</p>
          </div>
          <div className="stat">
            <FaShieldAlt className="icon" />
            <h3>100%</h3>
            <p>Data Security</p>
          </div>
        </div>
      </section>

      <section className="chart-section">
        <h2>Our Growth</h2>
        <div className="chart-container">
          <Bar data={chartData} options={chartOptions} />
        </div>
      </section>

      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-container">
          <div className="service-card">
            <img src={Service1} alt="Service 1" />
            <h3>Certificate Verification</h3>
            <p>We provide a thorough verification process to ensure the authenticity of your certificates.</p>
          </div>
          <div className="service-card">
            <img src={Service2} alt="Service 2" />
            <h3>Secure Storage</h3>
            <p>Your certificates are securely stored and easily accessible through our platform.</p>
          </div>
          <div className="service-card">
            <img src={Service3} alt="Service 3" />
            <h3>Real-time Updates</h3>
            <p>Stay updated with real-time information about your certificates.</p>
          </div>
          <div className="service-card">
            <img src={Service4} alt="Service 4" />
            <h3>24/7 Support</h3>
            <p>Our support team is available around the clock to assist you with any issues.</p>
          </div>
        </div>
      </section>

      <section className="mission-section">
        <h2>Our Mission</h2>
        <p>Our mission is to provide a secure, user-friendly, and reliable platform for certificate verification, ensuring that every certificate is authentic and trustworthy.</p>
      </section>

      <section className="goals-section">
        <h2>Our Goals</h2>
        <ul>
          <li>Expand our reach globally</li>
          <li>Innovate with the latest technology</li>
          <li>Maintain top-notch customer satisfaction</li>
          <li>Enhance user experience continuously</li>
        </ul>
      </section>

      <section className="comparison-section">
        <h2>Certificate Issuance Comparison (2021-2024)</h2>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Year</th>
                <th>Certificates Issued</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2021</td>
                <td>120</td>
              </tr>
              <tr>
                <td>2022</td>
                <td>200</td>
              </tr>
              <tr>
                <td>2023</td>
                <td>350</td>
              </tr>
              <tr>
                <td>2024</td>
                <td>500</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="review-section">
        <h2>What People Say</h2>
        <div className="review-container">
          <div className="review-card">
            <img src={People1} alt="User 1" />
            <p>"This platform has made certificate verification so simple and reliable. Highly recommend it!"</p>
            <h4>Surya Singh</h4>
          </div>
          <div className="review-card">
            <img src={People2} alt="User 1" />
            <p>"This platform has made certificate verification so simple and reliable. Highly recommend it!"</p>
            <h4>Payal Jaiswal</h4>
          </div>
          <div className="review-card">
            <img src={People3} alt="User 1" />
            <p>"This platform has made certificate verification so simple and reliable. Highly recommend it!"</p>
            <h4>Akash Singh</h4>
          </div>
          <div className="review-card">
            <img src={People4} alt="User 2" />
            <p>"Excellent service with top-notch security and support. Very satisfied with the experience. Must give it a try!"</p>
            <h4>Rohit Gupta</h4>
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
        <p>&copy; 2024 Company Name. All rights reserved. | Designed by <a href="#">Bonga University 4'th Year Computer Science Students</a></p>
    </div>
</footer>

    </div>
  );
};

export default Home;
