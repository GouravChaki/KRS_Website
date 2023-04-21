import React from "react";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Courses from "./components/courses/Courses";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import State from "./components/State";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/state" element={<State />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
