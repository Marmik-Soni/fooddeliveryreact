import { useState } from "react";
import { Routes, Route } from "react-router";
import "./App.css";

// Customer Pages
import Login from "./pages/customer/Login";
import Register from "./pages/customer/Register";
import Home from "./pages/customer/Home";
import Contact from "./pages/customer/Contact";
import Menu from "./pages/customer/Menu";
import Products from "./pages/customer/Products";

// Admin Pages
import AdminLogin from "./pages/admin/AdminLogin";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/products" element={<Products />} />

        {/* Admin signed in */}
        <Route path="/admin" element={<AdminLogin />} />
      </Routes>

    </>
  );
}

export default App;
