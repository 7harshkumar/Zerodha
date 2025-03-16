import React, { useState, useEffect } from "react";
import axios from "axios";

const Summary = () => {
  const [summaryData, setSummaryData] = useState({});
  const [holdingsCount, setHoldingsCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const formatNumber = (num) => {
    if (!num) return "0";
    return num >= 1000 ? `${(num / 1000).toFixed(1)}k` : num.toFixed(2);
  };

  useEffect(() => {
    const fetchSummary = async () => {
      try {
        const token = localStorage.getItem("token"); // Ensure token is stored

        const [summaryRes, holdingsRes] = await Promise.all([
          axios.get("https://zerodha-backend-40na.onrender.com/api/summary", {
            headers: { Authorization: `Bearer ${token}` },
            withCredentials: true,
          }),
          axios.get("https://zerodha-backend-40na.onrender.com/allHoldings", {
            headers: { Authorization: `Bearer ${token}` },
            withCredentials: true,
          }),
        ]);

        setSummaryData(summaryRes.data);
        setHoldingsCount(holdingsRes.data.length);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to load data. Please try again.");
        setLoading(false);
      }
    };

    fetchSummary();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <>
      <div className="username">
        <h6>Hi, {summaryData.username || "User"}!</h6>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Equity</p>
        </span>

        <div className="data">
          <div className="first">
            <h3>{formatNumber(summaryData.marginAvailable)}</h3>
            <p>Margin available</p>
          </div>
          <hr />

          <div className="second">
            <p>Margins used <span>{formatNumber(summaryData.marginsUsed)}</span></p>
            <p>Opening balance <span>{formatNumber(summaryData.openingBalance)}</span></p>
          </div>
        </div>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Holdings ({holdingsCount})</p>
        </span>

        <div className="data">
          <div className="first">
            <h3 className="profit">
              {formatNumber(summaryData.profitLoss)} <small>+{summaryData.profitPercentage || 0}%</small>
            </h3>
            <p>P&L</p>
          </div>
          <hr />

          <div className="second">
            <p>Current Value <span>{formatNumber(summaryData.currentValue)}</span></p>
            <p>Investment <span>{formatNumber(summaryData.investment)}</span></p>
          </div>
        </div>
        <hr className="divider" />
      </div>
    </>
  );
};

export default Summary;
