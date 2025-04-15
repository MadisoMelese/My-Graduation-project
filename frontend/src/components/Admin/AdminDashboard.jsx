// import React, { useState } from "react";
// import { Line, Bar } from "react-chartjs-2";
// import { FaUser, FaChartBar, FaListAlt, FaFileExcel } from "react-icons/fa";
// import "./AdminDashboard.css";
// import axios from "axios";

// // Sample data for charts
// const lineChartData = {
//   labels: ["January", "February", "March", "April", "May", "June"],
//   datasets: [
//     {
//       label: "User Growth Over Time",
//       data: [10, 20, 30, 40, 50, 60],
//       borderColor: "#004a99",
//       fill: false,
//       tension: 0.1,
//     },
//   ],
// };

// const barChartData = {
//   labels: ["Service A", "Service B", "Service C", "Service D"],
//   datasets: [
//     {
//       label: "Service Popularity",
//       data: [35, 25, 20, 20],
//       backgroundColor: "#2a5298",
//     },
//   ],
// };

// const AdminDashboard = () => {
//   const [file, setFile] = useState(null);
//   const [uploadStatus, setUploadStatus] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");

//   // Function to handle file selection
//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   // Function to handle file upload
//   const handleFileUpload = async () => {
//     setUploadStatus("");
//     setErrorMessage("");

//     if (!file) {
//       setUploadStatus("Please select a file to upload.");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("file", file); // This should match the field name expected by multer

//     try {
//       const token = localStorage.getItem("adminToken");
//       if (!token) {
//         setUploadStatus("Unauthorized: No token found. Please log in again.");
//         return;
//       }

//       const response = await axios.post(
//         "http://localhost:5000/api/upload", // Ensure this matches your backend route
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       if (response.status === 200) {
//         setUploadStatus("File uploaded successfully.");
//       } else {
//         setErrorMessage("Failed to upload file. Please try again.");
//       }
//     } catch (error) {
//       console.error("Upload error:", error.response ? error.response.data : error.message);

//       if (error.response && error.response.status === 401) {
//         setErrorMessage("Unauthorized: Please login again.");
//       } else if (error.response && error.response.status === 403) {
//         setErrorMessage("Forbidden: You do not have permission to upload this file.");
//       } else if (error.response && error.response.status === 400) {
//         setErrorMessage("Bad Request: The file might be invalid.");
//       } else {
//         setErrorMessage("Error uploading file. Please try again.");
//       }
//     }
//   };

//   return (
//     <div className="admin-dashboard">
//       {/* Header Section */}
//       <header className="hero-section">
//         <h1>Admin Dashboard</h1>
//         <p>Manage and review the platform's performance and user data here.</p>
//       </header>

//       {/* Main Dashboard Content */}
//       <section className="dashboard-content">
//         <div className="dashboard-cards">
//           <div className="dashboard-card">
//             <FaUser className="icon" />
//             <h3>User Statistics</h3>
//             <p>Overview of user registrations and activity.</p>
//           </div>
//           <div className="dashboard-card">
//             <FaChartBar className="icon" />
//             <h3>Performance Metrics</h3>
//             <p>Monitor key performance indicators and trends.</p>
//           </div>
//           <div className="dashboard-card">
//             <FaListAlt className="icon" />
//             <h3>Service Records</h3>
//             <p>Review records and data related to services provided.</p>
//           </div>
//         </div>

//         {/* Charts Section */}
//         <div className="charts-section">
//           <div className="chart-container">
//             <h2>User Growth Over Time</h2>
//             <Line data={lineChartData} options={{ maintainAspectRatio: false }} />
//           </div>
//           <div className="chart-container">
//             <h2>Service Popularity</h2>
//             <Bar data={barChartData} options={{ maintainAspectRatio: false }} />
//           </div>
//         </div>

//         {/* File Upload Section */}
//         <section className="upload-section">
//           <h2>Upload Excel File</h2>
//           <input type="file" accept=".xlsx, .xls" onChange={handleFileChange} />
//           <button onClick={handleFileUpload}>
//             <FaFileExcel /> Upload
//           </button>
//           {uploadStatus && <p className="upload-status">{uploadStatus}</p>}
//           {errorMessage && <p className="error-message">{errorMessage}</p>}
//         </section>
//       </section>

//       {/* Logout Section */}
//       <div className="logout-section">
//         <button
//           className="logout-button"
//           onClick={() => (window.location.href = "/login")}
//         >
//           Logout
//         </button>
//       </div>

//       {/* Footer Section */}
//       <footer className="footer">
//         <h3>CertiSys</h3>
//         <p>
//           Your trusted partner in excellence. Providing quality and reliable
//           services with a commitment to customer satisfaction.
//         </p>
//         <div className="footer-links">
//           <a href="#">Privacy Policy</a>
//           <a href="#">Termsq of Service</a>
//           <a href="#">Contact Us</a>
//         </div>
//         <div className="footer-bottom">
//           <p>
//             &copy; 2025 CertiSys. All rights reserved. | Designed by{" "}
//             <a href="#">Bonga University 4'th Yeujar Computer Science Students</a>
//           </p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default AdminDashboard;

import React, { useState } from "react";
import { Line, Bar } from "react-chartjs-2";
import { FaUser, FaChartBar, FaListAlt, FaFileExcel } from "react-icons/fa";
import axios from "axios";

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

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleFileUpload = async () => {
    setUploadStatus("");
    setErrorMessage("");

    if (!file) {
      setUploadStatus("Please select a file to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const token = localStorage.getItem("adminToken");
      if (!token) {
        setUploadStatus("Unauthorized: No token found. Please log in again.");
        return;
      }

      const response = await axios.post(
        "http://localhost:5000/api/upload",
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
      console.error(
        "Upload error:",
        error.response ? error.response.data : error.message
      );

      if (error.response?.status === 401) {
        setErrorMessage("Unauthorized: Please login again.");
      } else if (error.response?.status === 403) {
        setErrorMessage(
          "Forbidden: You do not have permission to upload this file."
        );
      } else if (error.response?.status === 400) {
        setErrorMessage("Bad Request: The file might be invalid.");
      } else {
        setErrorMessage("Error uploading file. Please try again.");
      }
    }
  };

  return (
    <div className="font-sans text-gray-800 bg-gray-100 pt-8 pb-12 mt-8">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-[#1f2425] to-[#2a5298] text-white text-center py-20 px-5 shadow-md">
        <h1 className="text-4xl font-bold tracking-wide mb-4">
          Admin Dashboard
        </h1>
        <p className="text-lg font-light">
          Manage and review the platform's performance and user data here.
        </p>
      </header>

      {/* Main Dashboard Content */}
      <section className="px-5 py-16">
        <div className="flex flex-wrap justify-around mb-10">
          {[
            {
              icon: <FaUser className="text-[40px] text-[#004a99] mb-4" />,
              title: "User Statistics",
              desc: "Overview of user registrations and activity.",
            },
            {
              icon: <FaChartBar className="text-[40px] text-[#004a99] mb-4" />,
              title: "Performance Metrics",
              desc: "Monitor key performance indicators and trends.",
            },
            {
              icon: <FaListAlt className="text-[40px] text-[#004a99] mb-4" />,
              title: "Service Records",
              desc: "Review records and data related to services provided.",
            },
          ].map((card, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md m-5 p-6 w-[250px] rounded-lg text-center"
            >
              {card.icon}
              <h3 className="text-xl mb-2 text-[#004a99] font-semibold">
                {card.title}
              </h3>
              <p className="text-base text-gray-600">{card.desc}</p>
            </div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="flex flex-wrap justify-around gap-5">
          <div
            className="bg-white shadow-md p-5 rounded-lg w-full md:w-[45%] mb-5 "
            style={{ height: "350px" }}
          >
            <h2 className="text-xl font-semibold mb-4">
              User Growth Over Time
            </h2>
            <Line
              data={lineChartData}
              options={{ maintainAspectRatio: false }}
            />
          </div>

          <div
            className="bg-white shadow-md p-5 rounded-lg w-full md:w-[45%] mb-5"
            style={{ height: "350px" }}
          >
            <h2 className="text-xl font-semibold mb-4">Service Popularity</h2>
            <Bar data={barChartData} options={{ maintainAspectRatio: false }} />
          </div>
        </div>
        {/* File Upload Section */}
        <div className="bg-white shadow-md rounded-lg p-6 my-8 text-center">
          <h2 className="text-xl font-semibold mb-4">Upload Excel File</h2>
          <input
            type="file"
            accept=".xlsx, .xls"
            onChange={handleFileChange}
            className="mb-4"
          />
          <button
            onClick={handleFileUpload}
            className="bg-[#2a5298] hover:bg-[#1f2425] text-white px-5 py-2 rounded flex items-center justify-center gap-2 mx-auto"
          >
            <FaFileExcel /> Upload
          </button>
          {uploadStatus && (
            <p className="mt-4 text-base text-green-600">{uploadStatus}</p>
          )}
          {errorMessage && (
            <p className="mt-2 text-base text-red-600">{errorMessage}</p>
          )}
        </div>
      </section>

      {/* Logout Section */}
      <div className="text-center my-6">
        <button
          className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded"
          onClick={() => (window.location.href = "/login")}
        >
          Logout
        </button>
      </div>

      {/* Footer Section */}
      <footer className="bg-gradient-to-r from-[#1f2425] to-[#2a5298] text-white text-center py-10 px-5 border-t-2 border-[#004a99] mt-10">
        <h3 className="text-2xl font-bold mb-3 text-yellow-400">CertiSys</h3>
        <p className="text-base leading-6">
          Your trusted partner in excellence. Providing quality and reliable
          services with a commitment to customer satisfaction.
        </p>
        <div className="my-4">
          <a
            href="#"
            className="text-yellow-400 text-base mx-2 hover:underline"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-yellow-400 text-base mx-2 hover:underline"
          >
            Terms of Service
          </a>
          <a
            href="#"
            className="text-yellow-400 text-base mx-2 hover:underline"
          >
            Contact Us
          </a>
        </div>
        <div className="text-sm text-gray-300 mt-5">
          <p>
            &copy; 2025 CertiSys. All rights reserved. | Designed by
            <a href="#" className="text-yellow-400 font-semibold ml-1">
              Bonga University 4'th Year Computer Science Students
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default AdminDashboard;
