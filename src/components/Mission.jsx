import React from 'react'
import Img from '../assets/backgroundTemplate.png';
import '../styles/Mission.css';

export default function Mission() {
  return (
    <div >
     <div className="row margin " >

        <img className="sectiontwo_div" src={Img} />
        <h2 className="alignCentre white sectiontwo_text col-lg-10 col-md-9 col-sm-7">"Customer relationship management is not just a software solution; it's a philosophy that puts the
         customer at the <span className="highlight">heart </span>of every business
          decision and interaction." </h2>
     </div>
    </div>
  )
}
