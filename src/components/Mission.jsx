import React from 'react'
import Img from '../assets/backgroundTemplate.png';
import '../styles/Mission.css';

export default function Mission() {
  return (
    <div >
     <div className="row margin" >

        <img className="sectiontwo_div " src={Img} />
        <div style={{position:"absolute"}} className=" col-lg-10 col-md-9 col-sm-8 alignCentre text_div_mission">
        <h2  className="  white  m-5 sectiontwo_text">"Customer relationship management is not just a software solution; it's a philosophy that puts the
         customer at the <span className="highlight">heart </span>of every business
          decision and interaction." </h2>
          </div>
          </div>
     </div>
  
  )
}
