import React from 'react';
import {HashLink as Link } from 'react-router-hash-link';
import '../../styles/Navbar.css';

function ListItem({ items }) {
    items = [
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
        <li  className = "list_st" key={index}><Link className='Link_dec alignCentre' to={item.nav}>{item.name}</Link></li>
      ))}
         </ul>
  );
}

export default ListItem;
