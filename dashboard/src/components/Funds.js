import React from "react";
import { Link } from "react-router-dom";

const Funds = () => {
  return (
    <>
      <div className="funds">
        <p>Instant, zero-cost fund transfers with UPI</p>
        <Link to="/funds/add" className="btn btn-green">Add Funds</Link>
        <Link to="/funds/withdraw" className="btn btn-blue">Withdraw</Link>
      </div>

      <div className="row">
        <div className="col">
          <h3>Equity</h3>

          <table className="funds-table">
            <tbody>
              <tr>
                <td>Available Margin</td>
                <td className="imp colored">4,043.10</td>
              </tr>
              <tr>
                <td>Used Margin</td>
                <td className="imp">3,757.30</td>
              </tr>
              <tr>
                <td>Available Cash</td>
                <td className="imp">4,043.10</td>
              </tr>
              <tr>
                <td colSpan="2"><hr /></td>
              </tr>
              <tr>
                <td>Opening Balance</td>
                <td>4,043.10</td>
              </tr>
              <tr>
                <td>Previous Balance</td>
                <td>3,736.40</td>
              </tr>
              <tr>
                <td>Payin</td>
                <td>4,064.00</td>
              </tr>
              <tr>
                <td>SPAN</td>
                <td>0.00</td>
              </tr>
              <tr>
                <td>Delivery Margin</td>
                <td>0.00</td>
              </tr>
              <tr>
                <td>Exposure</td>
                <td>0.00</td>
              </tr>
              <tr>
                <td>Options Premium</td>
                <td>0.00</td>
              </tr>
              <tr>
                <td colSpan="2"><hr /></td>
              </tr>
              <tr>
                <td>Collateral (Liquid Funds)</td>
                <td>0.00</td>
              </tr>
              <tr>
                <td>Collateral (Equity)</td>
                <td>0.00</td>
              </tr>
              <tr>
                <td>Total Collateral</td>
                <td>0.00</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="col">
          <div className="commodity">
            <p>You don't have a commodity account</p>
            <Link to="/funds/open-account" className="btn btn-blue">Open Account</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Funds;
