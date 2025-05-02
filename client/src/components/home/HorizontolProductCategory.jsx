import React from 'react'
import tv from "../../assets/img/tv.png"

const HorizontolProductCategory = () => {
  return (
    <section className='py-[80px] bg-gray-100'>
        <div className='w-[95%] md:max-w-[767px] lg:max-w-[1000px] xl:max-w-[1300px] m-auto overflow-auto flex gap-7'>
            <div className='min-w-[350px] max-w-[350px] h-[150px] bg-white rounded flex'>
                <div className='min-w-[140px] h-[100%] bg-slate-200'>
                    <img className='w-[100%] h-[100%] p-[20px]' src={tv} alt="" />
                </div>
                <div></div>
            </div>
        </div>
    </section>
  )
}

export default HorizontolProductCategory