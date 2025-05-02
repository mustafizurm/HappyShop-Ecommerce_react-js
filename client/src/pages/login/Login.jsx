import React, { useEffect, useState } from "react";
import "../../assets/css/login/login.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import UsePostRequest from "../../helper/usePostRequest";
import UseGetRequest from "../../helper/UseGetRequest";
const Login = () => {
    const {get_Refetch} = UseGetRequest("http://localhost:5000/api/user/currentUserDetails")
    const {data, error, isLoading, post_Refetch} = UsePostRequest("http://localhost:5000/api/user/login")
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ email: "", password: "" });
    // handelChange
    const handelChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    // handel Submit
    const submitHandel = async (e) => {
        e.preventDefault();
       const result = await post_Refetch(formData)
       if(result){
        localStorage.setItem("user", JSON.stringify(result)); // or whatever field has the user
        navigate("/")
        get_Refetch()
       }
    };
    return (
        <section className="flex justify-center items-center bg-gray-200"            style={{
            minHeight: 'calc(100vh - 154px)'
          }}>
            <form
                action=""
                onSubmit={(e) => {
                    submitHandel(e);
                    console.log(formData)
                }}
                className="w-[250px] lg:w-[260px] form bg-white"
    
            >
                <h4 className="text-red-500">{error}</h4>
                <label htmlFor="">
                    <span>Email</span>
                    <input
                        type="email"
                        name="email"
                        onChange={(e) => {
                            handelChange(e);
                        }}
                        className="bg-gray-200 text-gray-800 mt-2 text-[14px] w-[100%] rounded-sm"
                    />
                </label>
                <br /> 
                <label htmlFor="" className="">
                    <span>Password</span> <br />
                    <input
                        type="password"
                        name="password"
                        onChange={(e) => {
                            handelChange(e);
                        }}
                        className="bg-gray-200 text-gray-800 mt-2 text-[14px] w-[100%] rounded-sm"
                    />
                </label>
                <p className="text-right forgetPassword cursor-pointer text-[14px]">
                    Forgot Password?
                </p>
                <div>
                    <button className="loginBtn">Login</button>
                </div>
                <div className="flex gap-1 footer">
                    <p className="text-[17px]">Dont have account?</p>
                    <Link to={`/signup`}>
                        <span className="text-red-500">Sign Up</span>
                    </Link>
                </div>
            </form>
        </section>
    );
};

export default Login;