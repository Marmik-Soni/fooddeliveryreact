import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Login from "./pages/customer/Login";
import Contact from "./pages/customer/Contact";
import Register from "./pages/customer/Register";
import About from "./pages/customer/About";
import Products from "./pages/customer/Products";
import TeamMember from "./components/customer/TeamMember";
import Team from "./pages/customer/Team";
import AdminLogin from "./pages/admin/AdminLogin";
import NewCategory from "./pages/admin/NewCategory";
import AddToCart from "./pages/customer/AddToCart";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Login /> */}
      {/* <Register /> */}
      {/* <About /> */}
      {/* <Contact /> */}
      {/* <Products /> */}
      {/* <Team/> */}
        <AddToCart/>



{/* Admin Side */}

      {/* <AdminLogin/> */}
      {/* <NewCategory/> */}
    </>
  );
}

export default App;
