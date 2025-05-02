import React, { useState } from "react";
import "../../assets/css/signup/Signup.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import UsePostRequest from "../../helper/usePostRequest";
const Signup = () => {
    const {data, error, isLoading, post_Refetch} = UsePostRequest("http://localhost:5000/api/user/signup")
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
        const result =  await post_Refetch(formData)
        if(result){
            navigate("/login")
        }
    };
    return (
        <section className="flex justify-center items-center bg-gray-200"            style={{
            minHeight: 'calc(100vh - 154px)'
          }}>
            <form
                action=""
                onSubmit={(e) => {
                    handleSubmit(e);
                }}
                className="w-[300px] bg-white form"
            >
                <h4 className="text-red-500">{error}</h4>
                <label htmlFor="" className="flex flex-col">
                    <span>Name:</span>
                    <input
                        type="text"
                        name="name"
                        onChange={(e) => {
                            handelChange(e);
                        }}
                        value={formData.name}
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
                        value={formData.email}
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
                        value={formData.password}
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
                        value={formData.confirmPassword}
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
