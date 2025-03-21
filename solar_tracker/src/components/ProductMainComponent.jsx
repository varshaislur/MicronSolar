import React, { useEffect, useState } from 'react';
import './ProductMainComponent.css';
import Tilt from 'react-parallax-tilt';
import product1 from '../assets/solarProduct1.jpg';
import product2 from '../assets/solarProduct2.jpg';
import product3 from '../assets/solarProduct3.jpg';
import AOS from "aos";
import "aos/dist/aos.css";

const ProductMainComponent = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Initialize AOS animations
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      mirror: true,
    });
    AOS.refresh();
    
    // Check if screen is mobile size
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // Initial check
    checkMobile();
    
    // Add listener for window resize
    window.addEventListener('resize', checkMobile);
    
    // Clean up
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="product-steps">
      <h2 className="title">Maximize your returns with our Products</h2>
      <div className="steps-container">
        {/* Step 1 */}
        {isMobile ? (
          <div className="step" data-aos="fade-up">
            <img
              src={product1}
              alt="Product 1"
              className="step-image"
            />
            <h3 className="step-number">1</h3>
            <h4 className="step-title">Automatic tracking</h4>
            <p className="step-description">
              Real-time adjustments to align with the sun's movement.
              Solar panel systems designed for maximum efficiency and sustainability.
            </p>
          </div>
        ) : (
          <Tilt>
            <div className="step" data-aos="flip-left">
              <img
                src={product1}
                alt="Product 1"
                className="step-image"
              />
              <h3 className="step-number">1</h3>
              <h4 className="step-title">Automatic tracking</h4>
              <p className="step-description">
                Real-time adjustments to align with the sun's movement.
                Solar panel systems designed for maximum efficiency and sustainability.
              </p>
            </div>
          </Tilt>
        )}

        {/* Step 2 */}
        {isMobile ? (
          <div className="step" data-aos="fade-up">
            <img
              src={product2}
              alt="Product 2"
              className="step-image"
            />
            <h3 className="step-number">2</h3>
            <h4 className="step-title">Inbuilt inclinometer</h4>
            <p className="step-description">
              Precise measurement of angles for accurate tracking.
              Seamless movement through actuators or VFD-controlled motors.
            </p>
          </div>
        ) : (
          <Tilt>
            <div className="step" data-aos="flip-left">
              <img
                src={product2}
                alt="Product 2"
                className="step-image"
              />
              <h3 className="step-number">2</h3>
              <h4 className="step-title">Inbuilt inclinometer</h4>
              <p className="step-description">
                Precise measurement of angles for accurate tracking.
                Seamless movement through actuators or VFD-controlled motors.
              </p>
            </div>
          </Tilt>
        )}

        {/* Step 3 */}
        {isMobile ? (
          <div className="step" data-aos="fade-up">
            <img
              src={product3}
              alt="Product 3"
              className="step-image"
            />
            <h3 className="step-number">3</h3>
            <h4 className="step-title">RS485 communication port</h4>
            <p className="step-description">
              Enables integration and monitoring in advanced systems.
              Clear indicators for forward, reverse, and error states.
            </p>
          </div>
        ) : (
          <Tilt>
            <div className="step" data-aos="flip-right">
              <img
                src={product3}
                alt="Product 3"
                className="step-image"
              />
              <h3 className="step-number">3</h3>
              <h4 className="step-title">RS485 communication port</h4>
              <p className="step-description">
                Enables integration and monitoring in advanced systems.
                Clear indicators for forward, reverse, and error states.
              </p>
            </div>
          </Tilt>
        )}
      </div>
    </div>
  );
};

export default ProductMainComponent;