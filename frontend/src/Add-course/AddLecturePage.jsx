import React, { useState } from 'react'
import ThumbnailUploader from './ThumbnailUploader'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addCourseDetails } from '../slices/CourseSlice';

const AddLecturePage = ({sectionId,LectureDetail,setAddLecture}) => {
    const [video,setVideo]=useState(LectureDetail?.Lecture);
    const [Lectures,setLecture]=useState({
        Title:"",
        Description:""
    })
   const course= useSelector((state)=>state.Course.course);
   const dispatch=useDispatch();

    const handleChange= (e)=>{
     setLecture((prev)=>({...prev,[e.target.name]:e.target.value}))
    }
    const handleSubmit=async(e)=>{
           e.preventDefault();
        try {
            const formData=new FormData();
            console.log("yha tk aa gya hu ma")
            const courseId=course?._id;
            formData.append("Title",Lectures.Title);
            formData.append("Description",Lectures.Description);
            formData.append("SectionId",sectionId);
            formData.append("CourseId",courseId)
            formData.append("Lecture",video);
            const response = await axios.post("http://localhost:8080/api/v1/create-subsection",formData,{
                withCredentials:true
            })
            console.log(response.data.updatedcourse);
            dispatch(addCourseDetails(response.data.updatedcourse))
            setAddLecture(false);
        } catch (error) {
            console.log("something went wrong while creating the subsection",error.message);
        }
    }

    const handleclick=()=>{
        setAddLecture(false);
    }
  return (
    <div className='absolute w-1/2  bg-[#161D29] top-10 right-92 shadow-2xl rounded-lg '>
    <form onSubmit={handleSubmit} className=''>
    <div className='text-white flex flex-row justify-between px-4 w-full bg-[#2C333F]'>
        <h1 className='text-2xl font-bold mt-7 ms-3 mb-3'>Adding Lecture</h1>
        <h1 className='text-xl mt-7 ms-3 mb-3' onClick={handleclick}>Cross</h1>
    </div>
    <ThumbnailUploader setValue={setVideo} type={"video"}/>

    <div className='flex flex-col  '>
        <label htmlFor="" className='text-white text-md ms-8 mt-6 mb-2'>Lecture Title</label>
    <input type="text" name='Title' value={LectureDetail?.Title} onChange={handleChange} className='bg-[#2C333F] ms-8 w-11/12 px-2 py-3 rounded-lg  text-gray-400  outline-none focus:border-yellow-200 focus:border-1 shadow-2xl' placeholder='Enter Lecture Title' />
    </div>
    <div className='flex flex-col '>
        <label htmlFor="" className='text-white text-md ms-8 mt-2 mb-2'>Lecture Description</label>
    <textarea rows={6} name='Description' value={LectureDetail?.Description} onChange={handleChange} type="text" className='bg-[#2C333F] ms-8 w-11/12 px-2 py-3 rounded-lg  text-gray-400  outline-none focus:border-yellow-200 focus:border-1 shadow-2xl' placeholder='Enter Lecture Title' />
    </div>

    <div className='flex flex-row justify-end  me-12 mt-4'>
        <button  onClick={handleSubmit}
        className='text-black bg-yellow-400 font-bold px-4 py-2 rounded-lg mb-6'>Save</button>
    </div>
    </form>
    </div>
  )
}

export default AddLecturePage
