import React from 'react'
import { useNavigate } from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux"
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { FaPlus } from "react-icons/fa";

const Mycourses = () => {

  const dispatch= useDispatch();
  const user= useSelector((state)=> state.Profile.user);
  const course=user.myCourse
  
    const navigate=useNavigate();
    const GotoAddCoursePage= ()=>{
       navigate("/dashboard/course/add-course")
    }
  return (
    <div className='mt-16 mb-20 flex justify-center md:justify-start'>
           <div className='w-11/12 '>

            <div className='flex flex-row justify-between  '>
                <h1 className='text-white font-semibold text-3xl'>MY Courses </h1>
                <button className='text-lg font-semibold text-black rounded-lg bg-[#FFD60A] px-3 py-2'
                onClick={GotoAddCoursePage}>
                  <span className='flex flex-row '>
                  Add Courses <FaPlus className='text-sm mt-2 ms-1' />
                  </span >
                  </button>
            </div>

            <div className='border-1 border-gray-500 mt-7'>
               <div className='flex flex-row justify-between text-gray-400 border-1 border-gray-500  '>
                <h1 className='my-2 ms-3 text-lg'>Courses</h1>
                <div className='flex flex-row gap-9 my-2 me-4 '>
                    <h1 className='text-lg'>Price</h1>
                    <h1 className='text-lg'>Actions</h1>
                </div>
               </div>
{course.map((ele,idx)=>{
return (
<>
<div className='flex flex-row justify-between'>
<div className='flex flex-row'>
     <div className='mt-8 ms-8 mb-8'>
      <img src={ele.Thumbnail} alt="" className='h-36 w-44  rounded-lg' />
     </div>
     <div className=' mt-10 ms-3'>
      <h1 className='text-white text-lg font-bold '>{ele.Title}</h1>
      <p className='text-gray-400 text-sm mt-1'>{ele.Description}</p>
      <p className={`${ele.state=="Published"?"text-yellow-400":"text-red-400"} mt-5`}>{ele.state}</p>
     </div>
     </div>

     <div className='flex flex-row gap-10 me-4 mt-4'>
      <h1 className='text-gray-400 mw-3 text-lg'>₹{ele.Price}</h1>
      <div className='flex flex-row gap-3'>
      <h1 className='text-yellow-400 '><MdEdit  className='text-2xl'/></h1>
      <h1 className='text-red-400'><MdDelete className=' text-2xl'/></h1>
      </div>
     </div>
     
     </div>
     <hr className='text-gray-500'/>
     </>
)

})}

            </div>
           </div>
    </div>
  )
}

export default Mycourses
