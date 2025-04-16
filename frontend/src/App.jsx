import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Home from './components/Pages/Home';
import About from './components/About'; 
import Contact from './components/Contact';
import StudentPortal from './components/StudentPortal';
import Login from './components/Login';
import AdminDashboard from './components/Admin/AdminDashboard';
import CertificateDetail from './components/CertificateDetail';

import UserManagement from "./components/Admin/UserManagement";
import ProdictManagement from "./components/Admin/ProdictManagement";
import OrderManagement from "./components/Admin/OrderManagement";
import EditProductPage from "./components/Admin/EditProductPage";
import AdminLayout from './components/Admin/AdminLayout';
import AdminHomePage from
 "./components/pages/AdminHomePages";

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
        {/* <Route path="/" element={<Home />} /> 
        <Route path="/about" element={<About />} /> 
        <Route path="/contact" element={<Contact />} />
        <Route path="/student-portal" element={<StudentPortal />} />
        <Route path="/certificate/:id" element={<CertificateDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} /> */}
        <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminHomePage />} />
            <Route path="users" element={<UserManagement />} />
            <Route path="products" element={<ProdictManagement />} />
            <Route path="products/:id/edit" element={<EditProductPage />} />
            <Route path="orders" element={<OrderManagement />} />
          </Route>
      </Routes> 
    </Router>
  );
}

export default App;
