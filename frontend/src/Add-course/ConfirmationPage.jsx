import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { userData } from '../slices/Profileslice';
import { useNavigate } from 'react-router-dom';

const ConfirmationPage = () => {
    const [checkbox,setCheckbox]=useState(false);
  const selctor= useSelector((state)=>state.Course.course);
  const dispatch=useDispatch();

 const navigate=useNavigate();


    const handleChange=(e)=>{
        setCheckbox(!checkbox);
    }
    const courseId=JSON.parse(localStorage.getItem("courseId"));
    const handleSubmit= async(e)=>{
        e.preventDefault();
      try {

        
        console.log(selctor)
        console.log(checkbox);
          const response=await axios.post("http://localhost:8080/api/v1/publishcourse",{checkbox,courseId},{
            withCredentials:true
          })
          console.log(response);
          localStorage.setItem("user",JSON.stringify(response.data.userdata));
           dispatch(userData(response.data.userdata));
           navigate("/dashboard/my-courses")
       } catch (error) {
        console.log("something went wrong while publishing the course to the production",error.message);
       }
    }
  return (
    <div className='bg-[#161D29] w-full h-1/2 mt-40'>
      <p className='text-white text-3xl mt-8 ms-8 font-bold'>Publish Settings</p>
      
      <div className='flex align-baseline mt-7'>
      <input onChange={handleChange}  value={checkbox} type="checkbox" className=' ms-6 w-5 h-7' /><span className='text-gray-500 text-xl ms-2'>Make this course as public</span>
      </div>

      <div className='flex flex-row items-end justify-end gap-5 me-5 mt-8 mb-8'>
        <button className='bg-gray-500 px-3  rounded-lg font-bold text-lg self-start py-1.5 text-black'>Back</button>
        <button className='bg-yellow-500 px-3  rounded-lg font-bold text-lg self-start py-1.5 text-yellow-black' onClick={handleSubmit}>Publish Course</button>
        </div>
    </div>
  )
}

export default ConfirmationPage
