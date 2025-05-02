import React from 'react'
import airpodes from "../../assets/img/airpods.png"

const Product = () => {
  return (
    <section>
      <div className='w-[90%] m-auto mt-[30px]'>
        <div className='w-[100%] lg:flex gap-4'>
          <div className='w-[100%] lg:w-[30%] flex gap-3'>
            <div className='w-[20%] flex flex-col gap-2'>
              <div className='w-[100%] bg-gray-200 flex justify-center items-center rounded'>
                <img className='max-w-[70px]' src={airpodes} alt="" />
              </div>
              <div className='w-[100%] bg-gray-200 flex justify-center items-center rounded'>
                <img className='max-w-[70px]' src={airpodes} alt="" />
              </div>
              <div className='w-[100%] bg-gray-200 flex justify-center items-center rounded'>
                <img className='max-w-[70px]' src={airpodes} alt="" />
              </div>
              <div className='w-[100%] bg-gray-200 flex justify-center items-center rounded'>
                <img className='max-w-[70px]' src={airpodes} alt="" />
              </div>
            </div>
            <div className='w-[80%] bg-gray-300 flex justify-center items-center rounded'>
              <img className='min-w-[210px] max-w-[210px]' src={airpodes} alt="" />
            </div>
          </div>
          <div className='w-[100%] lg:w-[70%]'>
            <h4 className='rounded-2xl bg-red-300 inline px-[6px] text-red-500'>Boat</h4>
            <h2 className='text-[32px] font-semibold'>Airpodes 111</h2>
            <p className='text-gray-400 my-[7px]'>Airpodes</p>
            <div className='text-[24px]'>
              <h2 className='text-red-500'>$200.00 <del className='text-gray-400'>250.00</del></h2>
            </div>
            <div className='flex gap-2 mt-[20px]'>
              <button className='border rounded py-[2px] px-[30px] text-[15px] cursor-pointer'>Buy</button>
              <button className='border cursor-pointer py-[2px] px-[30px] text-[15px] bg-red-500 text-white rounded'>Add To Cart</button>
            </div>
            <div className='mt-[20px]'>
              <h4>Description:</h4>
              <h4>Best Airpodes:</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Product