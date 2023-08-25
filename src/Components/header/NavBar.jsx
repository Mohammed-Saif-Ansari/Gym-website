import React from 'react';
import logo from '../../assets/images/logo.png';
import '../header/NavBar.css';


function NavBar() {


    return (
        <nav>
            <div className="nav-main">
                <div className='navlogo'>
                    <img src={logo} alt="logo" />
                </div>
                <ul className='nav-links'>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Shop</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
                <div className='nav-hidden-deatails'>
                    x
                </div>
            </div>
        </nav>
    )
}

export default NavBar