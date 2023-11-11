import React from 'react';
import {HashLink as HLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import '../../styles/Navbar.css';

function ListItem({ items }) {
    items = [
      {
        "name":"Our Expertise",
           "nav":'#ourexpertise'
      
      },
        {
           "name":"Overview",
           "nav":'#overview',
        },
        {
          "name":"Tech Stack",
          "nav":'#techstack'
       },
       {
        "name":"Services",
        "nav":'#services'
     },
     {
      "name":"Contact",
      "nav":'#contactus'
   },
   
    ]
 
  return (
    <ul>
      {items.map((item, index) => (
        <li  className = "list_st" key={index}><HLink className='Link_dec alignCentre' to={item.nav}>{item.name}</HLink></li>
      ))}
      <li  className = "list_st" ><Link className='Link_dec alignCentre' to='/contact'>Contact us</Link></li>
         </ul>
  );
}

export default ListItem;
