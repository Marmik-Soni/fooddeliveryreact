import { useState } from "react";
import "./App.css";
import Login from "./pages/customer/Login";
import Contact from "./pages/customer/Contact";
import Register from "./pages/customer/Register";
import About from "./pages/customer/About";
import Products from "./pages/customer/Products";
import TeamMember from "./components/customer/TeamMember";
import Team from "./pages/customer/Team";
import AddToCart from "./pages/customer/AddToCart";
import Blogs from "./pages/customer/Blogs";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Login />
      {/* <Register /> */}
      {/* <About /> */}
      {/* <Contact /> */}
      {/* <Products /> */}
      {/* <Team/> */}
      {/* <AddToCart /> */}
      {/* <Blogs /> */}
      
      {/* ---------------- Admin Side ---------------- */}
    </>
  );
}

export default App;
