import React from 'react'
import "../../assets/css/AddProduct.css"

const AddProduct = () => {
  return (
    <section>
      <form action="" className=''>
        <h1 className='text-3xl'>Upload Product</h1>
        <label className='flex flex-col' htmlFor="">
          <span>Product Name:</span>
          <input className='' type="text" />
        </label>
        <label className='flex flex-col' htmlFor="">
          <span>Brand Name:</span>
          <input className='' type="text" />
        </label>
        <label className='flex flex-col' htmlFor="">
          <span>category:</span>
          <select name="" id="" defaultChecked>
            <option value="laptop">laptop</option>
            <option value="computer">computer</option>
            <option value="mobile">mobile</option>
            <option value="airpod">airpod</option>
            <option value="earphone">earphone</option>
          </select>
        </label>
        <label htmlFor="">Product Image:</label>
        <label htmlFor="uploadImage" className='relative'>
          <div className='w-[100%] h-[200px] bg-gray-200'>
            <input type="file" name="" id="uploadImage" className='hidden' />
          </div>
          <i className="fa-solid fa-upload absolute top-[50%] left-[50%] transform translate-[-50%] text-7xl"></i>
        </label>
        <p className='text-red-700'>*Please Upload Product Image</p>
        <div className='flex gap-2'>
          <img className='w-[70px] h-[70px]' src="" alt="" />
          <img className='w-[70px] h-[70px]' src="" alt="" />
          <img className='w-[70px] h-[70px]' src="" alt="" />
          <img className='w-[70px] h-[70px]' src="" alt="" />
        </div>
        <label className='flex flex-col' htmlFor="">
          <span>Price</span>
          <input className='' type="number" />
        </label>
        <label className='flex flex-col' htmlFor="">
          <span>Selling Price:</span>
          <input className='' type="number" />
        </label>
        <label htmlFor="">
          <span>Description:</span>
          <textarea name="" id="" className='w-[100%] h-[200px] bg-gray-200 mt-2 outline-red-500 py-[10px] px-[15px]'></textarea>
        </label>
        <button className='w-[100%] bg-red-500 py-[5px] text-white cursor-pointer hover:bg-red-700'>Upload Product</button>
      </form>
    </section>
  )
}

export default AddProduct