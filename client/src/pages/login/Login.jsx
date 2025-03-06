import React from "react";
import "./login.css"
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="w-[100%] h-[80vh]  bg-gray-200 flex justify-center items-center">
      <form action="" className="form bg-white">
        <label htmlFor="">
          <span>Email</span>
          <input type="email" className="bg-gray-200 w-[100%] rounded-sm" />
        </label> <br />
        <label htmlFor="">
          <span>Password</span> <br />
          <input type="password" className="bg-gray-200 w-[100%] rounded-sm" />
        </label>

        <p className="text-right forgetPassword cursor-pointer text-[14px]">Forgot Password?</p>

        <div>
         <button className="loginBtn">Login</button>
        </div>
        <div className="flex gap-1 footer">
          <p className="text-[17px]">Dont have account?</p>
          <Link to={`/signup`}><span className="text-red-500">Sign Up</span></Link>
        </div>
      </form>
    </section>
  );
};

export default Login;
