import React, { useEffect } from 'react';
import './ProductMainComponent.css';
import Tilt from 'react-parallax-tilt';
import product1 from '../assets/solarProduct1.jpg'
import product2 from '../assets/solarProduct2.jpg'
import product3 from '../assets/solarProduct3.jpg'
import AOS from "aos";
import "aos/dist/aos.css";

const ProductMainComponent = () => {
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
 
    <div className="product-steps" >
      <h2 className="title">Maximize your returns with our Products</h2>
      <div className="steps-container">
        {/* Step 1 */}
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

        {/* Step 2 */}
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

        {/* Step 3 */}
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
      </div>
    </div>

  );
};

export default ProductMainComponent;
