import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { FaRegShareSquare } from "react-icons/fa";
import AccordionItem from './AccordionItem';
import Cart from '../cart/Cart';
import { useDispatch } from 'react-redux';


const ShowDetailsOfCourse = () => {
    const dispatch = useDispatch();
    const params=useParams();
    const navigate= useNavigate();
    const [courseData,setCourseData]=useState();
    const [AllreadyAdded,setAllreadyAdded]=useState(false);

    const handleAddToCart= ()=>{
        let cartdetails=[];
         cartdetails=JSON.parse(localStorage.getItem("Cart"))==null?[]:JSON.parse(localStorage.getItem("Cart"));
         setAllreadyAdded(true);
        cartdetails.push(courseData);
        console.log(cartdetails)
        localStorage.setItem("Cart", JSON.stringify(cartdetails));
        dispatch(Cart(cartdetails));
        
    }

    const handleGOTOCART= ()=>{
        navigate("/dashboard/cart")
    }


    useEffect(()=>{
        const data= JSON.parse(localStorage.getItem("Cart"));
        data?.map((ele)=>{
            if(ele._id==params.id){
                setAllreadyAdded(true);
            }
        })
    },[])



    const fetchCourseDetail= async()=>{
        console.log("course details")
       try {
        const response= await axios.get("http://localhost:8080/api/v1/ParticularCourseDetail/"+params.id,{
             withCredentials:true
         })
         console.log(response.data.response);
         setCourseData(response.data.response);
       } catch (error) {
        console.log("something went wrong while fetching the data of course",error.message);
       }

    }
    useEffect(()=>{
        fetchCourseDetail();
    },[])
    
    if(!courseData){
        return <h1>Loading</h1>
    }
   const data= courseData.Tags[0].split(",");
   const sectionLength= courseData.Sections.length;
   let lectureLength=0;
    courseData.Sections.map((ele)=>{
        lectureLength+=ele.SubSections.length;
    });
  
  return (
    <div className='min-h-screen bg-[#000814] text-white'>
       <div className='flex  gap-10 mt-8'>
        <div className='w-7/12 ms-12 '>
            <h1 className='text-gray-200 text-4xl font-bold'>{courseData.Title}</h1>
            <p className='text-gray-400 text-lg mt-4'>{courseData.Description}</p>
            <h1 className='text-lg mt-4 '>Created By {courseData.user.firstName} {courseData.user.lastName}</h1>

            <div className='border-gray-600 border-1 w-full pb-10 mt-40 '>
                <h1 className='text-white text-3xl font-bold pt-10 ms-4'>What you'll learn </h1>
                <p className='ms-4 mt-3 text-lg'>{courseData.Benefits
                }</p>
            </div>

            <h1 className='text-white text-3xl font-bold mt-9 '>Course Content</h1>
            <div className='flex justify-between mt-2'>
            <p className='text-white ms-2 text-lg'>{sectionLength} Section(s) {"  "}  {lectureLength} Lecture(s)</p>
            <p className='text-yellow-400  me-10'>Collapse all sections</p>
            </div>


            <div className=" mx-auto mt-7 rounded-md overflow-hidden shadow-lg mb-10">
        {

            courseData.Sections.map((ele,idx)=>{
          return <>
          {console.log(ele.SubSections)}
      <AccordionItem title={ele.Section} lectures={ele.SubSections.length} children={ele.SubSections} />
      
      </>
            })}
    </div>


        </div>
        {/* card are create over here */}
        <div className='w-1/3 flex flex-col  rounded-xl bg-[#2C333F] mb-7 h-fit'>
          <div className='w-11/12 mb-8  flex flex-col items-center  mt-3'>
            <img src={courseData.Thumbnail} alt=""  className='rounded-2xl mt-4 ms-9 h-68 w-11/12 '/>
            <p className='text-white font-bold text-3xl ms-12 mt-4  text-start w-full'>₹{courseData.Price}</p>
            <button className='bg-yellow-400 text-black px-2 py-2.5 text-md mt-4 font-semibold w-11/12 rounded-lg' >Buy Now</button>
            {!AllreadyAdded&&<button className='bg-gray-900 text-white px-3 py-2.5 text-md mt-3 font-semibold w-11/12 rounded-lg' onClick={handleAddToCart}
            >Add To Cart</button>}
            {AllreadyAdded&&<button className='bg-gray-900 text-white px-3 py-2.5 text-md mt-3 font-semibold w-11/12 rounded-lg' onClick={handleGOTOCART}
            >Go To Cart</button>}
            <h1 className='text-gray-300  text-center mt-4 w-full'>30-Day Money-Back Guarantee</h1>

             <h1 className='text-2xl text-white font-bold ms-12 mt-4 w-full text-start  '>This course includes</h1>

             {data?.map((ele)=>{
                 return (
                    <h1 className='text-green-500 mt-3  w-full text-start ms-12'>✓{"  "}{ele}</h1>
                 )
             })}

           <span className='text-yellow-400 font-bold text-2xl mt-3 text-center flex justify-center gap-1  w-full'><FaRegShareSquare className='text-center' />
           <span className='text-center'>Share</span>
           </span>


            </div>
        </div>
       </div>
    </div>
  )
}

export default ShowDetailsOfCourse
