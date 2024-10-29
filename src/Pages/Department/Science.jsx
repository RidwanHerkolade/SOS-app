import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variant";

const Science = () => {
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
          {/* <h2>About <span>SoS</span></h2> */}
          <div className="aboutsos__contents">
            <h1>SCIENCE</h1>
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
                Mathematics
              </li>
              <li>
                <div className="span__img">
                  <img className="span__img" src="./Group.png" />
                </div>
                Physics
              </li>
              <li>
                <div className="span__img">
                  <img className="span__img" src="./Group.png" />
                </div>
                Chemistry
              </li>
              <li>
                <div className="span__img">
                  <img className="span__img" src="./Group.png" />
                </div>
                Biology
              </li>
              <li>
                <div className="span__img">
                  <img className="span__img" src="./Group.png" />
                </div>
                Agricultural Science
              </li>
              <li>
                <div className="span__img">
                  <img className="span__img" src="./Group.png" />
                </div>
                ICT
              </li>
              <li>
                <div className="span__img">
                  <img className="span__img" src="./Group.png" />
                </div>
                Food And Nutrition
              </li>
              <li>
                <div className="span__img">
                  <img className="span__img" src="./Group.png" />
                </div>
                Creative Craft Practices
              </li>
              <li>
                <div className="span__img">
                  <img className="span__img" src="./Group.png" />
                </div>
                Animal Husbandry
              </li>
            </ul>

            {/* <div className="button">
              <button className="active">Read More</button>
              <button className="un-active">Enroll</button>
            </div> */}
          </div>
        </div>
        <div className="about__sos">
          <div>
            <div className="aboutsos__image">
              <img src="./image.png" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Science;
