import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar';
import Home from './components/Pages/Home';
// import About from './components/About'; 
// import Contact from './components/Contact';
// import StudentPortal from './components/StudentPortal';
// import Login from './components/Login';
import AdminDashboard from './components/Admin/AdminDashboard';
// import CertificateDetail from './components/CertificateDetail';

function App() {
  return (
    <Router
    future={{
      v7_startTransition: true, 
      v7_relativeSplatPath: true, 
    }}
    >
      {/* <Navbar /> */}
      <Routes>
       <Route path="/" element={<Home />} /> 
        {/*<Route path="/about" element={<About />} /> 
        <Route path="/contact" element={<Contact />} />
        <Route path="/student-portal" element={<StudentPortal />} />
        <Route path="/certificate/:id" element={<CertificateDetail />} />
        <Route path="/login" element={<Login />} /> */}
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
