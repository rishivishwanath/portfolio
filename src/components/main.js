import React from 'react'
import './styles/main.css'
import { FaInstagram ,FaLinkedinIn,FaGithub} from "react-icons/fa";
import { TbBrandLeetcode } from "react-icons/tb";


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
                    <a href="https://www.instagram.com/notrishivishwanath?igsh=dzF6ZzlibGJ0bTR3" className='instagram'><FaInstagram className='icon'/></a>
                    <a href='https://www.linkedin.com/in/rishivishwanath' className='linkedin'><FaLinkedinIn className='icon'/></a>
                    <a href='https://leetcode.com/u/rishi2004vishu/' className='leetcode'><TbBrandLeetcode className='icon'/></a>
                    <a href='https://github.com/rishivishwanath' className='github'><FaGithub className='icon'/></a>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}
export default Main