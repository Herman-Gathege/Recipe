import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import log2 from "../assets/logo.png";

function Nav() {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src={log2} alt="logo" />
      </div>

      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/Discover">Discover</Link>
        <Link to="Contact">Contact Us</Link>
        <Link to="about">About Us</Link>
      </div>

      <div className="navbar-buttons">
        <Link to="/signin">
          <button className="signup">Login</button>
        </Link>

        <Link to="/signup">
          <button className="login">Sign Up</button>
        </Link>
      </div>
    </div>
  );
}

export default Nav;
