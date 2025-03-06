import React from "react";
import "./Header.css"
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <header className="w-[100%] h-[100%]">
      <nav className="w-[90%] md:w-[80%] h-[100%] bg-white grid grid-cols-2 md:grid-cols-3 ">
        {/* logo */}
        <Link to={`/`}><div className=" text-2xl lg:text-4xl">Happy <span className="text-red-500">Shop</span></div></Link>

        {/* search */}
        <div className="hidden search_option md:flex md:justify-between items-center ">
          <input type="search" placeholder="Search" className="w-[100%] outline-neutral-50" />
          <i class="fa-solid fa-magnifying-glass search_icon bg-red-500"></i>
        </div>

        {/* login, logout, addToCart, dashboard */}
        <div className="flex justify-end items-center gap-7">
          {/* dashboard only for login */}
          <div>
           <i className="fa-solid fa-user cursor-pointer"></i>
          </div>
          <div>
          <i className="fa-solid fa-cart-shopping cursor-pointer"></i>
          </div>
          <div>
            <Link to={`/signup`}> <button className="login_Btn cursor-pointer bg-red-600 text-[16px] text-white rounded-[16px]">Signup</button></Link>
            {/* <Link to={`/login`}><button className="login_Btn cursor-pointer bg-red-600 text-[16px] text-white rounded-[16px]">Login</button></Link> */}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
