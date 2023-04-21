import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex w-full justify-between items-center p-4 fixed bg-white">
      {/* Logo */}
      <div className="w-40">
        <img
          src="https://krs.kiit.ac.in/assets/KRS.b5e08628.png"
          alt=""
          className="w-12 h-12"
        />
      </div>
      {/* Links */}
      <div className="text-lg">
        <Link to="/" className="px-2">
          Home
        </Link>
        <Link to="/courses" className="px-2">
          Courses
        </Link>
        <a href="#contact" className="px-2">
          Contact us
        </a>
      </div>
      {/* Buttons */}
      <div className="text-lg">
        <button className="bg-blue-500 px-4 mx-2 rounded-md text-white">
          <Link to="/login">Login</Link>
        </button>
        <button className=" px-4 mx-2 rounded-md border-[1px] border-black">
          <Link to="/register">Register</Link>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
