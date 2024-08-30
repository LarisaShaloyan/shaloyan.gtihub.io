import React from 'react';
import Offer1 from '../assets/images/offer-banner-1.jpg'
import Offer2 from '../assets/images/offer-banner-2.jpg'
function Offer(props) {
    return (
        <div>
            <section className="section offer" id="offer" aria-label="offer" >
                <div className="container">

                    <figure className="offer-banner">
                        <img src={Offer1} width="305" height="408" loading="lazy"
                             alt="offer products"
                             className="w-100"/>

                        <img src={Offer2} width="450" height="625" loading="lazy"
                             alt="offer products"
                             className="w-100"/>
                    </figure>

                    <div className="offer-content">

                        <p className="offer-subtitle">
                            <span className="span">Special Offer</span>

                            <span className="badge" aria-label="20% off">-20%</span>
                        </p>

                        <h2 className="h2-large section-title">Mountain Pine Bath Oil</h2>

                        <p className="section-text">
                            Made using clean, non-toxic ingredients, our products are designed for everyone.
                        </p>

                        <div className="countdown">

                            <span className="time" aria-label="days">15</span>
                            <span className="time" aria-label="hours">21</span>
                            <span className="time" aria-label="minutes">46</span>
                            <span className="time" aria-label="seconds">08</span>

                        </div>

                        <a href="google.com" className="btn btn-primary">Get Only $39.00</a>

                    </div>

                </div>
            </section>


        </div>
    );
}

export default Offer;