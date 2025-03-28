import React from 'react';
import '../styles/hero.css';


const HeroSection = () => (
  <div className="hero-section">
    <div className="hero-image">
    <img src="/Assets/Untitled design (9) (1).png" alt="Hero Image" />
      <div className="hero-content">
        <p>Join the top 1% Access Pro-Level Trading Education</p>
        <h1>Build Your Trading Arsenal with TradeSenal</h1>
        <p className="small-text">Trade like professionals with proven systems and 7+ strategies</p>
        <button><a href="#contact-us" style={{ textDecoration: "none", color: "white" }}>Register Here </a></button>
      </div>
    </div>
  </div>
);

export default HeroSection;