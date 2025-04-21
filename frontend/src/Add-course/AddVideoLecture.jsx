import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { allSection } from '../slices/CourseSlice';
import NestedSection from './NestedSection';
import { addCourseDetails } from '../slices/CourseSlice';
const AddVideoLecture = () => {
  const [section,setSection]=useState();
  const dispatch=useDispatch();
  const selctor= useSelector((state)=>state.Course.course);
  console.log(selctor)
  

   
    const handleChange=(e)=>{
      setSection(e.target.value);
    }

    const handleSubmit= async (e)=>{
       e.preventDefault();
       console.log("lo ji aa gye yha tk")
       try {
        const courseId=selctor._id;
        console.log(courseId)
         const result=await axios.post("http://localhost:8080/api/v1/create-section",{section,courseId},{
          withCredentials:true
         });
        // dispatch(allSection(result.data.allsection));
       console.log(result.data)
   dispatch(addCourseDetails(result.data.updatedcourse))
       } catch (error) {
        console.log("something went wrong while creating the section",error.message
        );
       }
    }
  return (
    <div className='w-11/12'>
      <form className='w-full bg-[#161D29] rounded-lg'>
        <h1 className='font-semibold text-white text-2xl mt-5  ms-3'>Course Builder</h1>
        <div className='ms-5 mt-5'>
            <label htmlFor="" className='text-white '>Section Name</label>
            
            <input type="text" value={section} onChange={handleChange} placeholder='Add a section to build your course' className='bg-gray-600 mt-2 w-11/12 px-2 py-3 rounded-lg  text-gray-200  outline-none focus:border-yellow-200 focus:border-1 shadow-2xl' />
        </div>

        <div>
            <button onClick={handleSubmit} className='text-yellow-300 border-2 rounded-lg mt-5 ms-8 outline-none border-yellow-400 mb-4  bg-gray-800 px-3 py-2'>Create Section</button>
        </div>


        {/* create nested view  */}
            
            { <NestedSection />}

        <div className='flex flex-row justify-end gap-5 me-5 mt-8 mb-8'>
        <button className='bg-gray-500 px-3  rounded-lg font-bold text-lg self-start py-1.5 text-black'>Back</button>
        <button className='bg-yellow-500 px-3  rounded-lg font-bold text-lg self-start py-1.5 text-yellow-black' type='submit'>Next</button>
        </div>
      </form>
    </div>
  )
}

export default AddVideoLecture
