import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "../../variant";
import "./Footer.css";
const Footer = () => {
  return (
    <motion.div
      className="footer__div"
      variants={fadeIn("up", 0.4)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.4 }}
    >
      <footer>
        <div className="footer__header">
          <div className="footer__img">
            <img src="./Layer.png" />
          </div>

          <h1>School of Science, Ile-Ife </h1>
        </div>
        <div className="footer__para">
          <div className="footer__p">
            We recognize the significance of science in our daily life hence the
            need to adopt a problem solving hands-on approach{" "}
          </div>
          <div className="footer__social">
            <label>Follow us</label>
            <div className="footer__socials">
              <Link to="/">
                <img src="./Vector.png" />
              </Link>
              <Link to="/">
                <img src="./social03.png" />
              </Link>
              <Link to="/">
                <img src="./social02.png" />
              </Link>
              <Link to="/">
                <img src="./social04.png" />
              </Link>
              <Link to="/">
                <img src="./social05.png" />
              </Link>
            </div>
          </div>
        </div>
        <div className="footer__contents">
          <p className="footer__name">
            Osun State School of Science, Ife-Ijesa Zone, Ondo Road, Ile-Ife
            Osun State.
          </p>
          <div>+123 345123 556</div>
          <div className="footer__email">schoolofscienceileife@gmail.com</div>
        </div>
      </footer>
    </motion.div>
  );
};

export default Footer;
