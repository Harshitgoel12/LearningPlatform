import React from 'react'
import { useNavigate } from 'react-router-dom'

const Mycourses = () => {
    const navigate=useNavigate();
    const GotoAddCoursePage= ()=>{
       navigate("/dashboard/course/add-course")
    }
  return (
    <div className='mt-16'>
           <div className='w-11/12 '>

            <div className='flex flex-row justify-between'>
                <h1 className='text-white font-semibold text-3xl'>MY Courses</h1>
                <button className='text-lg font-semibold text-black rounded-lg bg-[#FFD60A] px-3 py-2'
                onClick={GotoAddCoursePage}>Add Courses</button>
            </div>

            <div className='border-1 border-gray-500 mt-7'>
               <div className='flex flex-row justify-between text-gray-400 border-1 border-gray-500  '>
                <h1 className='my-2 ms-3'>Courses</h1>
                <div className='flex flex-row gap-3 my-2 me-4'>
                    <h1>Price</h1>
                    <h1>Actions</h1>
                </div>
               </div>



    



            </div>
           </div>
    </div>
  )
}

export default Mycourses
