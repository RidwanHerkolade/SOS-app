import React from "react";
import "./Value.css";
import { motion } from "framer-motion";
import { fadeIn } from "../../variant";
const Value = () => {
  const valueImg = [
    {
      id: 1,
      img: "./science.png",
      name: "Science",
    },
    {
      id: 2,
      img: "./inventive.png",
      name: "Inventive",
    },
    {
      id: 3,
      img: "./noble.png",
      name: "Noble",
    },
    {
      id: 4,
      img: "./explore.png",
      name: "Explorative",
    },
  ];
  return (
    <motion.div
      className="values__div"
      variants={fadeIn("up", 0.4)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.5 }}
    >
      <div className="value__divs">
        <h2>our value</h2>
        <h1>
          Our values are at the heart of everything we do. Every member of The
          Science School Community is expected to uphold and support our shared
          values which is;
        </h1>
        <div className="value__img">
          {valueImg.map((value) => {
            return (
              <motion.div
                className="box"
                /**
                 * Setting the initial keyframe to "null" will use
                 * the current value to allow for interruptable keyframes.
                 */
                whileHover={{ scale: [null, 1.1, 1.1] }}
                transition={{ duration: 0.2 }}
              >
                <div className="value__images" key={value.id}>
                  <div className="val__img">
                    <img src={value.img} alt={value.name} />
                  </div>
                  <p>{value.name}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default Value;
