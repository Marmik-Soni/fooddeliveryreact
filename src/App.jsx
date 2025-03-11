// Libraries imports
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
import CategoryList from "./pages/admin/CategoryList";



function App() {

  return (
    <>
      {/* Routing Begins */}
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/products" element={<Products />} />


        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard/>} />
        <Route path="/AddCategory" element={<AddCategory/>} />
        <Route path="/categoryList" element={<CategoryList/>} />
      </Routes>

      {/* Toaster */}
      <ToastContainer />
    </>
  );
}

export default App;
