import React from 'react'
import './styles/main.css'
import {Instagram,Linkedin,GitHub} from 'react-feather'

function Main() {
  return (
    <div className='main'>
        <div className='main__container'>
            <div className='main__content'>
                <div className='text'>
                    <p>HELLO EVERYONE!</p>
                    <h1>I AM RISHI VISHWANATH</h1>
                    <p>Full-stack developer | Trader | DSA</p>
                    <div className='icons'>
                    <a href="https://www.instagram.com/notrishivishwanath?igsh=dzF6ZzlibGJ0bTR3" className='instagram'><Instagram className='icon'/></a>
                    <a href='https://www.linkedin.com/in/rishivishwanath' className='linkedin'><Linkedin className='icon'/></a>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}
export default Main