import React, { useEffect } from "react";
import "./AboutPageFirst.css";
import working1 from "../assets/workingPhoto1.jpg"
import AOS from "aos";
import "aos/dist/aos.css";

const AboutPageFirst = () => {
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
        <div className="aboutContainer">
            <div className="aboutus" data-aos="zoom-in">
                {/* <h4 className="subtitle1">How It Started</h4> */}

                <h1 className="title1">About us</h1>
                <p className="description">
                    At MicronSolar, we are committed to revolutionizing the renewable energy landscape with cutting-edge solar tracking technology. As a forward-thinking company dedicated to sustainability, we specialize in designing and manufacturing high-efficiency solar tracking systems that optimize energy production, reduce costs, and contribute to a greener planet.
                    <br />
                    Our mission is to make solar energy more efficient, accessible, and cost-effective by leveraging advanced engineering and smart technology. We strive to empower businesses, utilities, and residential users with innovative solar tracking solutions that maximize sunlight capture and significantly improve energy yield compared to fixed solar panel systems.
                </p>
                {/* <h1 className="title1">Our Mission</h1>
                <p className="description">
                Our mission is to make solar energy more efficient, accessible, and cost-effective by leveraging advanced engineering and smart technology. We strive to empower businesses, utilities, and residential users with innovative solar tracking solutions that maximize sunlight capture and significantly improve energy yield compared to fixed solar panel systems.    </p>
                <h1 className="title1">Who We Are</h1>
                <p className="description">
                Our mission is to make solar energy more efficient, accessible, and cost-effective by leveraging advanced engineering and smart technology. We strive to empower businesses, utilities, and residential users with innovative solar tracking solutions that maximize sunlight capture and significantly improve energy yield compared to fixed solar panel systems.    </p>
            */}
            </div>
            
            <div className="pictureandstats">
                <div className="picture" data-aos="zoom-in">
                    <img src={working1} alt="Mentor and student working together" />
                </div>
                <div className="stats" data-aos="zoom-in">
                    <div className="stat-item">
                        <h2>20</h2>
                        <p>Years Experience</p>
                    </div>
                    <div className="stat-item">
                        <h2>23</h2>
                        <p>Project Challenge</p>
                    </div>
                    <div className="stat-item">
                        <h2>830+</h2>
                        <p>Positive Reviews</p>
                    </div>
                    <div className="stat-item">
                        <h2>100+</h2>
                        <p>Trusted Customers</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPageFirst;
