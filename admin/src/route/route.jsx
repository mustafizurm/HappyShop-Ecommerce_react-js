import {createBrowserRouter} from "react-router-dom"
import App from "../App"
import Admin from "../page/admin/Admin"
import All_Users from "../page/users/All_Users"
import Products from "../page/products/Products"
import AddProduct from "../page/addProduct/AddProduct"
import Login from "../page/login/Login"

const router = createBrowserRouter([
    {
        path: "",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Admin />,
                children: [
                    {
                        path: "admin/all_users",
                        element: <All_Users />
                    },
                    {
                        path: "admin/create_product",
                        element: <AddProduct />
                    },
                    {
                        path: "admin/products",
                        element: <Products />
                    }
                ]
            }
        ]
    },
    {
        path: "/admin/login",
        element: <Login />
    }
])

export default router