import React from 'react';
import "./Signup.css"

import {Link} from "react-router-dom"

const Signup = () => {
  return (
    <section className='w-[100%] h-[80vh] flex justify-center items-center bg-gray-200'>
      <form action="" className='w-[60%] md:w-[50%] lg:w-[20%] bg-white form'>
        <div></div>
        <label htmlFor="" className='flex flex-col'>
          <span>Name:</span>
          <input type="text" className='bg-gray-200 w-[100%] rounded-sm'/>
        </label>
        <label htmlFor="" className='flex flex-col'>
          <span>Email:</span>
          <input type="text" className='bg-gray-200 w-[100%] rounded-sm'/>
        </label>
        <label htmlFor="" className='flex flex-col'>
          <span>Password:</span>
          <input type="text" className='bg-gray-200 w-[100%] rounded-sm'/>
        </label>
        <label htmlFor="" className='flex flex-col'>
          <span>Confirm Password:</span>
          <input type="text" className='bg-gray-200 w-[100%] rounded-sm'/>
        </label>
        <button className='signUpBtn'>Signup</button>
        <div className='footer flex gap-1'>
          <p>Already have account ?</p>
          <Link to={`/login`}><p className='text-red-500 cursor-pointer'>Login</p></Link>
        </div>
      </form>
    </section>
  );
}

export default Signup;
