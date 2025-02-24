import React, { useEffect } from "react";
import "./StatsSection.css";
import AOS from "aos";
import "aos/dist/aos.css";

const StatsSection = () => {
  // Initialize AOS
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
    <div className="stats-section">
      {/* Hero Text */}
      <div className="hero-text" data-aos="fade-right">
        <h1>
          Join thousands <br />
          of homeowners who <br />
          <span>are saving money and the planet</span> <br />
          with our cutting-edge <br />
          solar trackers.
        </h1>
      </div>
      <div className="space"></div>

      {/* Statistics */}
      <div className="stats-container">
        <div className="stat" data-aos="fade-up">
          <h2>100<span>+</span></h2>
          <p>Projects</p>
        </div>
        <div className="stat" data-aos="fade-up" data-aos-delay="100">
          <h2>20Y<span>+</span></h2>
          <p>Experience</p>
        </div>
        <div className="stat" data-aos="fade-up" data-aos-delay="200">
          <h2>2K<span>+</span></h2>
          <p>Satisfied Clients</p>
        </div>
        <div className="stat" data-aos="fade-up" data-aos-delay="300">
          <h2>90%<span></span></h2>
          <p>Environmentally Sustainable</p>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
