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
          <h4 className="step-title">Solar Energy Solutions</h4>
          <p className="step-description">
            Explore innovative solar panel systems designed for maximum efficiency and sustainability.
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
          <h4 className="step-title">Wind Energy Solutions</h4>
          <p className="step-description">
            Discover advanced wind energy systems that drive clean energy for your business.
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
          <h4 className="step-title">Energy Storage</h4>
          <p className="step-description">
            Store your energy efficiently with cutting-edge storage technologies for a sustainable future.
          </p>
        </div>
        </Tilt>
      </div>
    </div>

  );
};

export default ProductMainComponent;
