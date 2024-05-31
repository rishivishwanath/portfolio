import React, { useState } from "react";
import './styles/header.css';
import { IoIosAdd,IoIosBackspace  } from "react-icons/io";
import { Link } from 'react-router-dom';

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
                        <IoIosAdd className="close" onClick={showMenu}/>
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
                <IoIosBackspace className="menu" onClick={showMenu}/>
            </div>
        </div>
    )
}

export default Header