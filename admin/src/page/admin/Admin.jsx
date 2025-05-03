import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import adminPic from "../../assets/images/admin.png"
import "../../assets/css/admin.css"
import SideBar from './SideBar'

const Admin = () => {

  const [menu, setMenu] = useState(false)

  return (
    <section>
      <div className='w-[96%] lg:flex m-auto relative'>
        {
          menu === false ?<button onClick={()=> {setMenu(true)}} className='absolute right-8 top-2 bg-white rounded-4xl lg:hidden p-[16px] flex justify-center items-center shadow-2xl cursor-pointer z-50'><i className="fa-solid fa-bars"></i></button> : ""
        }

        {/* sidebar */}
        <SideBar style={`hidden lg:block lg:w-[20%] bg-gray-200 min-h-[80vh] max-h-[80vh]`} crossBtn={false}  />

        {/* sidebar for small device and fixed*/}
        {
          menu ? <SideBar style={`fixed w-[240px] lg:hidden bg-gray-200 min-h-[80vh] max-h-[80vh]`} crossBtn={true} setMenu={setMenu} menu={menu} /> : ''
        }

        {/* content */}
        <div className='w-[100%] lg:w-[80%] min-h-[80vh] max-h-[80vh] overflow-auto bg-gray-100 p-[14px] admin_content'>
          <Outlet />
        </div>

      </div>
    </section>
  )
}

export default Admin