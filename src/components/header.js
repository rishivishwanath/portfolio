import React, { useState } from "react";
import './styles/header.css';
// import { IoMdClose } from "react-icons/io";
import { CiMenuBurger } from "react-icons/ci";
import { Link } from 'react-router-dom';

function Header() {
    const [active, setActive] = useState(false);
    const showMenu = () => {
        setActive(!active);
    }
    return (
        <div className="Header">
            <nav>
                <ul className={active ? "menu active" : "menu"}>
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
                <CiMenuBurger className="menu-toggle" onClick={showMenu} />
            </div>
        </div>
    )
}

export default Header;
