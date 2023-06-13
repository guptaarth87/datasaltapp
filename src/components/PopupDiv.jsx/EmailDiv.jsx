import React,{useState} from 'react'
import BrochureDownload from './BrochureDownload';
import './Popupdiv.css';
import {db} from '../../_helpers/FirebaseConfig';
import {
  collection ,
  addDoc , 
 } from 'firebase/firestore'

export default function EmailDiv() {
    const usersCollectionRef =collection(db , "contactEmails")

    const [isOpen, setIsOpen] = useState(true);
    const [email, setEmail] = useState('');
  
    const handleClose = () => {
      setIsOpen(false);
    };
  
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      // Process the email submission here
      const data = {
        'Email':email
      }
      await addDoc(usersCollectionRef,data);
      window.alert("We will contact you soon!");
      setIsOpen(false);
      console.log(email);
    };
  
    if (!isOpen) {
      return null; // Don't render anything if the pop-up is closed
    }
  return (
    <>
    <div className='sticky-pos'>
        <div className='popupdiv'>
      <button
        className="close-botton"
        onClick={handleClose}
      >
        &times;
      </button>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email" className="subheading">Enter your email:</label><br></br><br></br>
        <input className='form-control'
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          style={{ width: '100%', marginBottom: '1rem' }}
          required
        />
        <button
          className = "btn botton"
          type="submit"
          style={{
            cursor: 'pointer',
          }}
        >
          Submit
        </button>
        <hr></hr>
        <BrochureDownload/>
      </form>
    </div> 
    </div>
    </>
  )
}
