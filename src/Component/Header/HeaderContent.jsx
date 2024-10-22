import React from "react";
import "./Header.css";
import { fadeIn } from "../../variant";
import { motion } from "framer-motion";
const HeaderContent = () => {
  return (
    <motion.div
      className="header__content"
      variants={fadeIn("up", 0.5)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.5 }}
    >
      <div className="header__contents">
        <h2>
          Welcome to <span>SoS</span>
        </h2>
        <div className="content__paragraph">
          The School of Science, Ile-Ife offers vibrant and holistic educational
          experience
        </div>
        <button>Take a tour</button>
      </div>
    </motion.div>
  );
};

export default HeaderContent;
