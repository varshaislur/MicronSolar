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
      title: "Increase Energy Output & Cost Savings",
      description:
        "Businesses can generate up to 40% more solar energy, reducing electricity expenses and operational costs. A higher energy yield ensures better ROI on solar investments.",
    },
    {
      id: 2,
      title: "Enhance Corporate Sustainability",
      description:
        "Adopting solar trackers showcases environmental responsibility, helping companies meet ESG (Environmental, Social, and Governance) goals while reducing their carbon footprint.",
    },
    {
      id: 3,
      title: " Reliable & Scalable for Large-Scale Operations",
      description:
        "Solar trackers provide consistent and optimized energy production, making them ideal for corporate offices, manufacturing units, and industrial solar farms.",
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
