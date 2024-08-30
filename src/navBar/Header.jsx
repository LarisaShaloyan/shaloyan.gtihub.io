import React from 'react';
import { IoMdSearch } from "react-icons/io";
import { IoPerson } from "react-icons/io5";
import { IoMdStarOutline } from "react-icons/io";
import { IoBagHandle } from "react-icons/io5";
import Logo from '../assets/images/logo.png'
import {Link} from "react-router-dom";
function Header(props) {
    return (
        <div>

            <header className="header">

                <div className="alert">
                    <div className="container">
                        <p className="alert-text">Free Shipping On All U.S. Orders $50+</p>
                    </div>
                </div>

                <div className="header-top" >
                    <div className="container">

                        <button className="nav-open-btn" aria-label="open menu" >
                            <span className="line line-1"></span>
                            <span className="line line-2"></span>
                            <span className="line line-3"></span>
                        </button>

                        <div className="input-wrapper">
                            <input type="search" name="search" placeholder="Search product" className="search-field"/>

                            <button className="search-submit" aria-label="search">
                                <IoMdSearch />
                            </button>
                        </div>

                        <a href="google.com" className="logo">
                            <img src={Logo} width="179" height="26" alt="Glowing"/>
                        </a>

                        <div className="header-actions">

                            <button className="header-action-btn" aria-label="user">
                                <IoPerson />
                            </button>

                            <button className="header-action-btn" aria-label="favourite item">
                                <IoMdStarOutline />

                                <span className="btn-badge">0</span>
                            </button>

                            <button className="header-action-btn" aria-label="cart item">
                                <data className="btn-text" value="0">$0.00</data>

                                <IoBagHandle />


                                <span className="btn-badge">0</span>
                            </button>

                        </div>


                           <Link to="/" className="App-link">Blog</Link>
                            <Link to="/Offer" className="navbar-brand">Offer</Link>
                            <Link to="/feature" className="navbar-brand">feature</Link>
                            <Link to="/Banner" className="navbar-brand">Banner</Link>
                        <Link to="/Hero" className="navbar-brand">Hero</Link>


                    </div>
                </div>

            </header>


        </div>
    );
}

export default Header;