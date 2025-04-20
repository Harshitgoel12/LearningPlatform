import React from 'react'
import ThumbnailUploader from './ThumbnailUploader'

const AddLecturePage = ({sectionId,setAddLecture}) => {
    const handleclick=()=>{
        setAddLecture(false);
    }
  return (
    <div className='absolute w-1/2  bg-[#161D29] top-10 right-92 shadow-2xl rounded-lg '>
    <div className=''>
    <div className='text-white flex flex-row justify-between px-4 w-full bg-[#2C333F]'>
        <h1 className='text-2xl font-bold mt-7 ms-3 mb-3'>Adding Lecture</h1>
        <h1 className='text-xl mt-7 ms-3 mb-3' onClick={handleclick}>Cross</h1>
    </div>
    <ThumbnailUploader type={"video"}/>

    <div className='flex flex-col  '>
        <label htmlFor="" className='text-white text-md ms-8 mt-6 mb-2'>Lecture Title</label>
    <input type="text" className='bg-[#2C333F] ms-8 w-11/12 px-2 py-3 rounded-lg  text-gray-400  outline-none focus:border-yellow-200 focus:border-1 shadow-2xl' placeholder='Enter Lecture Title' />
    </div>
    <div className='flex flex-col '>
        <label htmlFor="" className='text-white text-md ms-8 mt-2 mb-2'>Lecture Description</label>
    <textarea rows={6} type="text" className='bg-[#2C333F] ms-8 w-11/12 px-2 py-3 rounded-lg  text-gray-400  outline-none focus:border-yellow-200 focus:border-1 shadow-2xl' placeholder='Enter Lecture Title' />
    </div>

    <div className='flex flex-row justify-end  me-12 mt-4'>
        <button className='text-black bg-yellow-400 font-bold px-4 py-2 rounded-lg mb-6'>Save</button>
    </div>
    </div>
    </div>
  )
}

export default AddLecturePage
