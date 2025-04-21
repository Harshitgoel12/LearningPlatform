import React, { useState } from 'react'
import { TbPlayerPlayFilled } from 'react-icons/tb';


const ViewLecture = ({LectureDetail,setAddLecture}) => {
  return (
    <div className='absolute w-1/2  bg-[#161D29] top-10 right-92 shadow-2xl rounded-lg '>
    <form  className=''>
    <div className='text-white flex flex-row justify-between px-4 w-full bg-[#2C333F]'>
        <h1 className='text-2xl font-bold mt-7 ms-3 mb-3'>Adding Lecture</h1>
        <h1 className='text-xl mt-7 ms-3 mb-3' onClick={()=>setAddLecture(false)}>Cross</h1>
    </div>
   <div className='flex justify-center'>
    <div className="w-11/12 h-3/4 bg-gray-800 flex items-center mt-3 justify-center p-6 rounded-lg">
  <video 
    src={LectureDetail.Lecture} 
    className="bg-black w-full  max-w-4xl h-72 rounded-md shadow-lg border-2 border-white " 
    controls
  />
</div>
</div>

    <div className='flex flex-col  '>
        <label htmlFor="" className='text-white text-md ms-8 mt-6 mb-2'>Lecture Title</label>
    <input type="text" name='Title' value={LectureDetail.Title} className='bg-[#2C333F] ms-8 w-11/12 px-2 py-3 rounded-lg  text-gray-400  outline-none focus:border-yellow-200 focus:border-1 shadow-2xl' placeholder='Enter Lecture Title' />
    </div>
    <div className='flex flex-col mb-8 '>
        <label htmlFor="" className='text-white text-md ms-8 mt-2 mb-2'>Lecture Description</label>
    <textarea rows={6} name='Description' value={LectureDetail.Description} type="text" className='bg-[#2C333F] ms-8 w-11/12 px-2 py-3 rounded-lg  text-gray-400  outline-none focus:border-yellow-200 focus:border-1 shadow-2xl' placeholder='Enter Lecture Title' />
    </div>

   
    </form>
    </div>
  )
}

export default ViewLecture
