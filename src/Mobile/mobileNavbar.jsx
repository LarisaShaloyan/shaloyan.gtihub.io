import React from 'react';
import logos from '../assets/images/logo.png'
import { IoMdCloseCircle } from "react-icons/io";
function MobileNavbar(props) {
    return (
        <div>

            <div className="sidebar">
                <div className="mobile-navbar" >

                    <div className="wrapper">
                        <a href="google.com" className="logo">
                            <img src={logos} width="179" height="26" alt="Glowing"/>
                        </a>

                        <button className="nav-close-btn" aria-label="close menu" >
                            <IoMdCloseCircle  className="close"/>
                        </button>
                    </div>

                    <ul className="navbar-list">

                        <li>
                            <a href="#home" className="navbar-link" >Home</a>
                        </li>

                        <li>
                            <a href="#collection" className="navbar-link" >Collection</a>
                        </li>

                        <li>
                            <a href="#shop" className="navbar-link" >Shop</a>
                        </li>

                        <li>
                            <a href="#offer" className="navbar-link" >Offer</a>
                        </li>

                        <li>
                            <a href="#blog" className="navbar-link" >Blog</a>
                        </li>

                    </ul>

                </div>

                <div className="overlay" ></div>
            </div>


        </div>
    );
}

export default MobileNavbar;