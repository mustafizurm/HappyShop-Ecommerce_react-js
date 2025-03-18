import {createBrowserRouter, Navigate, useLocation} from "react-router-dom"
import App from "../App";
import Home from "../pages/home/Home";
import Contact from "../pages/contact/Contact";
import Signup from "../pages/signup/Signup";
import Login from "../pages/login/Login";
import Admin_panel from "../pages/admin_panel/Admin_panel";
import AllUsers from "../pages/allUsers/allUsers";
import AllProduct from "../pages/allProduct/allProduct";
import CreateProduct from "../pages/createProduct/createProduct";










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
				path: "admin_panel",
				element: <Admin_panel />,
				children: [
					{
						path: "allUsers",
						element: <AllUsers />
					},
					{
						path: "allProduct",
						element: <AllProduct />
					},
					{
						path: "createProduct",
						element: <CreateProduct />
					}
				]
			}

        ]
    },

])

export default router;