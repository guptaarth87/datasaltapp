import React from 'react'
import '../styles/StarterSection.css'
import Img from '../assets/starterSection.png';
import {HashLink as Link} from 'react-router-hash-link'
export default function StarterSection() {
  return (
    <>
        <div className="starterdiv" id="startersection">
            <div className="container">
            <div className="row ">
              <div className="col-lg-6 col-md-6 col-sm-12">
              <h3 className=" white starter_txt">
              Unlock the power of innovation with our <span className="highlight">seamless</span> code and insightful analytics,
              raising the bar for professional-level services.
              <br></br><br></br>
              <Link className="pos_button" to="#services">See Services</Link>
              </h3>
              <br></br>
              </div>
              <br></br>
            
                <img  className="col-lg-6 col-md-6 col-sm-12 animated" src={Img}/>
           
            </div>
            </div>
        </div>
    </>
  )
}
