import React from "react";
import "./Location.css";
const Location = () => {
  return (
    <div className="location__divs">
      <div className="location__div">
        <h1>Our Location</h1>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253141.0329905377!2d4.212457541309372!3d7.539091267988295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1038378384555555%3A0x1e09acb213bfb976!2sSchool%20of%20Science!5e0!3m2!1sen!2sng!4v1730124262927!5m2!1sen!2sng"
            width="100%"
            height="450"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
          ></iframe>
        </div>
        <div className="location__add">
          <div className="loca__add">
            <div className="address">
              <div className="address__dis">
                <div className="add__icon">
                  <img src="./location.png" alt="icons" />
                </div>
              </div>
              832 Thompson Drive, San Fransisco <br></br>CA 94107, United States
            </div>
            <div className="address">
              <div className="address__dis">
                <div className="add__icon">
                  <img src="./call.png" alt="icons" />
                </div>
              </div>
              +123 345123 556
            </div>
            <div className="address">
              <div className="address__dis">
                <div className="add__icon">
                  <img src="./msg.png" alt="icons" />
                </div>
              </div>
              support@sakola.id
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
