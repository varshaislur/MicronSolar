import React from 'react'
import NavBar from '../components/NavBar'
import HeroSection from '../components/HeroSection'
import StatsSection from '../components/StatsSection'
import Graphsection from '../components/Graphsection'
import Footer from '../components/Footer'

const HomePage = () => {
  return (
    <div>
      <HeroSection/>
      <StatsSection/>
      <Graphsection/>
      <Footer/>


   
    </div>
  )
}

export default HomePage