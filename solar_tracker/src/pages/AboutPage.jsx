import React from 'react'
import CyberCard from '../components/CyberCard'
import AboutPageFirst from '../components/AboutPageFirst'
import PdfComponent from '../components/PdfComponent'
import PdfViewer from '../components/PdfComponent'

const AboutPage = () => {
  return (
    <div>
      <AboutPageFirst/>
      <PdfViewer pdfUrl="../assets/SPIT Hackathon 2025 Problem Statements.pdf"/>

    </div>
  )
}

export default AboutPage