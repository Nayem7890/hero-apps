import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../Pages/Home/Home";
import Product from "../Pages/Products/Products";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Wishlist from "../Pages/Wishlist/Wishlist";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage/>,
        hydrateFallbackElement: <p>Loading..</p>,
        children: [
            {
                index: true,
                element: <Home />,
                loader: ()=> fetch('./appData.json')
            },
            {
                path: "/products",
                element: <Product />
            },
            {
                path: "/wishlist",
                element: <Wishlist />
            }
           
        ]
    },


]);

export default router;