import React from "react";
import "./VideoTutorials.css";

const VideoSection = () => {
  const content = [
    { id: 1, type: "video", src: "https://youtube.com/embed/PbU5_B9QIZA", description: "Video description for video 1" },
    { id: 2, type: "video", src: "https://www.youtube.com/embed/t6yAfTz_GwY", description: "Video description for video 2" },
    { id: 3, type: "video", src: "https://www.youtube.com/embed/5ssCoT7FEiM", description: "Video description for video 3" },
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
