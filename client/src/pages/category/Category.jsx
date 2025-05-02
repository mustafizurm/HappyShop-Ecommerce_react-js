import React from 'react'
import SideBar from './SideBar'

const Category = () => {
    return (
        <section>
            <div className='w-[95%] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px] m-auto flex mt-[40px] relative'>
                <div className='absolute right-0 top-[-30px] text-[16px] lg:hidden cursor-pointer'>
                    <h2>Filter</h2>
                </div>
                {/* <div className='fixed lg:hidden w-[250px] max-h-[100vh] overflow-auto '>
                    <SideBar />
                </div> */}
                <div className='hidden lg:block lg:w-[20%]'>
                    <SideBar />
                </div>
                <div className='w-[100%] lg:w-[80%] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                    <div className='h-[130px] bg-red-400'></div>
                    <div className='h-[130px] bg-red-400'></div>
                    <div className='h-[130px] bg-red-400'></div>
                    <div className='h-[130px] bg-red-400'></div>
                    <div className='h-[130px] bg-red-400'></div>
                    <div className='h-[130px] bg-red-400'></div>
                    <div className='h-[130px] bg-red-400'></div>
                    <div className='h-[130px] bg-red-400'></div>
                    <div className='h-[130px] bg-red-400'></div>
                </div>
            </div>
        </section>
    )
}

export default Category