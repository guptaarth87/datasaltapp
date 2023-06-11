import React from 'react'
import '../styles/TechStack.css';
import python from "../assets/Technology/python.png";
import nodejs from "../assets/Technology/nodejs.png";
import firebase from "../assets/Technology/firebase.png";
import react_icon from "../assets/Technology/react_icon.png";
import streamlit from "../assets/Technology/streamlit.png";
import flask from "../assets/Technology/flask.png";

export default function TechStack() {
    const expertList = [
        {    'id':0,
             'img_url':python
        },
        {    'id':1,
             'img_url':nodejs
        },
        {    'id':2,
             'img_url':react_icon
        },
        {    'id':3,
             'img_url':streamlit
        },
        {    'id':4,
             'img_url':flask
        },
        {    'id':5,
             'img_url':firebase
        },
        {    'id':6,
             'img_url':python
        },
        {    'id':7,
             'img_url':nodejs
        },
        {    'id':8,
             'img_url':react_icon
        },
        {    'id':9,
             'img_url':streamlit
        },
        {    'id':10,
             'img_url':flask
        },
        {    'id':11,
             'img_url':firebase
        },
        {    'id':12,
             'img_url':python
        },
        {    'id':13,
             'img_url':nodejs
        },
        {    'id':14,
             'img_url':react_icon
        },
        {    'id':15,
             'img_url':streamlit
        }
       ];

  return (
   <>
       <div id="techstack">
   <h2 className="alignCentre heading">Tech Stack we uses</h2>
      <div className="slider">
        <div className="slide-track">
            
          {   
              expertList.map((items,key)=>{
               console.log(items.img_url)
               
               return( 
               <>
                <div className = "  slide">
                 <div className="card_div">
                    <img className=" col-6 expertImg" src={items.img_url}/>
               </div> 
            </div>
               </>
               )

              })
          }
     
        </div>
    </div>   

    <div className="slider">
        <div className="slide-track-reverse">
            
          {
              expertList.map((items,key)=>{
               console.log(items.img_url)
               return( 
               <>
                <div className = "slide">
                 <div className="card_div">
                    
                    <img className=" col-6 expertImg" src={items.img_url}/>
                    
                    
               </div> 
            </div>
               </>
               )
              })
          }
        </div>
    </div>  
    </div>
   </>
  )
}
