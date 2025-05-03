import React from 'react'
import "../../assets/css/Product.css"
import tv from "../../assets/images/tv.png"

const Products = () => {
  return (
    <section>
       <div className='w-[100%] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 all_product_Container'>
        <div className='bg-gray-300 flex flex-col justify-center items-center py-[14px] relative'>
          <img className='max-w-[100px] h-[100px] bg-gray-200 rounded' src={tv} alt="" />
          <span className='mt-[7px] font-semibold'>Television</span>
          <i className="fa-solid fa-pen absolute text-[14px] border-r-green-400 bottom-3 right-3 bg-gray-500 p-[7px] rounded-4xl text-white cursor-pointer hover:bg-green-300 transition"></i>
          <i className="fa-solid fa-trash absolute text-[14px] border-r-green-400 left-3 top-3 bg-gray-500 p-[7px] rounded-4xl text-white cursor-pointer hover:bg-red-300 transition"></i>
        </div>
       </div>
    </section>
  )
}

export default Products