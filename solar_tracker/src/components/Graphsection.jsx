import React, { useState } from "react";
import BlueContainer from "./BlueContainerGraph";
import WhiteContainer from "./WhiteContainerGraph";
import "./GraphSection.css";

const GraphSection = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [highlightedCard, setHighlightedCard] = useState(null);

  const stats = [
    { id: 1, value: "₹22.8k", label: "Total Utilization Rate (with Solar Tracker)" },
    { id: 2, value: "₹12.4k", label: "Maintenance Costs (Optimized with Advanced Trackers)" },
    { id: 3, value: "₹10.7k", label: "Reduced Electricity Bills" },
    { id: 4, value: "₹8.9k", label: "Higher Carbon Reduction" },
  ];

  const cards = [
    {
      id: 1,
      title: "A Responsible Corporate",
      description:
        "Save on your electricity bills, reduce your carbon footprint and increase the value of your home.",
    },
    {
      id: 2,
      title: "Utility-Scale Solution",
      description:
        "Own a solar power plant, procure solar contracts or offer solar directly to your customers with a solid business partner.",
    },
    {
      id: 3,
      title: "Commercial Solution",
      description:
        "Make the smart investment and choose solar for your business. Lock in energy rates, demonstrate corporate social responsibility.",
    },
  ];

  return (
    <div className="mainContainer">
      <WhiteContainer
        stats={stats}
        highlightedCard={highlightedCard}
        setHighlightedCard={setHighlightedCard}
      />
      <BlueContainer
        cards={cards}
        selectedCard={selectedCard}
        setSelectedCard={setSelectedCard}
      />
    </div>
  );
};

export default GraphSection;
