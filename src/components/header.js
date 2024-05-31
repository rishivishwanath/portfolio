import React, { useState } from "react";
import './styles/header.css';
import { X,BookOpen } from 'react-feather';
import { Link } from 'react-router-dom';
import log from './styles/logo.png'

function Header(){
    const [active,setActive]=useState(false);
    const showMenu=()=>{
        setActive(!active)
    }
    return(
        <div className="Header">
            <nav>
                <ul>
                    <div className="closed">
                        <X className="close" onClick={showMenu}/>
                    </div>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                    <li>
                        <Link to='/portfolio'>Portfolio</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact</Link>
                    </li>
                    <li>
                        <Link to='/blog'>Blog</Link>
                    </li>
                    
                </ul>
            </nav>
            <div className="changer">
                <BookOpen className="menu" onClick={showMenu}/>
            </div>
        </div>
    )
}

export default Header