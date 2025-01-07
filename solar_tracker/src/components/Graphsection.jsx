import React, { useState } from "react";
import "./GraphSection.css"; // Import the CSS file

const Graphsection = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [highlightedCard, setHighlightedCard] = useState(null);

  const stats = [
    { id: 1, value: "$24,8k", label: "Total Utilization Rate" },
    { id: 2, value: "$14,4k", label: "Maintenance Costs" },
    { id: 3, value: "$12,3k", label: "Electricity Bills" },
    { id: 4, value: "$8,8k", label: "Carbon Reduction" },
  ];

  const cards = [
    {
      id: 1,
      title: "A Responsible Corporate",
      description: "Save on your electricity bills, reduce your carbon footprint and increase the value of your home.",
    },
    {
      id: 2,
      title: "Utility-Scale Solution",
      description: "Own a solar power plant, procure solar contracts or offer solar directly to your customers with a solid business partner.",
    },
    {
      id: 3,
      title: "Commercial Solution",
      description: "Make the smart investment and choose solar for your business. Lock in energy rates, demonstrate corporate social responsibility.",
    },
  ];

  return (
    <div className="mainContainer">
  <div className="mainGraphtextContainer">
    <h1 className="mainGraphtext">A Responsible Corporate Customers</h1>
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

  {/* White Container Section */}
  <div className="bottomWhiteContainer">
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
    </div>
  );
};
export default Graphsection;
