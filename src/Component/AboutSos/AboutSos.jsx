import React from "react";
import "./AboutSos.css"
import { motion, useTime, useTransform } from "framer-motion";

const AboutSos = () => {
  const time = useTime();
  const rotate = useTransform(time, [0, 10000], [90, 180], { clamp: false });
  return (
    <div className="aboutsos__div">
      <div className="aboutsos__divs ">
        <div className="aboutsos__content">
          <h2>About <span>SoS</span></h2>
          <div className="aboutsos__contents">
            <h1>
              At The Science of School, Ile-Ife, we recognize the significance
              of science in our daily life
            </h1>
            <p>
              Hence the need to adopt a problem solving hands-on approach that
              allows our students to observe and evaluate the authenticity of
              scientific information and investigation through critical thinking
              skills using oral, visual and written means.
              <span>At S.O.S, we encourage and ensure that our students;</span>
            </p>
            <ul className="content__link">
              <li>
                <div className="span__img"><img  src="./Group.png"/></div>Believe in themselves
              </li>
              <li>
                <div className="span__img"><img className="span__img" src="./Group.png"/></div>Encourage and support each other at all times
              </li>
              <li>
                <div className="span__img"><img className="span__img" src="./Group.png"/></div>Are polite and respect people for who they are
              </li>
              <li>
                <div className="span__img"><img className="span__img" src="./Group.png"/></div>Embrace diversity and celebrate our differences
              </li>
            </ul>

            <div className="button">
              <button className="active">Read More</button>
              <button className="un-active">Enroll</button>
            </div>
          </div>
        </div>
        <div className="about__sos">
        <motion.div style={{rotate}}>
        <div className="aboutsos__image">
            <img src="./aboutsos.png"/>
        </div>
        </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutSos;
