import React, { useState } from "react";
import { Line, Bar } from "react-chartjs-2";
import { FaUser, FaChartBar, FaListAlt, FaFileExcel } from "react-icons/fa";
import "./AdminDashboard.css";
import axios from "axios";
import { Link } from "react-router-dom";
import AdminSidebar from "./Adminsidebar";


// Sample data for charts
const lineChartData = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      label: "User Growth Over Time",
      data: [10, 20, 30, 40, 50, 60],
      borderColor: "#004a99",
      fill: false,
      tension: 0.1,
    },
  ],
};

const barChartData = {
  labels: ["Service A", "Service B", "Service C", "Service D"],
  datasets: [
    {
      label: "Service Popularity",
      data: [35, 25, 20, 20],
      backgroundColor: "#2a5298",
    },
  ],
};

const AdminDashboard = () => {
  const [file, setFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () =>{
    setIsSidebarOpen(!isSidebarOpen);
  }
  // Function to handle file selection
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  // Function to handle file upload
  const handleFileUpload = async () => {
    setUploadStatus("");
    setErrorMessage("");

    if (!file) {
      setUploadStatus("Please select a file to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file); // This should match the field name expected by multer

    try {
      const token = localStorage.getItem("adminToken");
      if (!token) {
        setUploadStatus("Unauthorized: No token found. Please log in again.");
        return;
      }

      const response = await axios.post(
        "http://localhost:5000/api/upload ", // Ensure this matches your backend route
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        setUploadStatus("File uploaded successfully.");
      } else {
        setErrorMessage("Failed to upload file. Please try again.");
      }
    } catch (error) {
      console.error("Upload error:", error.response ? error.response.data : error.message);

      if (error.response && error.response.status === 401) {
        setErrorMessage("Unauthorized: Please login again.");
      } else if (error.response && error.response.status === 403) {
        setErrorMessage("Forbidden: You do not have permission to upload this file.");
      } else if (error.response && error.response.status === 400) {
        setErrorMessage("Bad Request: The file might be invalid.");
      } else {
        setErrorMessage("Error uploading file. Please try again.");
      }
    }
  };

  return (
    <div className="admin-dashboard min-h-screen flex flex-col md:flex-row relative ">
      {/* Header Section */}

      <header className="hero-section ">
        <h1>Admin Dashboard</h1>
        <p>Manage and review the platform's performance and user data here.</p>
      </header>
  <AdminSidebar />
      {/* Main Dashboard Content */}
      <section className="dashboard-content">
        <div className="dashboard-cards">
          <div className="dashboard-card">
            <FaUser className="icon" />
            <h3>User Statistics</h3>
            <p>Overview of user registrations and activity.</p>
          </div>
          <div className="dashboard-card">
            <FaChartBar className="icon" />
            <h3>Performance Metrics</h3>
            <p>Monitor key performance indicators and trends.</p>
          </div>
          <div className="dashboard-card">
            <FaListAlt className="icon" />
            <h3>Service Records</h3>
            <p>Review records and data related to services provided.</p>
          </div>
        </div>

        {/* Charts Section */}
        <div className="charts-section">
          <div className="chart-container">
            <h2>User Growth Over Time</h2>
            <Line data={lineChartData} options={{ maintainAspectRatio: false }} />
          </div>
          <div className="chart-container">
            <h2>Service Popularity</h2>
            <Bar data={barChartData} options={{ maintainAspectRatio: false }} />
          </div>
        </div>

        {/* File Upload Section */}
        <section className="upload-section">
          <h2>Upload Excel File</h2>
          <input type="file" accept=".xlsx, .xls" onChange={handleFileChange} />
          <button onClick={handleFileUpload}>
            <FaFileExcel /> Upload
          </button>
          {uploadStatus && <p className="upload-status">{uploadStatus}</p>}
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </section>
      </section>

      {/* Logout Section */}
      <div className="logout-section">
        <button
          className="logout-button"
          onClick={() => (window.location.href = "/login")}
        >
          Logout
        </button>
      </div>

      {/* Footer Section */}
      <footer className="footer">
        <h3>CertiSys</h3>
        <p>
          Your trusted partner in excellence. Providing quality and reliable
          services with a commitment to customer satisfaction.
        </p>
        <div className="footer-links">
          <Link to={"#"}>Privacy Policy</Link>
          <Link to={"#"}>Terms of Service</Link>
        </div>
        <div className="footer-bottom">/
          <p>
            &copy; 2025 CertiSys. All rights reserved. | Designed by{" "}
          <Link to={"#"}>Bonga University 4'th Year Computer Science Studentss</Link>

          </p>
        </div>
      </footer>
    </div>
  );
};

export default AdminDashboard;
