import React, { useContext, useState } from "react";
import "../../assets/css/login/login.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../context/useUserContext";
import { userLoginFunck } from "../../helper/allApi";

const Login = () => {
    const { fetchCurrentUser } = useContext(userContext);

    const navigate = useNavigate();
    const [formData, setFormData] = useState({ email: "", password: "" });
    // handelChange
    const handelChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    // handel Submit
    const submitHandel = async (e) => {
        e.preventDefault();
		const response = await userLoginFunck(formData)
		if(response?.success){
			fetchCurrentUser()
			navigate("/")
		} else{
			console.log(response?.message)
		}
    };


    return (
        <section className="w-[100%]  bg-gray-200 flex justify-center items-center customStyle">
            <form
                action=""
                onSubmit={(e) => {
                    submitHandel(e);
                }}
                className="form bg-white min-h-full"
            >
                <label htmlFor="">
                    <span>Email</span>
                    <input
                        type="email"
                        name="email"
                        onChange={(e) => {
                            handelChange(e);
                        }}
                        className="bg-gray-200 text-gray-800 text-[14px] w-[100%] rounded-sm"
                    />
                </label>{" "}
                <br />
                <label htmlFor="">
                    <span>Password</span> <br />
                    <input
                        type="password"
                        name="password"
                        onChange={(e) => {
                            handelChange(e);
                        }}
                        className="bg-gray-200 text-gray-800 text-[14px] w-[100%] rounded-sm"
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
