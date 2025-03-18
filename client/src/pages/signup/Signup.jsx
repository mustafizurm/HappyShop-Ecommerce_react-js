import React, { useState } from "react";
import "../../assets/css/signup/Signup.css";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { userSignupFunck } from "../../helper/allApi";

const Signup = () => {
	const navigate = useNavigate()

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const handelChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setFormData({ ...formData, [name]: value });
    };



    const handleSubmit = async (e) => {
        e.preventDefault();
		const response = await userSignupFunck(formData)
		console.log(response)
		if(response?.success){
			navigate("/login")
		} else{
			console.log(response?.message)
		}
    };


    return (
        <section className="w-[100%] customStyle flex justify-center items-center bg-gray-200">
            <form
                action=""
                onSubmit={(e) => {
                    handleSubmit(e);
                }}
                className="w-[60%] md:w-[50%] lg:w-[20%] bg-white form"
            >
                <label htmlFor="" className="flex flex-col">
                    <span>Name:</span>
                    <input
                        type="text"
                        name="name"
                        onChange={(e) => {
                            handelChange(e);
                        }}
                        className="bg-gray-200 text-gray-800 text-[14px]  w-[100%] rounded-sm"
                    />
                </label>
                <label htmlFor="" className="flex flex-col">
                    <span>Email:</span>
                    <input
                        type="text"
                        name="email"
                        onChange={(e) => {
                            handelChange(e);
                        }}
                        className="bg-gray-200 text-gray-800 text-[14px]  w-[100%] rounded-sm"
                    />
                </label>
                <label htmlFor="" className="flex flex-col">
                    <span>Password:</span>
                    <input
                        type="password"
                        name="password"
                        onChange={(e) => {
                            handelChange(e);
                        }}
                        className="bg-gray-200 text-gray-800 text-[14px]  w-[100%] rounded-sm"
                    />
                </label>
                <label htmlFor="" className="flex flex-col">
                    <span>Confirm Password:</span>
                    <input
                        type="password"
                        name="confirmPassword"
                        onChange={(e) => {
                            handelChange(e);
                        }}
                        className="bg-gray-200 text-gray-800 text-[14px] w-[100%] rounded-sm"
                    />
                </label>
                <button className="signUpBtn">Signup</button>
                <div className="footer flex gap-1">
                    <p>Already have account ?</p>
                    <Link to={`/login`}>
                        <p className="text-red-500 cursor-pointer">Login</p>
                    </Link>
                </div>
            </form>
        </section>
    );
};

export default Signup;
