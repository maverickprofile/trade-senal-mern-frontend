import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/ticker.css";

const CryptoForexTicker = () => {
    const [cryptoData, setCryptoData] = useState([]);
    const [forexData, setForexData] = useState([]);

    useEffect(() => {
        const fetchCryptoPrices = async () => {
            try {
                const res = await axios.get(
                    "https://api.coingecko.com/api/v3/simple/price",
                    {
                        params: {
                            ids: "bitcoin,ethereum,cardano",
                            vs_currencies: "usd",
                            include_24hr_change: "true",
                        },
                    }
                );

                const formattedData = [
                    { name: "Bitcoin", price: res.data.bitcoin.usd, change: res.data.bitcoin.usd_24h_change.toFixed(2), logo: "🔵" },
                    { name: "Ethereum", price: res.data.ethereum.usd, change: res.data.ethereum.usd_24h_change.toFixed(2), logo: "🟣" },
                    { name: "Cardano", price: res.data.cardano.usd, change: res.data.cardano.usd_24h_change.toFixed(2), logo: "🔺" }
                ];

                setCryptoData(formattedData);
            } catch (error) {
                console.error("Error fetching crypto data:", error);
            }
        };

        const fetchForexRates = async () => {
            try {
                const res = await axios.get(
                    "https://v6.exchangerate-api.com/v6/7b15ed4212559f5cc2df987e/latest/USD"
                );

                const rates = res.data.conversion_rates;
                const formattedForex = [
                    { name: "USD/INR", price: rates.INR, logo: "🇺🇸🇮🇳" },
                    { name: "USD/EUR", price: rates.EUR, logo: "🇺🇸🇪🇺" },
                    { name: "USD/GBP", price: rates.GBP, logo: "🇺🇸🇬🇧" }
                ];

                setForexData(formattedForex);
            } catch (error) {
                console.error("Error fetching forex data:", error);
            }
        };

        fetchCryptoPrices();
        fetchForexRates();

        const interval = setInterval(() => {
            fetchCryptoPrices();
            fetchForexRates();
        }, 10000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="ticker-container">
            <div className="ticker">
                {cryptoData.map((item, index) => (
                    <div className="ticker-item" key={index}>
                        <span className="ticker-logo">{item.logo}</span>
                        <span className="ticker-name">{item.name}</span>
                        <span className="ticker-price">${item.price}</span>
                        <span className={`ticker-change ${item.change > 0 ? "green" : "red"}`}>
                            {item.change}%
                        </span>
                    </div>
                ))}

                {forexData.map((item, index) => (
                    <div className="ticker-item" key={index}>
                        <span className="ticker-logo">{item.logo}</span>
                        <span className="ticker-name">{item.name}</span>
                        <span className="ticker-price">{item.price}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CryptoForexTicker;
