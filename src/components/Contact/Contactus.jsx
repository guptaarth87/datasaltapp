import React,{useState} from 'react'
import './Contactus.css'
import Img from '../../assets/authentication_vector1.svg';
import Logo from '../../assets/Logo.png'
export default function Contactus() {
    const [ user , setuser] = useState({
        first_name:"",
        last_name:"",
        email:"",
        pnoneno:""
      });
    const handleInput = (e)=>{
        const data = e.target.value;
        const name = e.target.name;
        console.log(data);
        setuser({...user,[name]:data});
     }
     const handleSubmit=(e)=>{
  
        console.log("in handle block!")
        e.preventDefault();
        const data = {
          "first_name":user.first_name,
          "last_name":user.last_name,
          "email":user.email,
          "password":user.password1,
         
        }
      
    }
  return (
    <>
    <div className="contactus_page"><br></br><br></br>
        <div className="container ">
           <h2 className="white alignCentre ">Leave your details here we will contact you</h2>
       </div>

     
   
   <div className="container centre_div">
     <div className="card col-lg-8 col-md-10 col-sm-10  logincard">
        <div className="row">
       
             <img className="m-0 col-lg-5 col-md-8 col-sm-12 vector_img" src={Img} />

       <div className=' col-lg-6   '>
      
       <div className='row  '>
       <div className="col-12 centre_login">
       <div className="alignCentre"><img src={Logo} className="logo"/></div>
      
       <div className="logintab ">
         
        <form  onSubmit={handleSubmit} >
        <div className ="form-row row">
                       <div class="form-group col-lg-5 col-md-5 col-sm-10">
                         <label className="card_margin " for="inputName">First name*</label>
                         <input type="text" 
                         className=" form-control" 
                         id="inputName" required 
                         value={user.first_name}
                         name = "first_name"
                         onChange={handleInput}
                         />
                       </div>
                       <div class="form-group col-lg-5 col-md-5 col-sm-10">
                         <label className="card_margin" for="inputLastName">Last name*</label>
                         <input type="text" 
                         className=" form-control" 
                         id="inputLastName" required
                         value={user.last_name}
                         name = "last_name"
                         onChange={handleInput}
                         />
                       </div>
                     </div>
                <div className="form-group col-lg-8 col-md-10 col-sm-10">
                <label className="card_margin" for="inputEmail">Email *</label>
                  <input type="emai" 
                  className="input_field form-control" 
                  id="InputEmail" aria-describedby="emailHelp" 
                  placeholder="Enter email or username" 
                  required
                  value={user.email}
                  name = "email"
                  onChange={handleInput}
                  />
                </div>
                {/* field 2 */}
                <div className="form-group col-lg-8 col-md-10 col-sm-10">
                <label className="card_margin" for="inputPassword">Phone no.</label>
                   <input type="password" 
                   className="input_field form-control" 
                   id="Phoneno" placeholder="Enter Phone number3" 
                   required
                   value={user.phoneno}
                   name = "password"
                   onChange={handleInput}/>
                </div>
                <div className="form-group ">
              <button  type="submit" className=" btn alignCentre mt-3 botton">Submit</button>
            
              </div>
              </form>
              
             
                
             </div>
          </div>
        </div>
     </div>
     </div>
   </div>
 </div>
    </div>
    </>
  )
}
