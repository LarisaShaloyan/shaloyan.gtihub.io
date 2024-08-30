import React from 'react';
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { IoBagHandle } from "react-icons/io5";
import { IoIosStar } from "react-icons/io";
import { FaRepeat } from "react-icons/fa6";
import { MdOutlineStar } from "react-icons/md";
import {shopData2} from "../data";

function Shop2(props) {

                return (
                    <div>

                        <section className="section shop" id="shop" aria-label="shop">
                            <div className="container">

                                <div className="title-wrapper">
                                    <h2 className="h2 section-title">Our Bestsellers</h2>

                                    <a href="google.com" className="btn-link">
                                        <span className="span">Shop All Products</span>

                                        <FaRegArrowAltCircleRight/>
                                    </a>
                                </div>

                                <ul className="has-scrollbar">

                                    {shopData2.map((item, index) => (
                                        <li key={index}>

                                            <li className="scrollbar-item">
                                                <div className="shop-card">

                                                    <div className="card-banner img-holder"
                                                         style={{"--width": "540px", "--height": "720px"}}>

                                                        <img src={item.image} width="540" height="720" loading="lazy"
                                                             alt="Facial cleanser" className="img-cover"/>

                                                        <span className="badge" aria-label="20% off">-20%</span>

                                                        <div className="card-actions">

                                                            <button className="action-btn" aria-label="add to cart">
                                                                <IoBagHandle/>

                                                            </button>

                                                            <button className="action-btn"
                                                                    aria-label="add to whishlist">
                                                                <IoIosStar/>
                                                            </button>

                                                            <button className="action-btn" aria-label="compare">
                                                                <FaRepeat/>

                                                            </button>

                                                        </div>
                                                    </div>

                                                    <div className="card-content">

                                                        <div className="price">
                                                            <del className="del">{item.price}</del>

                                                            <span className="span">{item.span}</span>
                                                        </div>

                                                        <h3>
                                                            <a href="google.com" className="card-title">{item.title}</a>
                                                        </h3>

                                                        <div className="card-rating">

                                                            <div className="rating-wrapper" aria-label="5 start rating">
                                                                <MdOutlineStar/>
                                                                <MdOutlineStar/>
                                                                <MdOutlineStar/>
                                                                <MdOutlineStar/>
                                                                <MdOutlineStar/>
                                                            </div>

                                                            <p className="rating-text">{item.text}</p>

                                                        </div>

                                                    </div>

                                                </div>
                                            </li>

                                        </li>
                                    ))}
                                </ul>

                            </div>
                        </section>

                    </div>
                );
            }

export default Shop2;