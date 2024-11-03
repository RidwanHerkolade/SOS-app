import React from "react";
import ContactForm from "./ContactForm";
import { motion, useScroll, useSpring } from "framer-motion";

export const Contact = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <div>
      <motion.div className="progress-bar" style={{ scaleX }} />
      <ContactForm />
    </div>
  );
};
