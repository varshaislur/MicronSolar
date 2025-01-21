import React from 'react';
import './ProductMainComponent.css';
import Tilt from 'react-parallax-tilt';
import product1 from '../assets/solarProduct1.jpg'
import product2 from '../assets/solarProduct2.jpg'
import product3 from '../assets/solarProduct3.jpg'

const ProductMainComponent = () => {
  return (
 
    <div className="product-steps">
      <h2 className="title">Maximize your returns with our Products</h2>
      <div className="steps-container">
        {/* Step 1 */}
      <Tilt>
        <div className="step">
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
        <div className="step">
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
        <div className="step">
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
