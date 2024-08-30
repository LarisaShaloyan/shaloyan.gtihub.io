import React from 'react';
import logo from '../assets/images/logo.png'
import pay from '../assets/images/pay.png'
import { IoMdArrowDropleftCircle } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
function Footer(props) {
    return (
        <div>


            <footer className="footer" >
                <div className="container">

                    <div className="footer-top">

                        <ul className="footer-list">

                            <li>
                                <p className="footer-list-title">Company</p>
                            </li>

                            <li>
                                <p className="footer-list-text">
                                    Find a location nearest you. See <a href="google.com" className="link">Our Stores</a>
                                </p>
                            </li>

                            <li>
                                <p className="footer-list-text bold">+391 (0)35 2568 4593</p>
                            </li>

                            <li>
                                <p className="footer-list-text">hello@domain.com</p>
                            </li>

                        </ul>

                        <ul className="footer-list">

                            <li>
                                <p className="footer-list-title">Useful links</p>
                            </li>

                            <li>
                                <a href="google.com" className="footer-link">New Products</a>
                            </li>

                            <li>
                                <a href="google.com" className="footer-link">Best Sellers</a>
                            </li>

                            <li>
                                <a href="google.com" className="footer-link">Bundle & Save</a>
                            </li>

                            <li>
                                <a href="google.com" className="footer-link">Online Gift Card</a>
                            </li>

                        </ul>

                        <ul className="footer-list">

                            <li>
                                <p className="footer-list-title">Infomation</p>
                            </li>

                            <li>
                                <a href="google.com" className="footer-link">Start a Return</a>
                            </li>

                            <li>
                                <a href="google.com" className="footer-link">Contact Us</a>
                            </li>

                            <li>
                                <a href="google.com" className="footer-link">Shipping FAQ</a>
                            </li>

                            <li>
                                <a href="google.com" className="footer-link">Terms & Conditions</a>
                            </li>

                            <li>
                                <a href="google.com" className="footer-link">Privacy Policy</a>
                            </li>

                        </ul>

                        <div className="footer-list">

                            <p className="newsletter-title">Good emails.</p>

                            <p className="newsletter-text">
                                Enter your email below to be the first to know about new collections and product
                                launches.
                            </p>

                            <form action="" className="newsletter-form">
                                <input type="email" name="email_address" placeholder="Enter your email address" required
                                       className="email-field"/>

                                <button type="submit" className="btn btn-primary">Subscribe</button>
                            </form>

                        </div>

                    </div>

                    <div className="footer-bottom">

                        <div className="wrapper">
                            <p className="copyright">
                                &copy; 2022 codewithsadee
                            </p>

                            <ul className="social-list">

                                <li>
                                    <a href="google.com" className="social-link">
                                        <FaTwitterSquare />
                                    </a>
                                </li>

                                <li>
                                    <a href="google.com" className="social-link">
                                        <FaFacebook />
                                    </a>
                                </li>

                                <li>
                                    <a href="google.com" className="social-link">
                                        <GrInstagram />
                                    </a>
                                </li>

                                <li>
                                    <a href="google.com" className="social-link">
                                        <FaYoutube />
                                    </a>
                                </li>

                            </ul>
                        </div>

                        <a href="google.com" className="logo">
                            <img src={logo} width="179" height="26" loading="lazy" alt="Glowing"/>
                        </a>

                        <img src={pay} width="313" height="28" alt="available all payment method"
                             className="w-100"/>

                    </div>

                </div>
            </footer>

            <a href="#top" className="back-top-btn" aria-label="back to top" >
                <IoMdArrowDropleftCircle />

            </a>
        </div>
    );
}

export default Footer;