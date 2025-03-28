import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import Courses from './components/Courses';
import FAQ from './components/FAQ';
import Newsletter from './components/Newsletter';
import Register from './components/Register';
import Footer from './components/Footer';
import CryptoForexTicker from "./components/CryptoForexTicker"; // Import the ticker component
import './styles/global.css';

function App() {
  return (
    <Router>
      <div id="container">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <CryptoForexTicker /> {/* Ticker component yahan render hoga */}
                <Features />
                <Courses />
                <FAQ />
                <Newsletter />
                <Register />
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;