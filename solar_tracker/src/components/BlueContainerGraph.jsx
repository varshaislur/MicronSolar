import React, { useState } from "react";
import "./BlueContainerGraph.css"; // Create a CSS file specifically for this component

const BlueContainerGraph = ({ cards, selectedCard, setSelectedCard }) => {
  return (
    <div className="blueContainer">
      <div className="mainGraphtextContainer">
        <h1 className="mainGraphtext">Why Use a Solar Tracker?</h1>
      </div>
      <div className="cardsContainer">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`card ${selectedCard === card.id ? "selected" : ""}`}
            onClick={() => setSelectedCard(card.id)}
          >
            <h2>{card.title}</h2>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlueContainerGraph;
