import React from "react";
import Header from "./layout/header/Header";
import Footer from "./layout/footer/Footer";
import { Outlet } from "react-router-dom";
// import { userCurrentDetailsFunck } from "./helper/

const App = () => {
    return (
        <>
            <Header />
			  <main className="customStyle">
			  <Outlet />
			  </main>
            <Footer />
        </>
    );
};

export default App;
