import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router-dom";
import router from "./route/route.jsx";
import UseProvider from "./context/UseContext.jsx";
// import UseProvider from "./context/UseContext.jsx";
// import UserProvider from "./context/UsersContext.jsx";


createRoot(document.getElementById("root")).render(
     <UseProvider>
        <RouterProvider router={router}>
            <App />
        </RouterProvider>
     </UseProvider>

);
