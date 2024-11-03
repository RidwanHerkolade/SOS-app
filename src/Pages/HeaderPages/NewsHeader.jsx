import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variant";
import "./HeaderPageRout.css"
const NewsHeader = () => {
  return (
    <motion.div
      className="headerPage__content"
      variants={fadeIn("down", 0.4)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.4 }}
    >
      <div className="headerPage__contents">
        <h1>Latest News</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </motion.div>
  );
};

export default NewsHeader;
