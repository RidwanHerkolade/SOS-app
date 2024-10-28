import React from "react";
import "./Choose.css";
import { motion } from "framer-motion";
import { fadeIn } from "../../variant";
const Choose = () => {
  const chooseData = [
    {
      title: "Empower",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "./vector1.png",
    },
    {
      title: "Engage",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "./Vector2.png",
    },
    {
      title: "Clean",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "./vector3.png",
    },
    {
      title: "graduation",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "./icon.png",
    },
    {
      title: "Awarding",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "./vector3.png",
    },
    {
      title: "Favorite",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "./vector3.png",
    },
  ];
  return (
    <motion.div
      className="choose__div"
      variants={fadeIn("up", 0.4)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.4 }}
    >
      <div className="choose__divs">
        <h1>Why Choose Us</h1>
        <p className="p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
        <div className="choose__grid">
          {chooseData.map((data) => {
            return (
              <motion.div
                className="choose__grids"
                key={data.name}
                whileHover={{ scale: [null, 1.1, 1.1] }}
                transition={{ duration: 0.3 }}
              >
                <div className="choose__img">
                  <img src={data.image} alt="data.title" />
                </div>
                <h1>{data.title}</h1>
                <p>{data.content}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};
export default Choose;
