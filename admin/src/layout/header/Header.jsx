import React from 'react'
import adminPic from "../../assets/images/admin.png"
import "./header.css"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='bg-white'>
      <nav className='w-[96%] lg:flex m-auto py-[16px] shadow-amber-100'>
        <div className='w-[100%] flex items-center justify-between'>
          {/* Admin */}
          <Link to={`/`}><div className='text-gray-800 text-4xl  font-bold'>Admin_panel</div></Link>
          <div className='flex items-center gap-5'>
            <img className='max-w-[40px] max-h-[40px]' src={adminPic} alt="" />
            <div className='flex gap-2'>
              <button className='py-[2px] px-[12px] bg-red-400 text-[15px] text-white rounded cursor-pointer'>Login</button>
              <button className='py-[2px] px-[12px] bg-red-400 text-[15px] text-white rounded cursor-pointer hidden'>Logout</button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header