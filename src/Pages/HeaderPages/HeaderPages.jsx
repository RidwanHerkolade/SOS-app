import React from "react";
import Nav from "../../Component/Nav/Nav";
import { useLocation } from "react-router-dom";
import "./HeaderPages.css";
import HeaderDiv from "./HeaderDiv";
import { AdmissionContent } from "./AdmissionContent";
import NewsHeader from "./NewsHeader";

const HeaderPages = () => {
  const location = useLocation(); 
  const getHeaderComponent = () => {
    switch (location.pathname) {
      case "/aboutpage":
        return <HeaderDiv />;
      case "/admissionpage":
        return <AdmissionContent/>;
        case "/news":
        return <NewsHeader/>;
      default:
        return null; 
    }
  };
  if (location.pathname === "/") {
    return null;
  }
  return (
    <div className="header__pages">
      <div className="overlay">
        <header>
          <Nav />
          {getHeaderComponent()}
        </header>
      </div>
    </div>
  );
};

export default HeaderPages;
