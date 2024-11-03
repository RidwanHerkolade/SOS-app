import React from "react";
import Science from "./Science";
import SocialScience from "./SocialScience";
import Language from "./Language";
import { motion, useScroll, useSpring } from "framer-motion";
const DepartmentPage = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <div>
      <motion.div className="progress-bar" style={{ scaleX }} />
      <Science />
      <SocialScience />
      <Language />
    </div>
  );
};

export default DepartmentPage;
