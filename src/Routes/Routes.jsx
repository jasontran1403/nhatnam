import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import AboutPage from "../Pages/AboutPage";
import GalleryPage from "../Pages/GalleryPage";
import TestimonialPage from "../Pages/TestimonialPage";
import FaqPage from "../Pages/FaqPage";
import ContactPage from "../Pages/ContactPage";
import ProductManagement from "../Pages/ProductManagement";
import ShopPage from "../Pages/ShopPage";
import ShopDetailsPage from "../Pages/ShopDetailsPage";
import CartPage from "../Pages/CartPage";
import CheckoutPage from "../Pages/CheckoutPage";
import WishlistPage from "../Pages/WishlistPage";
import Orders from "../Pages/Orders";
import WareHouse from "../Pages/WareHouse";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      
      {
        path: "/about",
        element: <AboutPage></AboutPage>,
      },
      {
        path: "/gallery",
        element: <GalleryPage></GalleryPage>,
      },
      {
        path: "/testimonial",
        element: <TestimonialPage></TestimonialPage>,
      },
      {
        path: "/faq",
        element: <FaqPage></FaqPage>,
      },
      {
        path: "/contact",
        element: <ContactPage></ContactPage>,
      },
      {
        path: "/management",
        element: <ProductManagement></ProductManagement>,
      },
      {
        path: "/warehouse",
        element: <WareHouse></WareHouse>,
      },
      {
        path: "/orders",
        element: <Orders></Orders>,
      },
      {
        path: "/menu",
        element: <ShopPage></ShopPage>,
      },
      {
        path: "/details/:id",
        element: <ShopDetailsPage />,
      },
      {
        path: "/cart",
        element: <CartPage></CartPage>,
      },
      {
        path: "/checkout",
        element: <CheckoutPage></CheckoutPage>,
      },
      {
        path: "/wishlist",
        element: <WishlistPage></WishlistPage>,
      },
    ],
  },
]);