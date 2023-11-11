import React from 'react'
import hotelbooking from '../assets/hotelbooking.jpg';
import digital_card from '../assets/digital_card.svg';

export default function OurExpertise() {
  return (
   <>
    <div className="expertise-section" id="ourexpertise">
        <h2 className = "alignCentre heading-color m-5 ">Our Expertise</h2>
        <div className="row">
        <div className="col-lg-6 col-md-5 col-sm-12 m-3 description">
            <br></br>
            <h3>1. Digital card</h3>
            <br></br>
            Revolutionize your business with our cutting-edge digital cards website! Tailored for both business and retail shops, our platform functions seamlessly, delivering a mobile application experience right to your fingertips. Unlock the power of intuitive dashboards, providing unparalleled insights and control—all at an unbeatable
             price of just<span style={{color:"#18345A"}}><strong> 4,999 INR</strong></span>. 
       <br></br><br></br>       
       Elevate your online presence and streamline operations with our feature-rich solution. Embrace the future of digital transformation with our affordable and dynamic website package!
       <br></br><br></br>
        </div>
        <img src={digital_card} className="col-lg-4 col-md-5 col-sm-12 m-3"/>
    </div>
    <div className="row">
    <img src={hotelbooking} className="col-lg-4 col-md-5 col-sm-12 m-3"/>
    <div className="col-lg-6 col-md-5 col-sm-12 m-3 description">
            <br></br>
            <h3>2. Personalised hotel booking website</h3>
            <br></br>
            Experience the epitome of convenience with our bespoke 
            hotel booking website! Designed to emulate the fluidity of a 
            mobile application, our platform is crafted exclusively for hotels.
             Elevate your establishment's online presence with seamless navigation 
             and a user-friendly interface. Unleash the potential of detailed dashboards, 
             empowering you with comprehensive insights and control. All this, at an incredible
              value of just<span style={{color:"#18345A"}}><strong> 14,999 INR</strong></span>.
          <br></br><br></br>
          Transform your hotel's digital landscape with our feature-rich solution and provide your 
          guests with an unparalleled booking experience. Embrace innovation and efficiency with our affordable website package tailored for the hospitality industry!
       <br></br><br></br>
        </div>
        </div>
     </div>
   </>
  )
}
