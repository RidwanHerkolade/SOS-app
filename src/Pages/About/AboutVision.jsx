import React from 'react'
import "./AboutVision.css"

const AboutVision = () => {
    const AboutVisionImages = [
        {
          id: 1,
          img: "./Rectangle1.png",
        },
        {
          id: 2,
          img: "./Rectangle2.png",
        },
        {
          id: 3,
          img: "./placeholder3.png",
        },
      ];
  return (
    <div className="Aboutvision__divs">
    <div className="Aboutvision__divsss">
      <div className="vision__content">
        <div className="Aboutvision__highlight">
          <h1>Vision Statement</h1>
          <p>
            Our vision is to NURTURE and RAISE inventive and research-focused
            Scientists, giving them a better tomorrow, for the benefit of
            mankind.
          </p>
        </div>
        <div className="Aboutmission__highlight">
          <h1>Mission Statement</h1>
          <p>
            Our mission is to equip students with the necessary knowledge and
            character needed to become leaders that are productive, acceptable
            to the society and with in-depth analytical temperament, prepared
            for responsible service to humanity.
          </p>
        </div>
      </div>
      <div className="vision__images">
        {AboutVisionImages.map((imageData) => {
          return (
            <div className="vision__img" key={imageData.id}>
              <img src={imageData.img} alt={imageData.name} />
            </div>
          );
        })}
      </div>
    </div>
  </div>
  )
}

export default AboutVision
