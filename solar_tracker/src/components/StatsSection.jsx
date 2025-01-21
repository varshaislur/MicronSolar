import React from "react";
import "./StatsSection.css";

const StatsSection = () => {
  return (
    <div className="stats-section">
      {/* Hero Text */}
      <div className="hero-text">
        <h1>
          Join thousands <br />
          of homeowners who <br />
          <span>are saving money and the planet</span> <br />
          with our cutting-edge <br />
          solar trackers.
        </h1>
      </div>
      <div className="space">
        

      </div>

      {/* Statistics */}
      <div className="stats-container">
        <div className="stat">
          <h2>20K<span>+</span></h2>
          <p>Projects</p>
        </div>
        <div className="stat">
          <h2>10Y<span>+</span></h2>
          <p>Experience</p>
        </div>
        
        <div className="stat">
          <h2>100K<span>+</span></h2>
          <p>Satisfied Clients</p>
        </div>
        <div className="stat">
          <h2>90%<span>+</span></h2>
          <p>Environmentally</p>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
