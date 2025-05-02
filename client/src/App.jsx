import React from "react";
import Header from "./layout/header/Header";
import Footer from "./layout/footer/Footer";
import { Outlet } from "react-router-dom";
import "./app.css"
const App = () => {
    return (
        <>
            <Header />
            <main className="min-web_Height_controll">
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default App;
