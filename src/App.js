
import './App.css';
import Banner from "./Mobile/Banner";
import '../src/assets/css/style.css'
import Collection from "./components/collection";
import Blog from "./Mobile/Blog";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Home} from "./navBar/header/home";
import Layout from "./components/layout";
import LayoutTwo from "./components/layoutTwo";
import Feature from "./navBar/feature";
import Offer from "./navBar/Offer";
import Shop2 from "./components/shop2";
import Hero from "./components/Hero";


function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    path: "/",
                    element: <Home />,
                },
                {
                    path: "Blog",
                    element:
                        (
                            <Blog />
                        ),
                },
                {
                    path:"Hero",
                    element:(
                        <Hero />
                    )
                },
                {
                    path: "Banner",
                    element:(
                        <Banner />
                    )
                },
                {
                    path: "feature",
                    element: (
                        <Feature />
                    ),
                },
                {
                    path: "Offer",
                    element:( <Offer />
                    ),
                },
            ],
        },
        {
            path: "/Collection",
            element: <LayoutTwo />,
            children: [
                {
                    path: "/Collection",
                    element: <Collection />,
                },
                {
                    path:'/Collection',
                    element:<Shop2 />
                }


            ],
        }
    ]);


    return <RouterProvider router={router} />


}

export default App;
