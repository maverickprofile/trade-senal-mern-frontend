import React, { useState } from 'react';
import '../styles/navbar.css';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleNav = () => setIsActive(!isActive);

  return (
    <div id="navbar" data-scroll data-scroll-speed="2">
      <div id="logo">
        <h2 className="logo">
          <a href="#" style={{ textDecoration: 'none', color: 'white', fontFamily: 'Clearface Gothic W02 Bold' }}>
            Trade<span className="highlight">Senal</span>
          </a>
        </h2>
      </div>
      <div id="nav-toggle" onClick={toggleNav}>☰</div>
      <div id="nav-content" className={isActive ? 'active' : ''}>
        <ul>
          <li><a href="#features">Features</a></li>
          <li><a href="#courses">Courses</a></li>
          <li><a href="#contact-us">Contact Us</a></li>
        </ul>
      </div>
      <div id="register">
      <button><a href="#contact-us" style={{ textDecoration: "none", color: "white" }}>Register</a></button>
      </div>
    </div>
  );
};

export default Navbar;