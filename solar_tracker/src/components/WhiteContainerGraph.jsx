import React, { useEffect } from "react";
import "./WhiteContainerGraph.css"; // Create a CSS file specifically for this component
import SolarGraph from "./SolarGraph";
import AOS from "aos";
import "aos/dist/aos.css";

const WhiteContainer = ({ stats, highlightedCard, setHighlightedCard }) => {
   useEffect(() => {
      AOS.init({
        duration: 1000, // Animation duration in ms
        easing: "ease-in-out", // Easing for animations
        once: false, // Allow animation to trigger every time it enters the viewport
        mirror: true, // Reverse the animation when the element leaves the viewport
        
      });
      AOS.refresh();
    }, []);
  return (
    <div className="whiteContainer">
      <div data-aos="fade-right">
      <h2>Electricity production in India</h2>
      </div>
      <div data-aos="fade-left">
      <p>
        <strong>Solar Tracker Technology:</strong> Solar trackers enhance the efficiency of solar panels by following the sun's movement throughout the day, increasing energy generation by up to 25–35% compared to fixed solar panels. They are increasingly being adopted in India to maximize renewable energy production, especially in large-scale solar farms.
      </p>
      </div>

      <div className="statsRow">
        {stats.map((stat) => (
          <div
           data-aos="zoom-in"
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
        <SolarGraph/>
      </div>
    </div>
  );
};

export default WhiteContainer;
