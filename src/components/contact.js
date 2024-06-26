import React from 'react'
import Header from './header'
import { FaLinkedinIn,FaPhoneAlt } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import './styles/contact.css'

function Contact() {
  return (
    <div className='mainc'>
      <Header/>
      <div className='contact'>
      <h1>Contact</h1>
      <div className='ic'> 
      <FaPhoneAlt/>:<a href="+918217768067">+91 8217768067</a>
      </div>
      <div className='ic'>
      <CiMail/>:<a href="rishi2004vishu@gmail.com" className='instagram'>rishi2004vishu@gmail.com</a>
      </div>
      <div className='ic'>
      <FaLinkedinIn/>:<a href='https://www.linkedin.com/in/rishivishwanath' className='linkedin'>https://www.linkedin.com/in/rishivishwanath</a>
      </div>
      </div>
    </div>
  )
}
export default Contact