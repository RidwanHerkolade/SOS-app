import React from "react";
import "./Objective.css";
import { motion } from "framer-motion";
import { fadeIn } from "../../variant";
const Objective = () => {
  return (
    <motion.div
      variants={fadeIn("up", 0.4)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.5 }}
    >
      <div className="objective__div">
        <div className="objective__divs">
          <div className="objective__img">
            <img src="./slider.png" />
          </div>
          <div className="objective__content content-item">
            <h2>Objectives</h2>
            <small>Our primary objectives are:</small>
            <ul className="objectives__list">
              <li>
                <div className="obj__num">1</div>To train Nigerian and foreign
                students to be responsible, good citizens.
              </li>
              <li>
                <div className="obj__num">2</div>To provide adequate qualitative
                education for all and sundry at the secondary level.
              </li>
              <li>
                <div className="obj__num">3</div>To prepare the students
                comprehensively in science education, in order to activate them
                towards inclined knowledge in science and technology.
              </li>
              <li>
                <div className="obj__num">4</div>To prepare student to be
                self-reliant in the future, in order to be goal driven, have a
                positive purpose, direction and bearing towards a successful
                self-education after undergoing an all-round development.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default Objective;
