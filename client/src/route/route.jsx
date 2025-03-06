import {createBrowserRouter} from "react-router-dom"
import App from "../App";
import Home from "../pages/home/Home";
import Contact from "../pages/contact/Contact";
import Signup from "../pages/signup/Signup";
import Login from "../pages/login/Login";

const router = createBrowserRouter([
    {
        path: "",
        element: <App />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/signup",
                element: <Signup />
            },
            {
                path: "/login",
                element: <Login />
            }
        ]
    }
])

export default router;