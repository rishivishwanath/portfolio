import React from 'react'
import Header from './header'
import {Phone,Mail,Linkedin} from 'react-feather'
import './styles/contact.css'

function Contact() {
  return (
    <div className='mainc'>
      <Header/>
      <div className='contact'>
      <h1>Contact</h1>
      <div className='ic'> 
      <Phone/>:<a href="+918217768067">+91 8217768067</a>
      </div>
      <div className='ic'>
      <Mail/>:<a href="rishi2004vishu@gmail.com" className='instagram'>rishi2004vishu@gmail.com</a>
      </div>
      <div className='ic'>
      <Linkedin/>:<a href='https://www.linkedin.com/in/rishivishwanath' className='linkedin'>https://www.linkedin.com/in/rishivishwanath</a>
      </div>
      </div>
    </div>
  )
}
export default Contact