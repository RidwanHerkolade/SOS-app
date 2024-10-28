import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { AnimatePresence, motion } from "framer-motion";
import { links } from "./Links"; // Assuming your links are an array of objects
import "./Nav.css";

const Nav = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  const menuVars = {
    initial: { 
      scaleY: 0 
    },
    animate: { 
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0]
      }
    },
    exit: { 
      scaleY: 0,
      transition: { 
        duration: 0.5, 
        ease: [0.22, 1, 0.36, 1] 
      }
    }
  };

  return (
    <div className="nav__div">
      <nav>
        <div className="nav__logo">
          <img src="./Layer.png" alt="Logo" />
          <h1>SoS</h1>
        </div>

        <div className="menu" onClick={handleShow}>
          {show ? (
            <CloseIcon style={{ fontSize: "3rem" }} />
          ) : (
            <MenuIcon style={{ fontSize: "3rem" }} />
          )}
        </div>
        <div className="nav__list-desktop">
          {links.map((link) => (
            <Link to={link.pathName} key={link.title} className="links">
              {link.title}
            </Link>
          ))}
        </div>
        <AnimatePresence>
          {show && (
            <motion.div
              className="nav__list-mobile"
              variants={menuVars}
              initial="initial"
              animate="animate"
              exit="exit"
              style={{ transformOrigin: "top" }} // Fix scaling origin
            >
              {links.map((link) => (
                <Link to={link.pathName} key={link.title} className="links">
                  {link.title}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <div className="search">
          <div className="search__call">
            <img src="./phonecall.png" alt="Call Icon" />
            +2347032778286
          </div>
          <div className="search__input">
            <img src="./circle.png" alt="Search Icon" />
            <input type="text" />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
