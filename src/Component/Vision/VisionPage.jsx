import React from "react";
import "./VisionPage.css"
const VisionPage = () => {
  const visionImages = [
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
      img: "./Rectangle3.png",
    },
    {
      id: 4,
      img: "./Rectangle4.png",
    },
  ];
  return (
    <div className="vision__divs">
      <div className="vision__divsss">
        <div className="vision__content">
          <div className="vision__highlight">
            <h1>Vision Statement</h1>
            <p>
              Our vision is to NURTURE and RAISE inventive and research-focused
              Scientists, giving them a better tomorrow, for the benefit of
              mankind.
            </p>
          </div>
          <div className="mission__highlight">
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
          {visionImages.map((imageData) => {
            return (
              <div className="vision__img" key={imageData.id}>
                <img src={imageData.img} alt={imageData.name} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default VisionPage;
