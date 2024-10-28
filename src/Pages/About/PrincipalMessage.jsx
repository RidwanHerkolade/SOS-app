import React from "react";
import "./PrincipalPage.css";
const PrincipalMessage = () => {
  return (
    <div className="principal__message">
      <div className="principal__divs">
        <h3>A Message From The Principal</h3>
        <div className="principal__grids">
          <section className="section">
            <h1>gearing students to achieve their desired goals.</h1>
            <article>
              Our Faculty and students are well known for their excellence in
              research and innovation. School of Science Ile –Ife (SOS) is a
              school with the vision and the aspiration to nurture and give
              students a better tomorrow. It is a School that instills morals
              and academic excellence into the minds of our students.<br></br>
              <br></br> The students of our school are endowed with
              determination, excellence, integrity, and diligence. We standout
              and we are unique among our contemporaries from inception.{" "}
              <br></br>
              <br></br>The School is blessed with Teachers that are physically,
              mentally and emotionally stable to gear the students to achieve
              their desired goals.<br></br>
              <br></br> The School of Science Ile-Ife is sufficiently equipped
              with the ingredient of quality education such as Information
              Communication Technology (ICT), Biology, Chemistry, and Physics
              laboratories. Also, we have a farmland for Agricultural practical,
              in order to serve the core purpose of refocusing Nigeria's
              attention on agriculture<br></br>
              <br></br>
              Additionally, the School has produced a number of notable figures
              in the society. Past students who deem it fit to give back to
              their “Alma Mata”. This is as a result of the positive impact the
              School has inculcated in their respective lives.<br></br>
              <br></br> A website or prospectus can only give a summary of what
              our school is about. A visit in person will provide a clearer
              picture of the warmth and the real breadth of what is on offer
              here at School of Science, Ile-Ife. It would be my utmost pleasure
              to welcome you to School of Science, Ile-Ife where great minds are
              made.
            </article>
          </section>
          <div className="principal__section">
            <div className="bg"></div>
            <div className="principal__image">
              <img src="./principal.png" />
            </div>
            <div className="principal__names">
              <div className="principal__name">Mrs. H. I. Kolawole,</div>
              <div className="post">Principal, School of Science, Ile-Ife.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrincipalMessage;
