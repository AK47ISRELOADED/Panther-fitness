import React from "react";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Diet from "./pages/Diet";
import Login from "./pages/Login";
import About from "./pages/About";
import Contactus from "./pages/Contactus";
import Register from "./pages/Register";
import "./index.css";
import LocomotiveScroll from "locomotive-scroll";

const App = () => {
  const scroll = new LocomotiveScroll();
  return (
    <div className="bg-[#171A26]">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/diet" element={<Diet />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/contactus" element={<Contactus />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
