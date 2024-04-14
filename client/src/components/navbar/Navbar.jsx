import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/dynaplex-logo-full.png"; // Import the logo image
import "./style.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo" onClick={() => navigate("/home")}>
        <img src={logo} alt="Website Logo" />
      </div>
      <div className="nav-links">
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
};

export default Navbar;
