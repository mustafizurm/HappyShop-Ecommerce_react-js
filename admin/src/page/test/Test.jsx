import React from 'react'
import { useState } from 'react'

const Test = () => {

    const [image, setImage] = useState()
    const [imageUrl, setImageUrl] = useState()

const changeHandler = async (e) => {
    const file = e.target.files[0];
    const url = URL.createObjectURL(file)
    setImageUrl(url)
    setImage(file)
}

const submitHandler = async () => {
    console.log(image)
}
 
    return (
        <div>
            <label htmlFor="uploadImage">
                <div className='w-[100%] h-[180px] bg-gray-300 flex justify-center items-center'>
                    {
                        image ? <img className='max-w-[100px] max-h-[100px]' src={imageUrl} alt="" /> : "Upload Image"
                    }
                    <input className='hidden' type="file" onChange={(e)=> {changeHandler(e)}} name="image" id="uploadImage" />
                </div>
            </label>
            <button className='flex justify-center items-center bg-red-500 p-[4px] text-white m-auto mt-[5px] cursor-pointer' onClick={submitHandler}>Upload Image</button>
        </div>
    )
}

export default Test