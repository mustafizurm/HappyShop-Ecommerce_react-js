import React from 'react'
import adminPic from "../../assets/images/admin.png"

import "../../assets/css/admin.css"
import { Link } from 'react-router-dom'

const SideBar = ({style, crossBtn, menu, setMenu}) => {
    return (
        <div className={style+`relative`}>
            <div className='flex justify-center items-center flex-col'>
                <img className='w-[80px] h-[80px]' src={adminPic} alt="" />
                <h3 className='font-bold mt-[8px]'>Admin</h3>
                <p>Sohal Rana</p>
            </div>
            <div className='px-[30px] flex flex-col gap-2 mt-[40px]'>
                <Link to={`/admin/all_users`}>
                    <h4 className='bg-gray-300 py-[2px] px-[10px] rounded cursor-pointer hover:bg-gray-400'>All Users</h4>
                </Link>
                <Link to={`/admin/products`}> <h4 className='bg-gray-300 py-[2px] px-[10px] rounded cursor-pointer hover:bg-gray-400'>All Product</h4></Link>
                <Link to={`/admin/create_product`}><h4 className='bg-gray-300 py-[2px] px-[10px] rounded cursor-pointer hover:bg-gray-400'>Create Product</h4></Link>
            </div>
            {
                crossBtn ? <div onClick={()=> {setMenu(false)}} className='absolute top-1 right-2 bg-red-500 hover:bg-red-700 rounded-4xl cursor-pointer'><i className="fa-solid fa-xmark text-white p-[11px]"></i></div>: ``
            }
        </div>
    )
}

export default SideBar