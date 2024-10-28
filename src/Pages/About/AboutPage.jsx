import React from 'react';
import PrincipalMessage from './PrincipalMessage';
import Choose from './Choose';
import AboutVision from './AboutVision';
import History from './History';
import Location from './Location';
import { motion, useScroll, useSpring } from "framer-motion";

const Aboutpage = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  return (
    <div>
       <motion.div
        className="progress-bar"
        style={{ scaleX }}
      />
       <PrincipalMessage/>
       <Choose/>
       <AboutVision/>
       <History/>
       <Location/>
    </div>
  )
}

export default Aboutpage
