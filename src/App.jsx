import { useState } from "react";
import { Routes, Route } from "react-router";
import "./App.css";

// Customer Pages
import Login from "./pages/customer/Login";
import Register from "./pages/customer/Register";
import Home from "./pages/customer/Home";
import Contact from "./pages/customer/Contact";
import Menu from "./pages/customer/Menu";


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
      </Routes>
    </>
  );
}

export default App;
