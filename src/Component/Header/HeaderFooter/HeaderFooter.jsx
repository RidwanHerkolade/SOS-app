import React from "react";
import { HeaderFooterData } from "./HeaderFooterData";
import { Link } from "react-router-dom";
import "./HeaderFooter.css";

const HeaderFooter = () => {
  return (
    <div className="headerfooter__div">
      <div className="headerfooter__divs">
        <div className="event">
          upcoming event
          <div className="arrow__img">
            <img src="./arrowleft.png" />
            <img src="./arrowRight.png" />
          </div>
        </div>
        <div className="event__calender">
          {HeaderFooterData.map((data) => {
            return (
              <div className="event__content">
                <Link to="/ " className="link__date">
                  {data.date} <span>{data.span}</span>
                </Link>
                <div className="event__calenders">
                  <h2>{data.name}</h2>
                  <p>{data.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HeaderFooter;
