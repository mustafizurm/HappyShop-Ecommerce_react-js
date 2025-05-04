import React from 'react'
import tv from "../../assets/img/tv.png"
import { Link } from "react-router-dom"

const HorizontolProductCategory = ({ heading }) => {
  return (
    <section className='py-[80px] bg-gray-100'>
      <div className='w-[95%] md:max-w-[767px] lg:max-w-[1000px] xl:max-w-[1300px] m-auto overflow-auto'>
        <h1 className='text-3xl pb-[30px]'>{heading}</h1>
        <div className='flex gap-7'>
          <Link to={`/product/23`}>
            <div className='min-w-[350px] max-w-[350px] h-[150px] bg-white rounded flex'>
              <div className='min-w-[140px] h-[100%] bg-slate-200'>
                <img className='w-[100%] h-[100%] p-[20px]' src={tv} alt="" />
              </div>
              <div></div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HorizontolProductCategory