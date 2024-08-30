import React from 'react';
import {Photo} from "../data";
import { FaLocationArrow } from "react-icons/fa";

function Collection(props) {

    return (
        <div>
            <section className="section collection" id="collection" aria-label="collection" >
                <div className="container">

                    <ul className="collection-list">
                        {Photo.map((item, index) => (
                            <li key={index} className="collection-item">

                            <div className="collection-card has-before hover:shine">

                                <h2 className="h2 card-title">{item.name}</h2>

                                <p className="card-text">{item.p}</p>

                                <a href="google.com" className="btn-link">
                                    <span className="span">{item.text}</span>

                                    <FaLocationArrow />
                                </a>

                               <figure className="has-bg-image">
                                   <img src={item.image} width="370" height="280"
                                        alt={"Conulting reporting Qounsil"}/>
                               </figure>

                            </div>

</li>
                            ))}
                    </ul>

                </div>
            </section>

        </div>
    );
}

export default Collection;