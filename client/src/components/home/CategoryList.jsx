import React from 'react'
import "../../assets/css/home/home.css"
import airpodes from "../../assets/img/airpods.png"
import camera from "../../assets/img/camera.png"
import earphone from "../../assets/img/earphones.png"
import frigetor from "../../assets/img/frigetor.png"
import printers from "../../assets/img/printers.png"
import processor from "../../assets/img/processor.png"
import speaker from "../../assets/img/speaker.png"
import trimmers from "../../assets/img/trimmers.png"
import tv from "../../assets/img/tv.png"
import watch from "../../assets/img/watch.png"
import { Link } from 'react-router-dom'

const categories = [
  {
    id: 1,
    source: airpodes,
    title: "Airpodes"
  },
  {
    id: 2,
    source: camera,
    title: "Camera"
  },
  {
    id: 3,
    source: earphone,
    title: "Earphone"
  },
  {
    id: 4,
    source: frigetor,
    title: "Frigetor"
  },
  {
    id: 5,
    source: printers,
    title: "Printers"
  },
  {
    id: 6,
    source: processor,
    title: "Processor"
  },
  {
    id: 7,
    source: speaker,
    title: "Speaker"
  },
  {
    id: 8,
    source: trimmers,
    title: "Trimmers"
  },  {
    id: 9,
    source: tv,
    title: "Television"
  },
  {
    id: 10,
    source: watch,
    title: "Watch"
  },
]


const CategoryList = () => {
  return (
    <section className='mt-[50px] mb-[50px]'>
      <div className='w-[95%] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px] m-auto overflow-auto flex gap-3 justify-between'>
        {
          categories.map((category, id)=> {
            return(
              <Link to={`/category/${category.title.toLocaleLowerCase()}`}><div key={id} className='min-w-[100px]'>
                <img className='w-[50px] h-[50px] md:w-[70px] md:h-[70px] bg-gray-100 rounded-full p-[10px] flex justify-center items-center cursor-pointer' src={category.source} alt="" />
                <p className='my-[14px] text-gray-600'>{category.title}</p>
              </div>
              </Link>
            )
          })
        }
      </div>
    </section>
  )
}

export default CategoryList