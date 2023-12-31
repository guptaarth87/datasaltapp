import React from 'react'
import Navbar from '../components/Navigation/Navbar'
import StarterSection from '../components/StarterSection'
import Overview from '../components/Overview'
import Mission from '../components/Mission';
import TechStack from '../components/TechStack';
import Services from '../components/Services';
import Footer from '../components/Footer';
import EmailDiv from '../components/PopupDiv.jsx/EmailDiv';
export default function Index() {
  return (
    <> 
       <Navbar/>
       <EmailDiv />
       <StarterSection/>
       <div className="container">

        <Overview/>
        <Mission/>
       </div>
       <TechStack/>
       <div className="container">
        <Services/>
       </div>
       <Footer/>
    </>
  )
}
