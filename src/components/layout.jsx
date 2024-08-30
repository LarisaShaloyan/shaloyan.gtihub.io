import React from 'react';
import Header from "../navBar/Header";
import {Outlet} from "react-router-dom";
import Blog from "../Mobile/Blog";
import Hero from "./Hero";
import Offer from "../navBar/Offer";
import Feature from "../navBar/feature";
import Footer from "../navBar/Footer";
import MobileNavbar from "../Mobile/mobileNavbar";
import Shop2 from "./shop2";
import Shop from "./shop";

function Layout(props) {
    return (
        <div>
            <Header />

            <Outlet/>
            <Blog />
            <Hero />
            <Offer />
            <Feature />
            <MobileNavbar />
            <Shop />
            <Shop2 />
            <Footer />


        </div>
    );
}

export default Layout;