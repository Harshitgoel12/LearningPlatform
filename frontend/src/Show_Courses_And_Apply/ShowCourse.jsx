import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ShowCourse = () => {

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  const [courses,setCourses]=useState([]);
  const [AllCourses,setAllCourses]=useState([]);
  const [name,setName]=useState();
  const params= useParams();
  if(params.coursename!=name){
  setName(params.coursename);
  }
  const findCourse= async ()=>{
    try {
       const data=await axios.get("http://localhost:8080/api/v1/getcourse/"+params.coursename,{
        withCredentials:true
       });
       console.log(data.data.response);
       setCourses(data.data.response)
    } catch (error) {
      console.log("something went wrong while fatching the course",error.message);
    }
  }

  const findAllCourses = async()=>{
    try {
        const response = await axios.get("http://localhost:8080/api/v1/findallCourses/"+params.coursename,{
          withCredentials:true
        })
        setAllCourses(response.data.response)

    } catch (error) {
      console.log("something went wrong while fetching all courses",error.message);
    }
   }


  useEffect(()=>{
   findCourse();
  },[name])


  useEffect(()=>{
      findAllCourses();
  },[name])

 
  return (
    <div className='min-h-screen bg-[#000814]'>
      <div className='w-full h-60 bg-[#161D29]'>
        <h1 className='text-gray-500  mt-10 ms-4'>Home/Catalog/
        <span className='text-yellow-400'>{params.coursename} 
        </span>
        </h1>

        <h1 className='text-gray-100 text-4xl mt-2 ms-2'>{params.coursename}</h1>
        <p>Description</p>
      </div>

      <h1 className='text-white text-3xl mt-10 ms-4'>{params.coursename} Courses</h1>
      {courses.length==0&&<h1 className=' text-2xl mt-10 text-center text-gray-400 '>Not Course Found</h1>}
      <Slider {...settings}>
        {courses&&courses.map((ele,idx)=>{
    return( <div className=''>
      <img src={ele.Thumbnail} alt=""  className='w-80 h-66 mt-6'/>
      <h1 className='text-white text-xl ms-3'>{ele.Title}</h1>
      <h1 className='text-white ms-2 text-xl' >By <span className='text-yellow-300'>{ele.user.firstName} {ele.user.lastName}</span></h1>
      <h1 className='text-white text-xl ms-2'>Rs. {ele.Price}</h1>
     </div>
    )
     })
    }
     </Slider>

     
     <h1 className='text-white text-3xl mt-16 ms-8'>All Courses</h1>
      {AllCourses.length==0&&<h1 className=' text-2xl mt-12 text-center text-gray-400 mb-16'>Not Course Found</h1>}
      <Slider {...settings}>
        {AllCourses&&AllCourses.map((ele,idx)=>{
    return( <div className='mb-12'>
      <img src={ele.Thumbnail} alt=""  className='w-80 h-66 mt-6'/>
      <h1 className='text-white text-xl ms-3'>{ele.Title}</h1>
      <h1 className='text-white ms-2 text-xl' >By <span className='text-yellow-300'>{ele.user.firstName} {ele.user.lastName}</span></h1>
      <h1 className='text-white text-xl ms-2'>Rs. {ele.Price}</h1>
     </div>
    )
     })
    }
     </Slider>
    </div>
  )
}

export default ShowCourse
