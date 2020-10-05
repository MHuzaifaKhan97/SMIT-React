import React, { useState } from 'react';

import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import DropDown from './DropDown';

const Navbar = () => {

    const [click, setClick] = useState(false);
    const [dropdown,setDropdown] = useState(false);
    const onMouseEnter = () => {
        if(window.innerWidth < 960){
            setDropdown(false)
        }else{
            setDropdown(true)
        }
    }
    const onMouseLeave = () => {
        if(window.innerWidth < 960){
            setDropdown(false)
        }else{
            setDropdown(false)
        }
    }
    
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () =>{ setClick(false)}


    return (
        <>
            <nav className="navbar">  
                <Link to="/" className="navbar-logo"> <i className="fa fa-home" /> BRAND NAME </Link>
                <div className="menu-icon" onClick={handleClick} >
                    <i className={click ? 'fa fa-times': 'fa fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to="/" className="nav-links" onClick={closeMobileMenu} >
                            Home
                        </Link>
                    </li>
                    <li className="nav-item" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} >
                        <Link to="/services" className="nav-links" onClick={closeMobileMenu} >
                            Services <i className="fa fa-caret-down" />
                        </Link>
                            {dropdown && <DropDown />}
                    </li>
                    <li className="nav-item">
                        <Link to="/product" className="nav-links" onClick={closeMobileMenu} >
                            Products
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact-us" className="nav-links" onClick={closeMobileMenu} >
                            Contact Us
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/sign-up" className="nav-links-mobile" onClick={closeMobileMenu} >
                            Sign Up
                        </Link>
                    </li>
                </ul>
                <Button />
            </nav>
        </>
    )
}
export default Navbar;
