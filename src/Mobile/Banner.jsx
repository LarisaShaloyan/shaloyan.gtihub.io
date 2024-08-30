import React from 'react';
import Banner1 from '../assets/images/banner-1.jpg'
import Banner2 from '../assets/images/banner-2.jpg'
function Banner(props) {
    return (
        <div>
            <section className="section banner" aria-label="banner" >
                <div className="container">

                    <ul className="banner-list">

                        <li>
                            <div className="banner-card banner-card-1 has-before hover:shine">

                                <p className="card-subtitle">New Collection</p>

                                <h2 className="h2 card-title">Discover Our Autumn Skincare</h2>

                                <a href="google.com" className="btn btn-secondary">Explore More</a>

                                <div className="has-bg-image">

                                    <div className="has-bg-image "
                                     style={{ backgroundImage: `url(${Banner1})` }}></div>

                                </div>

                            </div>
                        </li>

                        <li>
                            <div className="banner-card banner-card-2 has-before hover:shine">

                                <h2 className="h2 card-title">25% off Everything</h2>

                                <p className="card-text">
                                    Makeup with extended range in colors for every human.
                                </p>

                                <a href="google.com" className="btn btn-secondary">Shop Sale</a>

                                <div className="has-bg-image"
                                 style={{backgroundImage: `url(${Banner2})`}}></div>

                            </div>
                        </li>

                    </ul>

                </div>
            </section>


        </div>
    );
}

export default Banner;