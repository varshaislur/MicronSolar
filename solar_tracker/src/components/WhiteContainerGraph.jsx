import React from "react";
import "./WhiteContainerGraph.css"; // Create a CSS file specifically for this component

const WhiteContainer = ({ stats, highlightedCard, setHighlightedCard }) => {
  return (
    <div className="whiteContainer">
      <h2>Electricity production in Australia</h2>
      <p>
        <strong>Solar Panel Energy:</strong> Renewable energy continues to
        contribute an increasing supply of Australia's electricity needs. In
        2020, 22.5% of Australia’s electricity came from renewable sources.
      </p>

      <div className="statsRow">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className={`statBox ${
              highlightedCard === stat.id ? "highlighted" : ""
            }`}
            onClick={() => setHighlightedCard(stat.id)}
          >
            <h3>{stat.value}</h3>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhiteContainer;
