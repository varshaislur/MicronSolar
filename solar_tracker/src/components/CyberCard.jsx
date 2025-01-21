import React from "react";
import "./CyberCard.css"; // Place your CSS in this file

const CyberCard = ({ title, subtitle, highlight, prompt, onHover }) => {
  return (
    <div className="container noselect" onMouseEnter={onHover}>
      <div className="canvas">
        <div id="card">
          <div className="card-content">
            <div className="card-glare"></div>
            <div className="cyber-lines">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <p id="prompt">{prompt || "HOVER ME"}</p>
            <div className="title">{title || "CYBER\nCARD"}</div>
            <div className="glowing-elements">
              <div className="glow-1"></div>
              <div className="glow-2"></div>
              <div className="glow-3"></div>
            </div>
            <div className="subtitle">
              <span>{subtitle || "INTERACTIVE"}</span>
              <span className="highlight">
                {highlight || "3D EFFECT"}
              </span>
            </div>
            <div className="card-particles">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="corner-elements">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="scan-line"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CyberCard;
