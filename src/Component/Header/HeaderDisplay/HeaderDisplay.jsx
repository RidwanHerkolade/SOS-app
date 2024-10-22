import React from "react";
import "./HeaderDisplay.css"

const HeaderDisplay = () => {
  const contents = [
    {
      name: "Education",
      description:
        "The School of Science, Ile-Ife offers vibrant and holistic educational experience",
      image: "./bag.png",
    },
    {
      name: "Teaching and Learning",
      description:
        "Teaching and Learning are at the heart of our School, we aim to equip students with the necessary knowledge and character.",
      image: "./cap.png",
    },
    {
      name: "Discovery",
      description:
        "Research is at the core of what we do and our team are always ready to discover new things.",
      image: "./school.png",
    },
  ];
  return (
    <div className="headerdisplay__div">
      <div className="display__divs">
        {contents.map((data) => {
          return (
            <div className="content__divs">
              <div className="img">
                <img src={data.image} alt={data.name} />
              </div>
              <div className="content__paragraph">
                <h3>{data.name}</h3>
                <p>{data.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HeaderDisplay;
