import React from 'react'
import {HashLink as HLink } from 'react-router-hash-link';
import {Link } from 'react-router-dom';
import Logo   from '../../assets/Logo.png';
import { useEffect , useState} from 'react';
import '../../styles/Navbar.css';
import MenuButton from './MenuButton';

export default function Navbar() {
    const [windowSize, setWindowSize] = useState([
        window.innerWidth,
        window.innerHeight,
      ]);
      
      
      
      useEffect(() => {
        const handleWindowResize = () => {
          setWindowSize([window.innerWidth, window.innerHeight]);
        };
    
        window.addEventListener('resize', handleWindowResize);
    
        return () => {
          window.removeEventListener('resize', handleWindowResize);
        };
      });
     
      const width = windowSize[0]  ;
      function check(){
           if(width <1125){
              return true
           }else{
              return false
           }
      }
    
      return (
        <> 
           <div className = "navbar_custom flex shadow_bottom"> 
              <div className = "navcontent "> 
    
    {
     check()?
     <div>
        <img  src={Logo}  className= "alignLeft Logo"/>  
        <MenuButton className=" botton_pos marginAlign"/> 
        
        {/* <button onClick={()=>navigate('/Signup')} className="alignRight btn botton botton_pos marginAlign">Join network</button> */}
       
     </div>:<div>
              <img  src={Logo}  className= "alignLeft Logo"/>
             
              <HLink className="nav_link link1" to='#overview'>Overview</HLink>
              <HLink className="nav_link link2" to='#techstack'>Tech stack</HLink>
              <HLink className="nav_link link3" to='#services'>Services</HLink>              
              <Link className="nav_link link4" to='/contact'>Contact</Link> 
                           
     </div>
    }
    </div>
     </div>
</>
)
}
