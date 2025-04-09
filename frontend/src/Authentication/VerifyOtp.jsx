import React,{useState} from 'react'
import OtpInput from 'react-otp-input';
import {SignupData} from "../slices/authslice"
import axios from 'axios';
import {useSelector} from "react-redux"
import { useNavigate } from 'react-router-dom';

function VerifyOtp() {
    const [otp, setOtp] = useState('');
    const navigate=useNavigate();
    const data= useSelector((state)=>state.auth.data)
    async function handleOTP(){
     try {
      console.log("sign up data ",data);
      const user={
        ...data,
        otp
      }
       const response=await axios.post("http://localhost:8080/api/v1/signup",user,{withCredentials:true});
       if(response.data.success==false){
           throw new Error(response.data.message);
       }
      navigate("/login");
     } catch (error) {
      console.log("error aa gyi bhiya " ,error.message)
     }
    }
  return (
    <div className='w-screen  h-screen bg-[#000814]  flex-col flex items-center  justify-center'>
        <h1 className='text-white text-3xl me-80 mb-4 font-bold'>Verify Email</h1>
        <p className='text-gray-400 text-md mb-4  text-xl w-1/3 '>A verification code has been sent to you. Enter the code below</p>
       <OtpInput
      value={otp}
       inputStyle="w-[20px] rounded-[8px] border-[1px] bg-white  border-richblack-500 text-[3rem] text-center me-8"
                    focusStyle="border-[5px] border-red-500"
      onChange={setOtp}
      numInputs={6}
      
      renderInput={(props) => <input {...props}  />}
     
    />

<div className='w-1/3 flex justify-start mb-7 mt-6'>
    <button type="submit" className='  w-full bg-yellow-400 text-black px-4 py-3   rounded-lg  
           mt-5 ' onClick={handleOTP}>Verify Email</button>
    </div>

    </div>
  )
}

export default VerifyOtp;
