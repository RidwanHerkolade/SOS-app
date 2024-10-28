import React from "react";
import Nav from "../../Component/Nav/Nav";
import { useLocation } from "react-router-dom";
import "./HeaderPage.css";
import HeaderDiv from "./HeaderDiv";
const HeaderPages = () => {
  const location = useLocation(); // Get current location
  if (location.pathname === "/") {
    return null;
  }
  return (
    <div className="header__pages">
      <div className="overlay">
        <header>
          <Nav />
          <HeaderDiv />
        </header>
      </div>
    </div>
  );
};

export default HeaderPages;
