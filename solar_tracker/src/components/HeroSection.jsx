import React, { useEffect } from 'react'
import solar2 from "../assets/solar3.jpg"
import "./HeroSection.css"; 
import AOS from "aos";
import "aos/dist/aos.css";

const HeroSection = () => {

 
  return (
    <div  className='mainSolarImagediv'>
        <img src={solar2} alt="solar2" className='mainSolarImage'/>
        <div className="heroText" >
        <h1>Welcome to Micron Solar</h1>
        <p>Innovative Solar Solutions for a Brighter Tomorrow</p>
      </div>
    </div>

  )
}

export default HeroSection