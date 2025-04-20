import React, { useRef, useState } from 'react'
import { WithContext as ReactTags } from 'react-tag-input';
import ThumbnailUploader from './ThumbnailUploader';
import {addCourseDetails} from "../slices/CourseSlice"
import "../index.css"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

function AddCourseFirstPageForm() {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const delimiters = [13, 188];
    const [tags, setTags] = useState([]);
    const [Requirements,setRequirements]=useState([]);
    const [image,setImage]=useState();
    const [course,setCourse]=useState({
      Title:"",
      Description:"",
      Price:"",
      Category:"",
      Benefits:"",
    });
    const handleChange = (e)=>{
        setCourse((prev)=>({...prev,Tags:tags,Requirements:Requirements,[e.target.name]:e.target.value}));

    }
  
   const inputref=useRef();
   const clearref=useRef([]);
  const handleDelete = i => {
    setTags(tags.filter((tag, index) => index !== i));
  };

  const handleAddition = tag => {
    setTags([...tags, tag]);
  };

  const handleRequirements= (e)=>{
    const data=inputref.current.value;
      setRequirements((prev)=>([...prev,data]))
  }

  const handleClear = (idxToRemove) => {
    setRequirements(prev => {
      const updated = [...prev];
      updated.splice(idxToRemove, 1);
      return updated;
    });


    const targetRef = itemRefs.current[idxToRemove];
    console.log('Removing:', targetRef?.innerText);
  };
const handleSubmit=async(e)=>{
  e.preventDefault();
  try {
    const tagvalue=tags.map((ele)=>ele.text);
    console.log("tag value is",tagvalue);
     const formData= new FormData();
    formData.append("Title",course.Title);
    formData.append("Description",course.Description);
    formData.append("Price",course.Price);
    formData.append("Category",course.Category);
    formData.append("Tags",tagvalue);
    formData.append("Benefits",course.Benefits);
    formData.append("Requirements",Requirements);
    formData.append("Thumbnail",image);
    console.log(course,tags,Requirements,image)
    const response=await axios.post("http://localhost:8080/api/v1/add-course",formData,{
      withCredentials:true,
     
    })
   dispatch(addCourseDetails(response.data.result));

    navigate("/dashboard/course/create-section");
  } catch (error) {
    console.log("something went wrong while adding course details",error.message);
  }

}
  return (
    <div className='w-11/12 sm:ms-8 ms-4 md:ms-0'>
      <form className='w-full bg-gray-900 px-3 py-3 rounded-xl ' onSubmit={handleSubmit}>
        <div className='flex flex-col  ms-5 mt-5'>
            <label htmlFor="" className='text-white'>Course Title</label>
            <input type="text " name='Title' onChange={handleChange} value={course.Title} className='bg-gray-800 w-11/12 px-2 py-3 rounded-lg  text-gray-400  outline-none focus:border-yellow-200 focus:border-1 shadow-2xl' placeholder='Enter Course Title' />
        </div>
        <div className='ms-5 mt-5'>
            <label htmlFor="" className='text-white'>Course Short Description</label>
            <textarea name="Description" onChange={handleChange} value={course.Description}   className='bg-gray-800 shadow-2xl  rounded-xl h-32 w-11/12 outline-none ps-5 pt-1 text-white focus:border-yellow-200 focus:border-1' id=""></textarea>
        </div>
        <div className='flex flex-col ms-5 mt-5'>
            <label htmlFor="" className='text-white'>Course Price</label>
            <input type="number" name='Price' onChange={handleChange} value={course.Price} placeholder='Enter Course Price' className='bg-gray-800 no-spinner outline-none  ps-2 rounded-lg w-11/12 px=2 py-3 text-white focus:border-yellow-200 focus:border-1'/>
        </div>
        <div className='flex flex-col ms-5 mt-5'>
            <label htmlFor="" className='text-white'> Course Category</label>
            <select name="Category" value={course.Category} onChange={handleChange} id="" className='text-gray-400 w-11/12 px-2 bg-gray-800     py-3 rounded-lg outline-none focus:border-yellow-200 focus:border-1 shadow-2xl'>
                <option value="Choose a Category" className=''> Choose a Category</option>
            </select>
        </div>

        <div className='flex flex-col ms-5 mt-5'>
          <label htmlFor=""  className='text-white'>Tags</label>
         
        <ReactTags
      tags={tags}
      handleDelete={handleDelete}
      delimiters={delimiters}
      handleAddition={handleAddition}
      placeholder="Type and press enter"
    />

        </div>
        
        <div>
            <ThumbnailUploader setImage={setImage} type={"image"}/>
        </div>
        <div className='flex flex-col mt-5 ms-5'>
            <label htmlFor="" className='text-white'>Benefits of the Course</label>
            <textarea name="Benefits" value={course.Benefits} onChange={handleChange}  id="" className='bg-gray-800 shadow-2xl  rounded-xl h-32 w-11/12 outline-none ps-5 pt-1 text-white focus:border-yellow-200 focus:border-1'></textarea>
        </div>
        <div className='flex flex-col ms-5 mt-5'>
            <label htmlFor="" className='text-white'>Requirements/Instructions</label>
            <input type="text" ref={inputref}   className='bg-gray-800 no-spinner outline-none  ps-2 rounded-lg w-11/12 px=2 py-3 text-white focus:border-yellow-200 focus:border-1'/>
        </div>
        <p className='text-yellow-400  font-semibold cursor-pointer ms-8 mt-3' onClick={handleRequirements}>Add</p>

        {Requirements?.map((ele,idx)=>(
                 <div className='flex flex-row gap-3 mt-2'  ref={el => clearref.current[idx] = el}>
          <p className='text-white  ' key={idx} >{ele}</p>
          <div className='px-3 py-0.5 rounded-xl  bg-gray-700'>
          <p className='text-white text-sm cursor-pointer' onClick={()=>handleClear(idx)}>Clear</p>
          </div>
          </div>
        ))}
       
<div className='flex justify-end me-4 mb-5'>
        <button className='text-black bg-yellow-400 px-4 py-2 rounded-lg font-bold'type='submit'>Next</button>
        </div>
      </form> 
    </div>
  )
}

export default AddCourseFirstPageForm
