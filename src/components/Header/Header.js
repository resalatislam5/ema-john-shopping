import React from 'react';
import logo from '../../images/Logo.svg'
import  './Header.css'
const Header = () => {
    return (
        <nav className='header'>
            <div>
                <img src={logo} alt="" />
            </div>
            <div className='manu'>
                <ul>
                    <li><a href="#">Order</a></li>
                    <li><a href="#">Order Review</a></li>
                    <li><a href="#">Manage Inventory</a></li>
                    <li><a href="#">Login</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;