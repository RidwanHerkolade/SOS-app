import React from "react";
import "./History.css"
import HistorySlide from "./HistorySlide";

const History = () => {
  return (
    <div className="history__divs">
      <div className="history__div">
        <div className="history__content">
          <h1>Our History</h1>
          <p>
            Osun State School of Science, Ondo road, Ile-Ife, is one of the
            first three Schools of Science established by the Old Oyo state
            Government in March 1990.<br></br>
            <br></br> The School occupies the site of the defunct Oyo state
            College of Arts and Science situated along Ondo Road on the ancient
            city of Ile-Ife in Ife-Ijesa Zone of the state.
            <br></br>
            <br></br>
            The school is a co-educational institution that runs a senior
            education programme only with the primary objective of training
            Nigerian and foreign students to be responsible and good citizens
            and to provide adequate and qualitative education for all and sundry
            at the secondary level. <br></br>
            <br></br> Another basic aim is to prepare the students
            comprehensively in science education only in order to activate them
            towards inclined knowledge in science and technology. With this, our
            students would have an ambition to be scientifically viable and
            excel in their different science-oriented disciplines.<br></br>
            <br></br> The school also prepares the students for future
            self-reliance, in order to have a positive purpose, direction and
            bearing towards a successful self-education after undergoing an
            all-round development.
          </p>
          <div className="history__img">
            <img src="./History1.png" alt="history image"/>
          </div>
        </div>
        <div><HistorySlide/></div>
        <div className="history__contents">
        <div className="history__img">
            <img src="./History2.png"  alt="history image"/>
          </div>
          <p>
            Over the years, we have hosted various high ranking and important
            dignitaries like our royal father, Ooni of Ife, HRM Oba Okunade
            Sijuwade, Olubuse II, who visited the school during the era of
            OSCAS, and personalities like Navy Commander Anthony Idofia, one of
            the then Military Administrators of Osun State and many
            Commissioners, Permanent Secretaries, Honorable Members of Federal
            House of Assembly and State House Assembly. Equally many indigene
            Ambassadors and honorable Senate members have always given
            recognition to the School.<br></br><br></br> Over the years, old students both far and
            near and some indigenes in diaspora constantly visit the school from
            time to time to advise on positive progress and standardized
            administration.<br></br><br></br> The pioneering principal Mr. M.A. Akano and his crew
            did a remarkable and tireless job to standardize the school to this
            level. And over the years the assistants of Mrs. G.Y. Odetola, Mrs.
            P.E. Ajayi and host of others have been instrumental in putting down
            a solid administrative legacy.<br></br><br></br> The schools meaningful efforts,
            ambitions and administrative perfections are the recipes that have
            made its students and staffs to achieve continuous and regular
            excellent academic success.<br></br><br></br> Our continuous joy is that our yearly
            finalists secure admissions into various tertiary institutions of
            choice, and they are always identified for their brilliant
            performances in their different chosen careers and discipline both
            home and abroad.
          </p>
        </div>
      </div>
    </div>
  );
};

export default History;
