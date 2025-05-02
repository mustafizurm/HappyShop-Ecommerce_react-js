import { createBrowserRouter, Navigate, useLocation } from "react-router-dom"
import App from "../App";
import Home from "../pages/home/Home";
import Contact from "../pages/contact/Contact";
import Signup from "../pages/signup/Signup";
import Login from "../pages/login/Login";
import Category from "../pages/category/Category";
import Product from "../pages/product/Product";

const router = createBrowserRouter([
	{
		path: "",
		element: <App />,
		children: [
			{
				path: "/",
				element: <Home />
			},
			{
				path: "signup",
				element: <Signup />
			},
			{
				path: "login",
				element: <Login />
			},
			{
				path: "category/:productName",
				element: <Category />
			},
			{
				path: "/product/:productId",
				element: <Product />
			}
		]
	},

])

export default router;