import React, { useEffect, useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import UseGetRequest from "../../helper/UseGetRequest";

const Header = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user)
    const [logoutMessage, setLogoutMessage] = useState(null)
    const [logoutError, setLogOutError] = useState(null)
    const {data, get_Refetch} = UseGetRequest("http://localhost:5000/api/user/currentUserDetails")
    useEffect(()=> {
        get_Refetch()
    }, [])
    const navigate = useNavigate();
    const [menu, setMenu] = useState(false);
    const [updateUser, setUpdateUser] = useState({
        name: '',
        email: '',
        role: '',
        userId: ''
    })
    const handelLogoutFunck = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/user/logout", {
                method: "GET",
                headers: {
                    "Content-Type": "Application/json"
                },
                credentials: "include"
            })

            const data = await response.json()
            if(!response.ok){
                setLogOutError(data.message)
            } else{
                setLogOutError(null)
                setLogoutMessage(data.message)
                navigate("/login")
                localStorage.removeItem("user");
                // get_Refetch()
            }
        } catch (error) {
            setLogoutMessage("Network Problem")
        }
    };


    return (
        <header className="">
            <nav className="w-[96%] md:w-[710px] lg:w-[1010px] xl:w-[1240px] m-auto bg-white grid grid-cols-2 md:grid-cols-3">
                {/* logo */}
                <Link to={`/`}>
                    <div className=" text-2xl lg:text-4xl">
                        Happy<span className="text-red-500 text-4xl">Shop</span>
                    </div>
                </Link>

                {/* search */}
                <div className="hidden search_option md:flex md:justify-between items-center ">
                    <input
                        type="search"
                        placeholder="Search"
                        className="w-[100%] outline-neutral-50"
                    />
                    <i className="fa-solid fa-magnifying-glass search_icon bg-red-500"></i>
                </div>

                {/* login, logout, addToCart, dashboard */}
                <div className="flex justify-end items-center gap-7">
                    {/* dashboard only for login */}
                    {user?.role === "User" ? (
                        <div className="relative">
                            <i
                                className="fa-solid fa-user cursor-pointer"
                                onClick={() => {
                                    setMenu(!menu);
                                }}
                            ></i>
                            {menu ? (
                                <div className="absolute meu_bar ">
                                    <Link to={`/admin_panel`}>
                                        <p className="cursor-pointer">
                                            Admin Panel
                                        </p>
                                    </Link>
                                    <Link to={""}>
                                        <p className="cursor-pointer">
                                            Profile
                                        </p>
                                    </Link>
                                    <Link to={""}>
                                        <p className="cursor-pointer">
                                            My Order
                                        </p>
                                    </Link>
                                </div>
                            ) : (
                                ``
                            )}
                        </div>
                    ) : (
                        ""
                    )}
                    <div>
                        <i className="fa-solid fa-cart-shopping cursor-pointer"></i>
                    </div>

                    <div>
                        {user ? (
                            <button
                                onClick={handelLogoutFunck}
                                className="login_Btn cursor-pointer bg-red-600 text-[16px] text-white rounded-[16px]"
                            >
                                Logout
                            </button>
                        ) : (
                            <Link to={`/login`}>
                                <button className="login_Btn cursor-pointer bg-red-600 text-[16px] text-white rounded-[16px]">
                                    Login
                                </button>
                            </Link>
                        )}
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
