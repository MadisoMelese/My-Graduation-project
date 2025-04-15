import React, { useState } from 'react';
import './Login.css';
import { FaChartLine, FaThumbsUp, FaCog } from 'react-icons/fa';
import Chart from 'chart.js/auto';
import { Line, Bar } from 'react-chartjs-2';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Login = () => {
    const [adminCredentials, setAdminCredentials] = useState({ email: '', password: '' });
    const navigate = useNavigate(); // Initialized useNavigate to redirect after login

    const handleAdminLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/admin/login', adminCredentials); // Admin login API call
            console.log('Admin logged in:', response.data);
            
            // Store token in localStorage for admin authorization
            localStorage.setItem('adminToken', response.data.token);

            Swal.fire('Success', '🎉 Admin Login Successful!', 'success');
            navigate('/admin-dashboard'); // Redirect to Admin Dashboard upon successful login
        } catch (error) {
            console.error('Admin login failed:', error);
            Swal.fire('Error', '❌ Admin Login Failed', 'error');
        }
    };

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setAdminCredentials({ ...adminCredentials, [id]: value });
    };

    const lineChartData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
            {
                label: 'User Growth Over Time',
                data: [10, 20, 30, 40, 50, 60],
                borderColor: '#004a99',
                fill: false,
                tension: 0.1,
            },
        ],
    };

    const barChartData = {
        labels: ['Service A', 'Service B', 'Service C', 'Service D'],
        datasets: [
            {
                label: 'Service Popularity',
                data: [35, 25, 20, 20],
                backgroundColor: '#2a5298',
            },
        ],
    };

    return (
        <div className="login-page">
            <header className="page-header">
                <h1>Admin Login</h1>
                <p>Access exclusive content and features by logging into your admin account.</p>
            </header>

            <section className="login-section">
                <div className="login-container">
                    <h2>Admin Login</h2>
                    <form className="login-form" onSubmit={handleAdminLogin}>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter your email"
                                value={adminCredentials.email}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                placeholder="Enter your password"
                                value={adminCredentials.password}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <button type="submit">Admin Login</button>
                    </form>
                </div>
            </section>

            {/* Additional sections: charts, services, reviews, and footer */}
            <section className="why-login">
                <h2>Why Login?</h2>
                <div className="why-login-container">
                    <div className="why-login-card">
                        <FaChartLine className="icon" />
                        <h3>Track Your Progress</h3>
                        <p>Monitor your learning journey and see your progress over time.</p>
                    </div>
                    <div className="why-login-card">
                        <FaThumbsUp className="icon" />
                        <h3>Exclusive Content</h3>
                        <p>Access exclusive resources and content available only to registered users.</p>
                    </div>
                    <div className="why-login-card">
                        <FaCog className="icon" />
                        <h3>Personalized Experience</h3>
                        <p>Customize your learning experience based on your preferences and goals.</p>
                    </div>
                </div>
            </section>

            <section className="charts-section">
                <h2>Our Performance</h2>
                <div className="charts">
                    <div className="line-chart">
                        <h3>User Growth Over Time</h3>
                        <Line data={lineChartData} />
                    </div>
                    <div className="bar-chart">
                        <h3>Service Popularity</h3>
                        <Bar data={barChartData} />
                    </div>
                </div>
            </section>

            <section className="services-section">
                <h2>Our Services</h2>
                <div className="services-cards">
                    <div className="service-card">
                        <h3>Service A</h3>
                        <p>Description of Service A. Offering top-notch solutions and support.</p>
                    </div>
                    <div className="service-card">
                        <h3>Service B</h3>
                        <p>Description of Service B. Comprehensive and reliable service offerings.</p>
                    </div>
                    <div className="service-card">
                        <h3>Service C</h3>
                        <p>Description of Service C. Innovative approaches and expertise at your service.</p>
                    </div>
                    <div className="service-card">
                        <h3>Service D</h3>
                        <p>Description of Service D. Providing proper customer customization.</p>
                    </div>
                </div>
            </section>

            <section className="reviews-section">
                <h2>What Our Users Say</h2>
                <div className="reviews-container">
                    <div className="review-card">
                        <h3>Akash Singh</h3>
                        <p>"This platform has transformed my learning experience. Highly recommend!"</p>
                    </div>
                    <div className="review-card">
                        <h3>Rituraj S</h3>
                        <p>"Fantastic tools and resources. The personalized experience is unmatched."</p>
                    </div>
                    <div className="review-card">
                        <h3>Divya Bhoi</h3>
                        <p>"A great platform with excellent customer support and valuable content."</p>
                    </div>
                    <div className="review-card">
                        <h3>Prakash Verma</h3>
                        <p>"An excellent platform for certificates."</p>
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
                    <p>&copy; 2024 CertiSys. All rights reserved. | Designed by <a href="#">Bonga University 4'th Year Computer Science Students</a></p>
                </div>
            </footer>
        </div>
    );
};

export default Login;
