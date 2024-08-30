import React from 'react';
import './hero.css'
// import hero from '../assets/images/hero-banner-3.jpg'
function Hero(props) {

    const SectionHero=[
        {
            image:require('../assets/images/hero-banner-1.jpg'),
            name:" Reveal The ",
            p:" Made using clean, non-toxic ingredients, our products are designed for everyone.",
            amount:"Starting at $7.99",
            text:"Shop Now"
        },
        {
            image:require('../assets/images/hero-banner-2.jpg'),
            name:" Reveal The ",
            p:" Made using clean, non-toxic ingredients, our products are designed for everyone.",
            amount:"Starting at $7.99",
            text:"Shop Now"
        },
        {
            image:require('../assets/images/hero-banner-3.jpg'),
            name:" Reveal The ",
            p:" Made using clean, non-toxic ingredients, our products are designed for everyone.",
            amount:"Starting at $7.99",
            text:"Shop Now"
        },

    ]
    return (
        <div>

            <section className="section hero" id="home" aria-label="hero" >
                <div className="container">

                    <ul className="has-scrollbar">
                        {SectionHero.map((item, index) => (
                            <li key={index} className="card">

                        <li className="scrollbar-item">
                            <div className="hero-card has-bg-image"
                                 style={{backgroundImage:`url(${item.image})`}}>

                                <div className="card-content">

                                    <h1 className="h1 hero-title">
                                        Reveal The <br/>
                                        Beauty of Skin
                                    </h1>

                                    <p className="hero-text">
                                        Made using clean, non-toxic ingredients, our products are designed for everyone.
                                    </p>

                                    <p className="price">Starting at $7.99</p>

                                    <a href="#" className="btn btn-primary">Shop Now</a>

                                </div>

                            </div>
                        </li>

                        {/*<li className="scrollbar-item">*/}
                        {/*    <div className="hero-card has-bg-image"*/}
                        {/*         // style="background-image: url('./assets/images/hero-banner-2.jpg')">*/}

                        {/*        <div className="card-content">*/}

                        {/*            <h1 className="h1 hero-title">*/}
                        {/*                Reveal The <br/>*/}
                        {/*                Beauty of Skin*/}
                        {/*            </h1>*/}

                        {/*            <p className="hero-text">*/}
                        {/*                Made using clean, non-toxic ingredients, our products are designed for everyone.*/}
                        {/*            </p>*/}

                        {/*            <p className="price">Starting at $7.99</p>*/}

                        {/*            <a href="#" className="btn btn-primary">Shop Now</a>*/}

                        {/*        </div>*/}

                        {/*    </div>*/}
                        {/*</li>*/}

                        {/*<li className="scrollbar-item">*/}
                        {/*    <div className="hero-card has-bg-image"*/}
                        {/*         style="background-image: url('./assets/images/hero-banner-3.jpg')">*/}

                        {/*        <div className="card-content">*/}

                        {/*            <h1 className="h1 hero-title">*/}
                        {/*                Reveal The <br/>*/}
                        {/*                Beauty of Skin*/}
                        {/*            </h1>*/}

                        {/*            <p className="hero-text">*/}
                        {/*                Made using clean, non-toxic ingredients, our products are designed for everyone.*/}
                        {/*            </p>*/}

                        {/*            <p className="price">Starting at $7.99</p>*/}

                        {/*            <a href="#" className="btn btn-primary">Shop Now</a>*/}

                        {/*        </div>*/}

                        {/*    </div>*/}
                        {/*</li>*/}
                            </li>
                        ))}

                    </ul>

                </div>
            </section>


        </div>
    );
}

export default Hero;