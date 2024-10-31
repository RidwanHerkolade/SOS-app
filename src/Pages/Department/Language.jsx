import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variant";
const Language = () => {
  return (
    <motion.div
      className="aboutsos__div"
      variants={fadeIn("down", 0.4)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.4 }}
    >
      <div className="aboutsos__divs ">
        <div className="aboutsos__content">
          <div className="aboutsos__contents">
            <h1>Language</h1>
            <p>
              Hence the need to adopt a problem solving hands-on approach that
              allows our students to observe and evaluate the authenticity of
              scientific information and investigation through critical thinking
              skills using oral, visual and written means.
              {/* <span>At S.O.S, we encourage and ensure that our students;</span> */}
            </p>
            <ul className="content__link">
              <li>
                <div className="span__img">
                  <img src="./Group.png" />
                </div>
                English Language
              </li>
              <li>
                <div className="span__img">
                  <img className="span__img" src="./Group.png" />
                </div>
                Yoruba Language
              </li>
            </ul>
          </div>
        </div>
        <div className="abouts__sos">
          <div>
            <div className="aboutssos__image">
              <img src="./rightSide.png" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Language;
