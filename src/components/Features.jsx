import React from "react";
import "../styles/Features.css";

const FeaturesSection = () => {
  return (
    <div className="features" id="features">
      <div className="feature-container">
        <h2 className="section-title">Why Choose Us</h2>
        <p className="section-description">
          Discover why we are the best choice for your trading journey.
        </p>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon glow-gold">
              <i className="fa-solid fa-crown"></i>
            </div>
            <h3>Basics to Pro</h3>
            <p>Master trading from scratch to expert level with structured, easy-to-follow lessons.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon glow-green">
              <i className="fa-solid fa-money-bill-trend-up"></i>
            </div>
            <h3>Best Signals in the World</h3>
            <p>Get highly accurate, real-time trading signals to maximize your profits.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon glow-blue">
              <i className="fa-solid fa-earth-americas"></i>
            </div>
            <h3>Live Trading Streams</h3>
            <p>Join a growing network of traders and learn together.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon glow-orange">
              <i className="fa-solid fa-headset"></i>
            </div>
            <h3>Priority Customer Support</h3>
            <p>Our dedicated support team is always here to help you.</p>
          </div>
        </div>
      </div>

      {/* Top Features Section */}
      <section className="top-features">
        <h2 className="section-title">Top Features</h2>
        <p className="section-description">Become A Pro Trader Today!</p>
        <div className="timeline">
          <div className="timeline-item left">
            <div className="features-card">
              <div className="dot right-dot"></div>
              <i className="fa-solid fa-user-graduate"></i>
              <h3>University Level Education</h3>
              <p>Learn trading with in-depth, structured education designed by professionals.</p>
            </div>
          </div>

          <div className="timeline-item right">
            <div className="features-card">
              <div className="dot left-dot"></div>
              <i className="fa-solid fa-business-time"></i>
              <h3>Real-Time Trading Signals</h3>
              <p>Get instant buy/sell signals from experts to maximize profit opportunities.</p>
            </div>
          </div>

          <div className="timeline-item left">
            <div className="features-card">
              <div className="dot right-dot"></div>
              <i className="fa-solid fa-money-bill-trend-up"></i>
              <h3>Live Trading Daily</h3>
              <p>Join live trading sessions with professional traders every day.</p>
            </div>
          </div>

          <div className="timeline-item right">
            <div className="features-card">
              <div className="dot left-dot"></div>
              <i className="fa-solid fa-comment"></i>
              <h3>Community Access</h3>
              <p>Engage with a community of traders, share strategies, and discuss trends.</p>
            </div>
          </div>

          <div className="timeline-item left">
            <div className="features-card">
              <div className="dot right-dot"></div>
              <i className="fa-solid fa-robot"></i>
              <h3>Access to Bot</h3>
              <p>Utilize AI-driven bots for automated trading and risk management.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturesSection;
