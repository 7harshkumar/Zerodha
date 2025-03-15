import React, { useState, useEffect } from "react";
import axios from "axios";
import { VerticalGraph } from "./VerticalGraph";

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);
  const [hoveredRow, setHoveredRow] = useState(null);

  useEffect(() => {
    fetchHoldings();
  }, []);

  const fetchHoldings = async () => {
    try {
      const res = await axios.get(
        "https://zerodha-backend-40na.onrender.com/allHoldings",
        { headers: { "Content-Type": "application/json" }, withCredentials: true }
      );
      setAllHoldings(res.data);
    } catch (error) {
      console.error("Error fetching holdings:", error);
    }
  };

  const handleDelete = async (stockId) => {
    try {
      const response = await axios.delete(
        `https://zerodha-backend-40na.onrender.com/deleteHolding/${stockId}`,
        { headers: { "Content-Type": "application/json" }, withCredentials: true }
      );
      if (response.status === 200) {
        setAllHoldings((prev) => prev.filter((stock) => stock._id !== stockId));
        console.log("Stock deleted successfully!");
      }
    } catch (error) {
      console.error("Error deleting stock:", error);
    }
  };

  const totalInvestment = allHoldings.reduce((acc, stock) => acc + (stock.avg || 0) * (stock.qty || 0), 0);
  const currentValue = allHoldings.reduce((acc, stock) => acc + (stock.price || 0) * (stock.qty || 0), 0);
  const totalProfitLoss = currentValue - totalInvestment;

  const labels = allHoldings.map((stock) => stock.name || "Unknown");
  const data = {
    labels,
    datasets: [{ label: "Stock Price", data: allHoldings.map((stock) => stock.price || 0), backgroundColor: "rgba(255, 99, 132, 0.5)" }],
  };

  return (
    <>
      <h3 className="title">Holdings ({allHoldings.length})</h3>
      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {allHoldings.map((stock) => {
              const curValue = (stock.price || 0) * (stock.qty || 0);
              const profitLoss = curValue - (stock.avg || 0) * (stock.qty || 0);
              const isProfit = profitLoss >= 0;
              return (
                <tr key={stock._id} onMouseEnter={() => setHoveredRow(stock._id)} onMouseLeave={() => setHoveredRow(null)}>
                  <td>{stock.name || "Unknown"}</td>
                  <td>{stock.qty || 0}</td>
                  <td>{(stock.avg || 0).toFixed(2)}</td>
                  <td>{(stock.price || 0).toFixed(2)}</td>
                  <td>{curValue.toFixed(2)}</td>
                  <td className={isProfit ? "profit" : "loss"}>{profitLoss.toFixed(2)}</td>
                  <td className={isProfit ? "profit" : "loss"}>{stock.net || "0.00"}</td>
                  <td className={stock.isLoss ? "loss" : "profit"}>{stock.day || "0.00"}</td>
                  <td>
                    {hoveredRow === stock._id && (
                      <button className="sell-button" onClick={() => handleDelete(stock._id)}>Sell</button>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>₹{totalInvestment.toFixed(2)}</h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>₹{currentValue.toFixed(2)}</h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5>
            ₹{totalProfitLoss.toFixed(2)} (
            {totalInvestment > 0 ? ((totalProfitLoss / totalInvestment) * 100).toFixed(2) : "0.00"}%)
          </h5>
          <p>P&L</p>
        </div>
      </div>

      <VerticalGraph data={data} />
    </>
  );
};

export default Holdings;
