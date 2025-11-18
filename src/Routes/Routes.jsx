import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home/Home";
import Products from "../Pages/Products/Products";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Wishlist from "../Pages/Wishlist/Wishlist";
import ProductDetails from "../Pages/Productdetails/Productdetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        hydrateFallbackElement: <p>Loading...</p>,
        children: [
            {
                index: true,
                element: <Home />,
                loader: () => fetch('./appData.json')
            },
            {
                path: "/products",
                element: <Products />
            },
            {
                path: "/wishlist",
                element: <Wishlist />
            },
            {
                path: "/app/:id",
                element: <ProductDetails />
            }
        ]
    }
]);

export default router;