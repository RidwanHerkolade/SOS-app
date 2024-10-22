import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'
const FooterBottom = () => {
  return (
    <div className="footer__bottom">
        <div className='footerbottom__div'>
          <div className="footer__sch">
            {" "}
            School of Science, Ile-Ife. - © 2021 All Rights Reserved
          </div>
          <div className="footer__links">
            <Link to="/" className='fl'>About</Link>
            <Link to="/" className='fl'>Curriculum</Link>
            <Link to="/" className='fl'>Contact</Link>
            <Link to="/" className='fl'>School calender</Link>
          </div>
          <div className="made">Made with ♥ by AA LLC </div>
          </div>
        </div>
  )
}

export default FooterBottom
