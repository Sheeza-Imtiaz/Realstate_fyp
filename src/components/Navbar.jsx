import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'


const Navbar = () => {
    const [active, IsActive] = useState(false);

    const handleNavClick = () =>{
        IsActive(false);
    }

    return(
        <div className='Navbar'>
            <span className='nav-logo'>
                <img src={"logo192.png"} alt="" />
            </span>

            <div className={`nav-items ${active && "switch"}`}>
                <Link to={"/"} onClick={handleNavClick}>Home</Link>
                <Link to={"/about"} onClick={handleNavClick}>About</Link>
                <Link to={"/services"} onClick={handleNavClick}>Services</Link>
                <Link to={"/contact"} onClick={handleNavClick}>Contact</Link>
                <button>
                    <span>Get Started</span>
                </button>
            </div>

            <div className={`nav-toggle ${active && "switch"}`}
            onClick={() => IsActive(!active)}>
                <div className='hamburger'></div>
            </div>
        </div>
    );
};

export default Navbar;