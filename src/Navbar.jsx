// src/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src= {process.env.PUBLIC_URL + "/images/logo.png"} alt="Logo" />
      </div>
      <div className="banner">
        <h1>Discover the world around us!</h1>
        <p>Explore different countries and learn about the wonders of Mother Earth</p>
        <p>Click a country or use the search bar to start exploring</p>
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/discussion">Discussion</Link>
        <Link to="/faq">FAQ</Link>
      </div>
    </div>
  );
};

export default Navbar;
