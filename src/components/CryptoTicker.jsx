import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/crypto.css"; // Add CSS for styling

const CryptoTicker = () => {
  const [cryptoData, setCryptoData] = useState([]);
  const API_KEY = "0dbX2_BK8O_rmP-9-vT4"; // Replace with your API Key
  const BASE_URL = `https://marketdata.tradermade.com/api/v1/live_crypto_list?api_key=$0dbX2_BK8O_rmP-9-vT4`;

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        const response = await axios.get(BASE_URL);
        setCryptoData(response.data);
      } catch (error) {
        console.error("Error fetching crypto data:", error);
      }
    };

    fetchCryptoData();
    const interval = setInterval(fetchCryptoData, 10000); // Refresh every 10 seconds
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div className="crypto-container">
      <h2>Live Crypto Prices</h2>
      <div className="crypto-ticker">
        {cryptoData?.data?.map((crypto, index) => (
          <div key={index} className="crypto-item">
            <span>{crypto.name} ({crypto.symbol}): </span>
            <span>${crypto.price.toFixed(2)}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CryptoTicker;
