import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./StudentPortal.css";
import { FaSearch } from "react-icons/fa";
import { Line, Bar } from "react-chartjs-2";
import Reactjs from "../assets/reactjs.jpg";
import Nodejs from "../assets/nodejs.jpg";
import FullStackDev from "../assets/fullstack.jpg";
import Student1 from "../assets/student1.jpg"; // Add dummy student images
import Student2 from "../assets/student2.jpg";
import Student3 from "../assets/student3.jpg";
import Student4 from "../assets/student4.jpg";

const StudentPortal = () => {
  const [searchId, setSearchId] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setSearchId(e.target.value);
    setErrorMessage(""); // Clear error message on input change
  };

  const handleSearch = async () => {
    setSearchResult(null); // Reset searchResult before making a new request
    setErrorMessage(""); // Clear previous error message

    try {
      const response = await fetch(
        `http://localhost:5000/api/certificates/${searchId}`,
        {
          cache: "no-store",
        }
      );

      const contentType = response.headers.get("Content-Type");

      if (contentType && contentType.includes("application/json")) {
        const data = await response.json();
        if (data && data.certificateID) {
          setSearchResult(data);
        } else {
          setErrorMessage("No student ID found");
        }
      } else {
        const text = await response.text();
        console.error("Unexpected response:", text);
        setErrorMessage("Unexpected response from the server");
      }
    } catch (error) {
      setErrorMessage("Error fetching certificate data");
      console.error("Fetch error:", error);
    }
  };

  const handleOpen = () => {
    if (searchResult) {
      navigate(`/certificate/${searchResult.certificateID}`);
    }
  };

  const lineChartData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Course Enrollment",
        data: [5, 10, 15, 20, 25, 30],
        borderColor: "#004a99",
        fill: false,
        tension: 0.1,
      },
    ],
  };

  const barChartData = {
    labels: ["React", "Node.js", "Angular", "Vue", "Python", "Java"],
    datasets: [
      {
        label: "Certificates Issued",
        data: [20, 15, 10, 25, 30, 40],
        backgroundColor: "#2a5298",
      },
    ],
  };

  const studentReviews = [
    {
      img: Student1,
      name: "Ravi Kumar",
      review:
        "The React course was really insightful! It gave me the confidence to build dynamic web applications.",
    },
    {
      img: Student2,
      name: "Priya Sharma",
      review:
        "Thanks to the Full Stack Development course, I now have a solid grasp of both front-end and back-end technologies.",
    },
    {
      img: Student3,
      name: "Amit Patel",
      review:
        "Node.js Essentials helped me understand server-side JavaScript and boosted my career prospects!",
    },
    {
      img: Student4,
      name: "Sneha Singh",
      review:
        "The quality of content and the support from mentors is unmatched. I'm glad I chose this course!",
    },
  ];

  return (
    <div className="student-portal">
      <header className="portal-header">
        <h1>Student Portal</h1>
        <p>
          Welcome to your student portal. Here you can manage your courses, view
          your certificates, and more.
        </p>
      </header>

      <section className="search-section">
        <h2>Search for Student Certificate ID</h2>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Enter Student ID"
            value={searchId}
            onChange={handleInputChange}
          />
          <button onClick={handleSearch}>
            <FaSearch />
          </button>
        </div>
        {errorMessage ? (
          <p className="error-message">{errorMessage}</p>
        ) : searchResult ? (
          <div className="certificate-card">
            <h3>Certificate Details</h3>
            <p>
              <strong>ID:</strong> {searchResult.certificateID}
            </p>
            <p>
              <strong>Name:</strong> {searchResult.studentName}
            </p>
            <button onClick={handleOpen} className="open-button">
              Open
            </button>
          </div>
        ) : (
          <p className="error-message">Please enter a Student ID to search.</p>
        )}
      </section>

      <section className="cards-section">
        <h2>Our Courses</h2>
        <div className="cards">
          <div className="card">
            <img src={Reactjs} alt="React Development" />
            <h3>React Development</h3>
            <p>Learn the latest in front-end development with React.</p>
          </div>
          <div className="card">
            <img src={Nodejs} alt="Node.js Essentials" />
            <h3>Node.js Essentials</h3>
            <p>Master back-end development with Node.js.</p>
          </div>
          <div className="card">
            <img src={FullStackDev} alt="Full Stack Development" />
            <h3>Full Stack Development</h3>
            <p>Become a developer with full stack skills.</p>
          </div>
        </div>
      </section>

      <section className="charts-section">
        <h2>Course Statistics</h2>
        <div className="charts">
          <div className="line-chart">
            <h3>Enrollment Over Time</h3>
            <Line data={lineChartData} />
          </div>
          <div className="bar-chart">
            <h3>Certificates Issued by Course</h3>
            <Bar data={barChartData} />
          </div>
        </div>
      </section>

      <section className="reviews-section">
        <h2>What Our Students Say</h2>
        <div className="reviews">
          {studentReviews.map((student, index) => (
            <div className="review-card" key={index}>
              <img src={student.img} alt={`${student.name}`} />
              <h3>{student.name}</h3>
              <p>"{student.review}"</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer">
        <h3>CertiSys</h3>
        <p>
          Your trusted partner in excellence. Providing quality and reliable
          services with a commitment to customer satisfaction.
        </p>
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Contact Us</a>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; 2024 CertiSys. All rights reserved. | Designed by{" "}
            <a href="#">Rohan</a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default StudentPortal;
