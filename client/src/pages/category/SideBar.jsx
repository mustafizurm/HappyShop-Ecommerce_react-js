import React from 'react'
import { Link } from 'react-router-dom'

const SideBar = () => {

    const categories = [
        { id: 1, name: "Airpodes" },
        { id: 2, name: "Camera" },
        { id: 3, name: "Earphone" },
        { id: 4, name: "Watch" },
        { id: 5, name: "Frigetor" },
        { id: 6, name: "Printers" },
        { id: 7, name: "Processor" },
        { id: 8, name: "Speaker" },
        { id: 9, name: "Trimmers" },
        { id: 10, name: "Television" },
    ]

    const brands = [
        { id: 1, name: "Walton" },
        { id: 2, name: "Lg" },
        { id: 3, name: "Lenovo" },
        { id: 3, name: "Dell" },
        { id: 3, name: "Hp" },
    ]

    return (
        <section>
            <div>
                <h2 className='my-[2px] text-[17px]'>Category</h2>
                <div>
                    {
                        categories.map((category, id) => {
                            return (
                                <Link to={`/category/${category.name.toLocaleLowerCase()}`}>
                                    <div key={id} className='text-gray-600 font-light cursor-pointer text-[14px] mt-[4px]'>{category.name}</div>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
            <div>
                <h2 className='mt-[25px] text-[17px]'>Brand</h2>
                <div className='flex flex-col mt-[8px]'>
                    {
                        brands.map((brand, id) => {
                            return (
                                <div key={id} className='flex items-center gap-1'>
                                    <input className='cursor-pointer' type="checkbox" name="" id="" />
                                    <p className='text-gray-600 font-light text-[14px]'>{brand.name}</p>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
            <div>
                <h2 className='mt-[25px] text-[17px] mb-[10px]'>Price</h2>
                <div className='flex gap-2'>
                    <input className='border w-[50px] text-[12px]' type="number" name="" id="" placeholder='Min' />
                    <input className='border w-[50px] text-[12px]' type="number" name="" id="" placeholder='Max' />
                    <input className='border text-[12px] cursor-pointer bg-red-700 text-white' type="submit" name="" id="" placeholder='Max' />
                </div>
            </div>
        </section>
    )
}

export default SideBar