// Libraries imports
import { useState } from "react";
import { Routes, Route } from "react-router";
import { ToastContainer } from "react-toastify";
import "./App.css";

// Customer Pages Imports
import Login from "./pages/customer/Login";
import Register from "./pages/customer/Register";
import Home from "./pages/customer/Home";
import Contact from "./pages/customer/Contact";
import Menu from "./pages/customer/Menu";
import Products from "./pages/customer/Products";

// Admin Pages Imports
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AddCategory from "./pages/admin/AddCategory";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Routing Begins */}
      <Routes>
        
        {/* Customer Side Routing */}
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/products" element={<Products />} />
        
        {/* Admin Side Routing */}
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard/>} />
        <Route path="/AddCategory" element={<AddCategory/>} />
      </Routes>

      {/* Toaster */}
      <ToastContainer />
    </>
  );
}

export default App;
