import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variant";

const SocialScience = () => {
  return (
    <motion.div
      className="aboutsos__div"
      variants={fadeIn("down", 0.4)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.4 }}
    >
      <div className="aboutsos__divs ">
      <div className="abouts__sos">
          <div>
            <div className="aboutssos__image">
              <img src="./righSide.png" />
            </div>
          </div>
        </div>
        <div className="aboutsos__content">
          <div className="aboutsos__contents">
            <h1>Social Science</h1>
            <p>
              Hence the need to adopt a problem solving hands-on approach that
              allows our students to observe and evaluate the authenticity of
              socail information and investigation through art and critical thinking
              skills using oral, visual and written means.
              {/* <span>At S.O.S, we encourage and ensure that our students;</span> */}
            </p>
            <ul className="content__link">
              <li>
                <div className="span__img">
                  <img src="./Group.png" />
                </div>
                Geography
              </li>
              <li>
                <div className="span__img">
                  <img className="span__img" src="./Group.png" />
                </div>
                Civic Education
              </li>
              <li>
                <div className="span__img">
                  <img className="span__img" src="./Group.png" />
                </div>
                Economics
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SocialScience;
