import React from 'react'
import "../../assets/css/AddProduct.css"
import { useState } from 'react'

const AddProduct = () => {
const [formData, setFormData] = useState(null)
const [data, setData] = useState({
  productName: "",
  brand: "",
  category: "",
  images: [],
  price: "",
  sellingPrice: "",
  description: "",
});



  const changeHandler = async (e) => {
    if(e.target.name === "image"){
      const file = e.target.files[0];

      const newFormData = new FormData()
      newFormData.append('file', file)

      // setData({...data, "images": [...data.images]})
     const res = await fetch("http://localhost:5000/api/upload_productImage", {
      method: "POST",
      body: newFormData,
      credentials: "include"
     })

     const response = await res.json()
     console.log(response.data)
    } else{
      setData({...data, [e.target.name]: e.target.value})
    }
  }

  const submitHandler = (e) => {
    e.preventDefault()
    setFormData(data)
  }

  console.log(formData)

  return (
    <section>
      <form onSubmit={(e)=> {submitHandler(e)}} action="" className=''>
        <h1 className='text-3xl'>Upload Product</h1>
        <label className='flex flex-col' htmlFor="">
          <span>Product Name:</span>
          <input onChange={(e)=> {changeHandler(e)}} name='productName' className='' type="text" />
        </label>
        <label className='flex flex-col' htmlFor="">
          <span>Brand Name:</span>
          <input onChange={(e)=> {changeHandler(e)}} name='brand' className='' type="text" />
        </label>
        <label className='flex flex-col' htmlFor="">
          <span>category:</span>
          <select onChange={(e)=> {changeHandler(e)}} name="category" id="" defaultChecked>
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
            <input onChange={(e)=> {changeHandler(e)}} type="file" name="image" id="uploadImage" className='hidden' />
          </div>
          <i className="fa-solid fa-upload absolute top-[50%] left-[50%] transform translate-[-50%] text-7xl"></i>
        </label>
        <p className='text-red-700'>*Please Upload Product Image</p>
        <div className='flex gap-2'>
          <img className='w-[70px] h-[70px]' src=".." alt="" />
          <img className='w-[70px] h-[70px]' src=".." alt="" />
          <img className='w-[70px] h-[70px]' src=".." alt="" />
          <img className='w-[70px] h-[70px]' src=".." alt="" />
        </div>
        <label className='flex flex-col' htmlFor="">
          <span>Price</span>
          <input onChange={(e)=> {changeHandler(e)}} name='price' className='' type="number" />
        </label>
        <label className='flex flex-col' htmlFor="">
          <span>Selling Price:</span>
          <input onChange={(e)=> {changeHandler(e)}} name='sellingPrice' className='' type="number" />
        </label>
        <label htmlFor="">
          <span>Description:</span>
          <textarea onChange={(e)=> {changeHandler(e)}} name="description" id="" className='w-[100%] h-[200px] bg-gray-200 mt-2 outline-red-500 py-[10px] px-[15px]'></textarea>
        </label>
        <button className='w-[100%] bg-red-500 py-[5px] text-white cursor-pointer hover:bg-red-700'>Upload Product</button>
      </form>
    </section>
  )
}

export default AddProduct