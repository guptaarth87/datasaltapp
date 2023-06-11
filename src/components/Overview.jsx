import React from 'react'
import '../styles/Overview.css';
import planning  from '../assets/planning.jpg';
import analytics from '../assets/analytics.jpg';
// import analytics from '../assets/analytics';

export default function Overview() {
  return (
    <>
    <div id = "overview">
    <h2 className="heading-color m-3">Overview</h2>
    <div className="row">
        <div className="col-lg-6 col-md-5 col-sm-12 m-3 description">
            <br></br><br></br>
        We provide diverse web solutions designed to empower businesses in the digital age. 
       <br></br><br></br>       
        With our expertise and passion for web development and other services, we help clients establish a strong online presence,
         drive engagement, and achieve their unique goals.
       <br></br><br></br>
        </div>
        <img src={planning} className="col-lg-4 col-md-5 col-sm-12 m-3"/>
    </div>
    <div className="row">
    <img src={analytics} className="col-lg-4 col-md-5 col-sm-12 m-3"/>
    <div className="col-lg-6 col-md-5 col-sm-12 m-3 description">
            <br></br><br></br>
            At our core, we believe in the transformative power of the web.
            Our team of experienced web developers, designers, and digital strategists work collaboratively to create innovative, user-centric web solutions that elevate brands and deliver exceptional experiences.
          <br></br><br></br>
            From dynamic websites to web applications and content management systems, we have the skills and knowledge to bring your vision to life.

       <br></br><br></br>
        </div>
        </div>
    </div>
    </>
  )
}
