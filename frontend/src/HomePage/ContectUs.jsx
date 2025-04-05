import React from 'react'
import { IoIosChatboxes } from "react-icons/io";
import { FaEarthAmericas } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import CountryCode from "../data/countrycode.json"

function ContectUs() {
  return (
    <div className=' w-screen bg-[#000814] h-screen '>
      <div className='flex flex-row  lg:gap-6 gap-4 lg:flex-nowrap flex-wrap'>
        {/* left part */}
        <div className=' w-screen   md:w-11/12 lg:w-1/2 h-screen flex md:justify-end  justify-center '>
          <div  className=' w-11/12 h-2/3  md:w-11/12 xl:w-2/3 xl:h-1/2 md:h-7/12 bg-[#161D29] ps-5 pt-5 mt-16 rounded-xl '>
              <div className='flex text-gray-400'>
              <IoIosChatboxes className='text-2xl  me-3'/>
           <h1 className='text-white text-lg font-bold text-center'>Chat on us</h1>
              </div>
              <p className='text-gray-400 text-sm w-3/4  mt-1'>Our friendly team is here to help.
              </p>
              <span className='font-semibold text-gray-400 text-sm ms-2'>
               info@studynotion.com
               </span>



               <div className='flex text-gray-400 mt-8'>
              <FaEarthAmericas className='text-2xl  me-3'/>
           <h1 className='text-white text-lg font-bold text-center'>Visit Us</h1>
              </div>
              <p className='text-gray-400 text-sm w-3/4  mt-1'>Come and say hello at our office HQ.
              </p>
              <span className='font-semibold text-gray-400 text-sm w-1/4 '>
              Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016
               </span>



               <div className='flex text-gray-400 mt-8'>
              <IoCall className='text-2xl  me-3'/>
           <h1 className='text-white text-lg font-bold text-center'>Call us</h1>
              </div>
              <p className='text-gray-400 text-sm w-3/4  mt-1'>Mon - Fri From 8am to 5pm
              </p>
              <span className='font-semibold text-gray-400 text-sm ms-2'>
              +91 6366 000 666
               </span>


          </div>



        </div>

          {/*  Right Part */}
          
        <div className='  w-11/12  lg:w-2/3 min-h-screen flex lg:justify-start justify-center lg:mt-16 mt-10 lg:static 
        relative -top-40 '>

 
           <div className='border-2 w-11/12 lg:ms-0 ms-12 border-gray-500 rounded-lg '>
           <div className=' w-full'>
           <div className='w-3/4  mt-12 ms-8'>
               <h1 className='text-white text-4xl font-bold'>Got a Idea? We've got the skills. Let's team up</h1>
               <p className='text-gray-400 mt-5'>Tell us more about yourself and what you're got in mind.</p>

               </div>




<div className='text-white mt-5 w-full  '>
               <div className='flex w-full px-12 gap-4  justify-center mt-3'>
        <div className='flex flex-col w-full mb-4'>
            <label htmlFor="firstname" className='mb-2'>First Name <span className='text-red-500'>*</span></label> 
            <input type="text" id='firstname'  name='firstName'
             className='w-full focus:border-white shadow-3xl rounded-lg px-3 py-4 bg-[#161D29] outline-none' placeholder='Enter first name'/>
        </div>
        <div className='flex flex-col w-full mb-4'>
            <label htmlFor="lastName" className='mb-2'>Last Name <span className='text-red-500'>*</span></label>
            <input type="text" id='lastName' 
             name='lastName' className='w-full focus:border-white shadow-2xl rounded-lg px-3 py-3 bg-[#161D29] outline-none' placeholder='Enter Last name'/>
        </div>
    </div>




    <div className='flex flex-col w-full px-12 mt-5 mb-4'>
        <label htmlFor="email" className='mb-2'>Email Id</label>
        <input type="email" id='email'  name='email' className='w-full focus:border-white shadow-3xl rounded-lg px-3 py-4 bg-[#161D29] outline-none' placeholder='Enter Email address' />
    </div>


<div className='flex flex-col w-11/12  mb-4'>


    <label htmlFor="phoneno" className=' ms-12 mt-4 '>Phone Number<span className='text-red-500'>*</span></label>
    <div className='text-white mt-3 w-full flex   '>
              

            
            <select
  name="countryCode"
  id="countryCode"
  className="bg-[#161D29] text-gray-400 text-center font-bold rounded-lg  border  ms-12 border-white px-3 py-3 focus:outline-none w-24 outline-none  h-12 "
>
  {CountryCode.map((ele, idx) => (
    <option key={idx} value={ele.code} className="text-gray-400 w-10 truncate">
      {ele.code} - {ele.country}
    </option>
  ))}
</select>
      
        <div className='flex flex-col w-3/4 ms-6   '>
           
            <input type="text" id='phone' 
             name='phone' className='w-full focus:border-white shadow-2xl rounded-lg px-3 py-4 bg-[#161D29] outline-none' placeholder='Enter Phone Number'/>
        </div>
    </div>


    </div>



 <label htmlFor="textfield"  className=' block text-gray-400 mt-6 ms-12 text-lg'>Message</label>
    <div className='flex flex-col  px-12 mt-2 w-full   ' id='textfield'>
           
           <textarea type="text" id='lastName' 
            name='lastName' className=' bg-gray-800 shadow-2xl rounded-lg px-4 py-4 text-md' rows={6}  placeholder='Enter Your message here.'>
                </textarea>
       </div>




{/* send message */}
       <div className='w-full flex justify-center mb-7'>
    <button type="submit" className='  w-11/12 bg-yellow-400 font-semibold mb-8 text-black px-4 py-4   rounded-lg  
           mt-7'>Send Your Message </button>
    </div>


    </div>

  


               </div>
           </div>

          


        </div>

      </div>


      
      <h1 className='text-white'>lo ji right div bhi complete ho gya </h1>
    </div>
  )
}

export default ContectUs















