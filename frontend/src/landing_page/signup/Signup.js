import React, { useState } from "react";

function Signup() {
  const [mobile, setMobile] = useState("");

  const handleOTP = () => {
    if (mobile.length === 10 && !isNaN(mobile)) {
      alert(`OTP sent to ${mobile}`);
    } else {
      alert("Please enter a valid 10-digit mobile number.");
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-primary text-center">Signup Page</h2>
      <p className="text-muted text-center">Open a free demat and trading account online.</p>
      <div className="card p-4 shadow-sm border rounded border-light">
        <input
          type="text"
          className="form-control mt-3 border-secondary"
          placeholder="Enter your mobile number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
        <button className="btn btn-primary mt-3 w-100 fw-bold" onClick={handleOTP}>
          Get OTP
        </button>
      </div>
      <p className="mt-3 text-center">
        By proceeding, you agree to the <a href="#" className="text-decoration-none text-primary">Zerodha terms & privacy policy</a>
      </p>
      
      <div className="container mt-5">
        <h2 className="text-center text-dark">Explore different account types</h2>
        <div className="row mt-4">
          {["Individual Account", "HUF Account", "NRI Account", "Minor Account", "Corporate / LLP/ Partnership"].map((account, index) => (
            <div className="col-md-4 mb-3" key={index}>
              <div className="card shadow-sm p-3 border rounded border-light">
                <h5 className="fw-bold text-info">{account}</h5>
                <p className="text-muted">Short description of {account}.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="container mt-5">
        <h2 className="text-center text-dark">FAQs</h2>
        <div className="accordion border rounded border-light p-3" id="faqAccordion">
          {["What is a Zerodha account?", "What documents are required to open a demat account?", "Is Zerodha account opening free?", "Are there any maintenance charges for a demat account?", "Can I open a demat account without a bank account?"].map((question, index) => (
            <div className="accordion-item border-light" key={index}>
              <h2 className="accordion-header" id={`heading${index}`}>
                <button
                  className="accordion-button collapsed text-primary"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${index}`}
                  aria-expanded="false"
                  aria-controls={`collapse${index}`}
                >
                  {question}
                </button>
              </h2>
              <div
                id={`collapse${index}`}
                className="accordion-collapse collapse"
                aria-labelledby={`heading${index}`}
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body text-muted">Answer for {question} goes here.</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Signup;
