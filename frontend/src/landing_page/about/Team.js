import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5 border-top">
        <h1 className="text-center ">People</h1>
      </div>

      <div
        className="row p-3 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-3 text-center">
          <img
            src="media\images\Hs.jpg"
            style={{ borderRadius: "100%", width: "40%" }}
          />
          <h4 className="mt-5">Harsh Kumar</h4>
          <h6>Founder, CEO</h6>
        </div>
        <div className="col-6 p-3">
          <p>
            Harsh bootstrapped and founded Zerodha Clone in 2025 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on <a href="https://www.linkedin.com/in/harsh-kumar-7725472a0">Linkedin</a> 
            
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;