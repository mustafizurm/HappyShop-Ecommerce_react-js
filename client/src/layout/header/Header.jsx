import React, { useContext, useEffect, useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { userContext } from "../../context/useUserContext";
import { useNavigate } from "react-router-dom";
import { userLogOutFunck } from "../../helper/allApi";

const Header = () => {
	const navigate = useNavigate();

    const { currentUser, fetchCurrentUser } = useContext(userContext);
	const [menu, setMenu] = useState(false);

	const [updateUser, setUpdateUser] = useState({
		name: '',
		email: '',
		role: '',
		userId: ''
	})


	useEffect(() => {
		fetchCurrentUser()
	}, []);


    const handelLogoutFunck = async () => {
		const response = await userLogOutFunck()
		if(response.success){
			fetchCurrentUser()
			navigate("/login")
		} else{
			console.log(response)
		}
    };

    return (
        <header className="w-[100%] h-[100%]">
            <nav className="w-[90%] md:w-[80%] h-[100%] bg-white grid grid-cols-2 md:grid-cols-3 ">
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
                    {currentUser?.success === true ? (
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
                        {currentUser?.success === true ? (
                            <Link to={`/login`}>
                                <button
                                    onClick={() => {
                                        handelLogoutFunck();
                                    }}
                                    className="login_Btn cursor-pointer bg-red-600 text-[16px] text-white rounded-[16px]"
                                >
                                    Logout
                                </button>
                            </Link>
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
