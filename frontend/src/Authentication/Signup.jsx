import React ,{useEffect, useState} from 'react'
import SingupImg from "../assets/Images/signup.webp"
import frame from "../assets/Images/frame.png"
import { IoIosEye, IoIosEyeOff } from "react-icons/io"; 
import { Navigate, useNavigate } from 'react-router-dom';
import {setToken,SignupData,setLoading} from "../slices/authslice"
import { useDispatch,useSelector } from 'react-redux';
import {sendOtp} from "../services/sendOtp"
function Signup() {
    const [accountType,setAccountType]=useState("Student");
    const navigate= useNavigate();
    const dispatch= useDispatch();
    const loading= useSelector((state)=>state.auth.loading);

    const [user,setUser]=useState({
          firstName:"",
          lastName:"",
          email:"",
          password:"",
          confirmpassword:"",
          accountType:"Student"
    })

    const handlechange=(e)=>{
      
        setUser(prevState => ({
            ...prevState,
            
            [e.target.name]: e.target.value,
        }));
        console.log(user);
        
    }



  const handleSubmit= (e)=>{
    e.preventDefault();
    console.log("yha tk to aa gye hm")
    const userdetail={
        ...user,
        accountType
    }
 
    dispatch(SignupData(userdetail));
  
    // send otp to the email address
   
    dispatch(sendOtp(user.email,navigate))


   
   setUser({
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    confirmpassword:"",
    accountType:"Student"
   })
   setAccountType("Student")
  }









    const obj=[
         {
            type:"Instructor"
         },
         {
            type:"Student"
         }
    ]
    const handleClick=(e)=>{
        setAccountType(e.target.textContent);
    }

   
  return (
    <div className='flex  justify-center  bg-[#000814] text-white flex-wrap-reverse md:flex-nowrap '>
      <div className=' flex flex-col items-center lg:w-3/4  w-screen'>
        <h1 className='font-bold text-3xl md:w-2/3 w-full mt-10 text-center '> Join the millions learning to  code with StudyNotion for free</h1>
        <p className=' text-lg text-gray-500 w-3/4 mb-6 mt-4 text-center'>Build skills for today, tomorrow, and beyond.
        <i className='text-blue-400 font-semibold'> Education to future-proof your career. </i></p>
        <div className='flex bg-gray-900 rounded-3xl w-68  mb-8 px-1 py-1'>
        {
             obj.map((ele,idx)=>{
                return (
                 <div className='  gap-4 shadow-3xl' key={idx}>
                    <button className={` -px-4 py-3 text-white ${accountType==ele.type?"bg-[#000814]":"bg-gray-900"} w-32 rounded-3xl
                    shadow-2xl transform-translate duration-75 `}
                    onClick={handleClick}>{ele.type} 
                    </button>
                   
                 </div>
            )
             })
        }
        </div>

{/* form creation */}

<form className='flex flex-col w-3/4' onSubmit={handleSubmit}>
    <div className='flex w-full gap-4'>
        <div className='flex flex-col w-full mb-4'>
            <label htmlFor="firstname" className='mb-2'>First Name <span className='text-red-500'>*</span></label> 
            <input type="text" id='firstname' value={user.firstName} onChange={handlechange} name='firstName'
             className='w-full focus:border-white shadow-2xl rounded-lg px-3 py-3 bg-[#161D29] outline-none' placeholder='Enter first name'/>
        </div>
        <div className='flex flex-col w-full mb-4'>
            <label htmlFor="lastName" className='mb-2'>Last Name <span className='text-red-500'>*</span></label>
            <input type="text" id='lastName' value={user.lastName} onChange={handlechange}
             name='lastName' className='w-full focus:border-white shadow-2xl rounded-lg px-3 py-3 bg-[#161D29] outline-none' placeholder='Enter Last name'/>
        </div>
    </div>

    <div className='flex flex-col w-full mb-4'>
        <label htmlFor="email" className='mb-2'>Email Id</label>
        <input type="email" id='email' value={user.email} onChange={handlechange} name='email' className='w-full focus:border-white shadow-2xl rounded-lg px-3 py-3 bg-[#161D29] outline-none' placeholder='Enter Email address' />
    </div>

    <div className='flex w-full gap-4 mb-4'>
        <div className='flex flex-col w-full'>
            <label htmlFor="password" className='mb-2'>Create Password</label>
            <input type="password" value={user.password} onChange={handlechange} name='password' id='password' className='w-full focus:border-white shadow-2xl rounded-lg px-3 py-3 bg-[#161D29] outline-none' placeholder='Enter Password'/>
        </div>
        <div className='flex flex-col w-full relative'>
            <label htmlFor="confirmpassword" className='mb-2'>Confirm Password</label>
            <input type="password" name='confirmpassword'
             id='confirmpassword' value={user.confirmpassword} onChange={handlechange} className='w-full focus:border-white shadow-2xl rounded-lg px-3 py-3 bg-[#161D29] outline-none' placeholder='Confirm Password'/>
    <span
          className="absolute cursor-pointer  text-white-400 top-12 right-6">
          { <IoIosEyeOff size={25} /> }
        </span>
        </div>
    </div>

    <div className='w-11/12 flex justify-start mb-7'>
    <button type="submit" className='  w-full bg-yellow-400 text-black px-4 py-3   rounded-lg  
           mt-5 '>Create Your Account</button>
    </div>
   
</form>


      </div>
     
      <div className='lg:w-1/2n h-screen items-center w-screen  flex justify-center relative'>
        {/* <img src={frame} alt="" className='md:h-[390px] h-[290px] sm:w-[400px] w-[300px]  ms-7 rounded-full'/> */}
 <img src={SingupImg} alt="" className='md:h-[420px] h-[320px]  sm:w-[400px] w-[300px]   absolute  rounded-full '/>
      </div>
    </div>
  )
}

export default Signup

