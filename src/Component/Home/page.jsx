import React from 'react'
import Header from '../Header/Header'
import AboutSos from '../AboutSos/AboutSos'
import VisionPage from '../Vision/VisionPage'
import Objective from '../Objectives/Objective'
import Value from '../Value/Value'
import LatestNews from '../LatestNews/LatestNews'
// import GetInfo from '../GetInfo/GetInfo'
// import Footer from '../Footer/Footer'
// import FooterBottom from '../Footer/FooterBottom'
import "./HomePage.css"
import { motion, useScroll, useSpring } from "framer-motion";

const HomePage = () => {
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
      <Header/>
      
      <AboutSos/>
      <VisionPage/>
      <Objective/>
      <Value/>
      <LatestNews/>

   
    </div>
  )
}

export default HomePage