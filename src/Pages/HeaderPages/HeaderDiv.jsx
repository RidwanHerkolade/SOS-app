import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variant";
const HeaderDiv = () => {
  return (
    <motion.div
      className="headerPage__content"
      variants={fadeIn("down", 0.4)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.4 }}
    >
      <div className="headerPage__contents">
        <h1>Welcome to SOS Ile-Ife</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="watch">Watch video</div>
      </div>
    </motion.div>
  );
};

export default HeaderDiv;
