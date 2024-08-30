import React from 'react';
import Collection from "./collection";
import {Outlet} from "react-router-dom";

import MobileNavbar from "../Mobile/mobileNavbar";

import Shop2 from "./shop2";

function LayoutTwo(props) {
    return (
        <div>
            < Collection />
            <Outlet />
            <MobileNavbar />
            <Shop2 />
        </div>
    );
}

export default LayoutTwo;