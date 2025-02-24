import React, { useEffect } from 'react';
import { FaFilePdf } from 'react-icons/fa';
import pdf1 from "../assets/solarpdf1.pdf";
import pdf2 from "../assets/solarpdf2.pdf";
import pdf3 from "../assets/solarpdf3.pdf";
import './PdfComponent.css';
import AOS from "aos";
import "aos/dist/aos.css";

function PdfComponent() {
     useEffect(() => {
                AOS.init({
                  duration: 1000, // Animation duration in ms
                  easing: "ease-in-out", // Easing for animations
                  once: false, // Allow animation to trigger every time it enters the viewport
                  mirror: true, // Reverse the animation when the element leaves the viewport
                  
                });
                AOS.refresh();
              }, []);
    const handleDownload = (pdfFile, fileName) => {
        const link = document.createElement('a');
        link.href = pdfFile;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="pdf-wrapper" >
            <h2 className="pdf-title" >User Manuals</h2>
            <h4 className="sub-title" >click to download</h4>
            <div className="pdf-container" data-aos="zoom-in">
                <div className="pdf-item" onClick={() => handleDownload(pdf1, 'Solar_Tracker_Manual_1.pdf')}>
                    <FaFilePdf className="pdf-icon" />
                    <p className="pdf-text">Manual 1</p>
                </div>
                <div className="pdf-item" onClick={() => handleDownload(pdf2, 'Solar_Tracker_Manual_2.pdf')}>
                    <FaFilePdf className="pdf-icon" />
                    <p className="pdf-text">Manual 2</p>
                </div>
                <div className="pdf-item" onClick={() => handleDownload(pdf3, 'Solar_Tracker_Manual_3.pdf')}>
                    <FaFilePdf className="pdf-icon" />
                    <p className="pdf-text">Manual 3</p>
                </div>
            </div>
        </div>
    );
}

export default PdfComponent;
