import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variant";
import "./HeaderPage.css";

export const ContactHeader = () => {
  const handleScroll = () => {
    const scrollToMessage = document.getElementById("forms")
    if(scrollToMessage) {
        scrollToMessage.scrollIntoView({ behavior: "smooth" })
    }
  }
  return (
    <motion.div
      className="headerPage__content"
      variants={fadeIn("down", 0.4)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.4 }}
    >
      <div className="headerPage__contents">
        <h1>CONTACT US</h1>
         <button className="contact" onClick={handleScroll}> Send a message</button>
      </div>
    </motion.div>
  );
};
