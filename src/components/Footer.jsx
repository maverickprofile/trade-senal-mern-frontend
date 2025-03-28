import React from 'react';
import '../styles/footer.css';

const Footer = () => (
  <div className="footer-main-section">
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h2 className="logo">Trade<span className="highlight">Senal</span></h2>
          <div className="social-icons">

            <i className="fab fa-instagram"></i>
            <i className="fab fa-linkedin"></i>
            <i className="fa-brands fa-x-twitter"></i>
            <i className="fab fa-discord"></i>
            <i className="fa-brands fa-telegram"></i>
            <i className="fa-brands fa-youtube"></i>
          </div>
        </div>
        <div className="footer-right">
          <div className="footer-section">
            <h3>Contacts</h3>
            <a href="#">Contact</a>
            <a href="#faq">FAQs</a>
          </div>
          <div className="footer-section">
            <h3>Programs</h3>
            <a href="#features">How It Works</a>
          </div>
          <div className="footer-section">
            <h3>Documents</h3>
            <a href="#">Terms and Conditions</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
      <div className="footer-background-text">TRADESENAL</div>
      <br /><br />
      <p className="copyright">© All Copyright TradeSenal 2025</p>
    </footer>
  </div>
);

export default Footer;