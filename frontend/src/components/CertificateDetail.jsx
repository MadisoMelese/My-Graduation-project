import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaCertificate, FaSignature, FaCalendarAlt, FaRegStar } from 'react-icons/fa';
import { QRCodeCanvas } from 'qrcode.react'; // Use QRCodeCanvas
import './CertificateDetail.css'; // Import CSS for certificate styling

const url = 'http://localhost:5000'; // Base URL for API requests
const CertificateDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [certificateData, setCertificateData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [qrCodeUrl, setQrCodeUrl] = useState('');
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const fetchCertificate = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/certificates/${id}`);
        const data = await response.json();
        setCertificateData(data);
        setLoading(false);
        setQrCodeUrl(`${url}/api/certificates/${id}`);
        setCurrentDate(new Date().toLocaleDateString()); // Set current date
      } catch (error) {
        console.error('Error fetching certificate data:', error);
        setLoading(false);
      }
    };
    fetchCertificate();
  }, [id]);

  const downloadCertificate = () => {
    const pdfUrl = `http://localhost:5000/api/certificates/${id}/pdf`;
    window.open(pdfUrl, '_blank'); // Open the PDF in a new tab
  };

  const handleBack = () => {
    navigate('/student-portal');
  };

  if (loading) {
    return <p>Loading certificate details...</p>;
  }

  if (!certificateData) {
    return <p>Certificate not found.</p>;
  }

  return (
    <div className="certificate-detail">
      <div className="certificate-layout ">
        <header className="certificate-header">
          <h1>Certificate of Achievement</h1>
          <FaCertificate className="certificate-icon" />
        </header>

        <div className="certificate-content">
          <p className="certificate-intro">This certifies that</p>
          <h2>{certificateData.studentName}</h2>
          <p>has successfully completed the</p>
          <h3>{certificateData.internshipDomain}</h3>
          <p className="certificate-duration">
            <FaCalendarAlt className="calendar-icon" />
            {` From ${new Date(certificateData.startDate).toLocaleDateString()} to ${new Date(certificateData.endDate).toLocaleDateString()}`}
          </p>
          <p className="additional-text">
            We commend your dedication and exceptional performance throughout the course. This certificate is a testament to your hard work and commitment.
          </p>

          <div className="certificate-achievements">
            <p><FaRegStar /> Outstanding Performance</p>
            <p><FaRegStar /> Excellent Participation</p>
          </div>

          <footer>
            <p>Certified by CertiSys</p>
            <div className="signature-section">
              <p> Signature:    <FaSignature /> </p> {/* Random Signature */}
              <div className="signature-line"></div>
            </div>
            <div className="date-section">
              <p>Date of Issue: {currentDate}</p> {/* Current Date */}
            </div>
          </footer>
        </div>

        {/* QR Code */}
        <div className="qr-code-section">
          <QRCodeCanvas id="qr-code-canvas" value={qrCodeUrl} size={128} />
        </div>

        <div className="certificate-actions">
          <button onClick={handleBack}>Back to Portal</button>
          <button onClick={downloadCertificate}>Download Certificate</button>
        </div>
      </div>

      <footer className="footer">
        <h3>CertiSys</h3>
        <p>Your trusted partner in excellence.</p>
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Contact Us</a>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 CertiSys. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default CertificateDetail;
