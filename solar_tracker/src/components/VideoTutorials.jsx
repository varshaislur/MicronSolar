import React from "react";
import "./VideoTutorials.css";

const VideoSection = () => {
  const content = [
    { id: 1, type: "video", src: "https://youtube.com/embed/PbU5_B9QIZA", description: "Learn how to install a solar tracker system step by step! This video covers everything from mounting the tracker to wiring the system for maximum efficiency. Whether you're setting up a single-axis or dual-axis tracker, this guide ensures a smooth installation." },
    { id: 2, type: "video", src: "https://www.youtube.com/embed/t6yAfTz_GwY", description: "Want to improve your solar panel efficiency? This DIY solar tracker installation tutorial walks you through the process, making it easy for homeowners and businesses to install and optimize their solar power systems." },
    { id: 3, type: "video", src: "https://www.youtube.com/embed/5ssCoT7FEiM", description: "See a real-world solar tracker installation in action! This field demonstration follows a professional team as they install a large-scale solar tracking system, explaining the process along the way." },
  ];

  return (
    <div className="video-section">
      <h2 className="video-section-title">Explore Our Video Content</h2>
      <div className="video-container">
        {content.map((item) => (
          <div key={item.id} className="video-block">
            <iframe
              src={item.src}
              title={`Video ${item.id}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="video-frame"
            ></iframe>
            <div className="description-block">
              <p className="description-text">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoSection;
