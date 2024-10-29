import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variant";
import "./HeaderPage.css";

export const AdmissionContent = () => {
  return (
    <motion.div
      className="headerPage__content"
      variants={fadeIn("down", 0.4)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.4 }}
    >
      <div className="headerPage__contents">
        <h1>SCHOOL OF SCIENCE DEPARTMENTS</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </motion.div>
  );
};
