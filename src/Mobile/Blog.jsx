
import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import './blog.css'
function Blog(props) {

    const blog=[
        {
            image:require('../assets/images/blog-1.jpg'),
            name:"Find a Store",
            text:"Our store"
        },
        {
            image:require('../assets/images/blog-2.jpg'),
            name:"From our blog",
            text:"Our store"
        },
        {
            image:require('../assets/images/blog-3.jpg'),
            name:"Our story",
            text:"Our store"
        },
    ]
    return (
        <div>

            <section className="section blog" id="blog" aria-label="blog" >
                <div className="container">

                    <h2 className="h2-large section-title">More to Discover</h2>

                    <ul className="flex-list" style={{display: 'flex'}}>
                        {blog.map((item, index) => (
                            <li key={index} className="flex-item">

                            <div className="blog-card">

                                <figure className="card-banner img-holder has-before hover:shine">
                                        {/*style={{"--width": "540px", "--height": "720px"}}>*/}
                                    <img src={item.image} width="700" height="450"  loading="lazy"
                                         alt="Find a Store"
                                         className="img-cover"/>
                                </figure>

                                <h3 className="h3">
                                    <a href="google.com" className="card-title">{item.name}</a>
                                </h3>

                                <a href="google.com" className="btn-link">
                                    <span className="span">{item.text}</span>

                                    <FaArrowRight />
                                </a>

                            </div>

                             </li>
                            ))}
                    </ul>

                </div>
            </section>

        </div>
    );
}

export default Blog;