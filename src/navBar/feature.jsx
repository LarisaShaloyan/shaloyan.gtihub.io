import React from 'react';
import {Data} from '../data'
function Feature(props) {
    return (
        <div>
            <section className="section feature" aria-label="feature" >
                <div className="container">

                    <h2 className="h2-large section-title">Why Shop with Glowing?</h2>

                    <ul className="flex-list" style={{display: 'flex'}}>

                        {Data.map((item, index) => (
                            <li key={index} className="flex-item">

                            <div className="feature-card">

                                <img src={item.image} width="204" height="236" loading="lazy"
                                     alt="Guaranteed PURE"
                                     className="card-icon"/>

                                <h3 className="h3 card-title">{item.name}</h3>

                                <p className="card-text">
                                    {item.text}
                                </p>
                            </div>

                            </li>
                            ))}
                    </ul>
                </div>
            </section>
        </div>
    );
}
export default Feature;