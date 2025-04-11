import React, { useState } from "react";
import LoginImg from "../assets/Images/login.webp";
import frame from "../assets/Images/frame.png";
import  axios from "axios";
import { setToken } from "../slices/authslice";
import { useDispatch } from "react-redux";
import { userData } from "../slices/Profileslice";
import { useNavigate } from "react-router-dom";

function Login() {

  const dispatch= useDispatch();
  const navigate=useNavigate();
  const [userdata,setUserData]=useState({
    email:"",
    password:"",
  });
  
  function handlechange(e){
    const { name, value } = e.target;
    setUserData((prev)=>({
      ...prev,
      [name]:value

    }))

  }

   async function handlesubmit(e){
    e.preventDefault();
    try {

        const response=await axios.post("http://localhost:8080/api/v1/login",userdata,{withCredentials:true});
        console.log("response is " , response.data.data);
        if(!response.data.success){
          throw new Error(response.data.message);
        }

        //store token on the localstore of the user 
       localStorage.setItem("token",JSON.stringify(response.data.token));
       dispatch(setToken(response.data.token));

       const image=response.data.data.image=="NA"?
       `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.data.firstName} ${response.data.data.lastName}`:response.data.data.image;

   const ProfileData={
    ...response.data.data,
    image
   }
   console.log("profile",ProfileData);
   dispatch(userData(ProfileData));
   localStorage.setItem("user",JSON.stringify(ProfileData));
     navigate("/")
   
        //create a slice where you going to store the profile
        // 
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <form onSubmit={handlesubmit} className="bg-[#000814] min-h-screen text-white flex flex-col-reverse lg:flex-row  ">
      {/* Left Section */}
      <div className="lg:w-1/2 w-full flex  lg:mt-32 flex-col items-center  px-6 lg:px-12 py-8 lg:py-0">
        <h1 className="text-3xl lg:text-4xl font-bold text-center lg:text-left">
          Welcome Back
        </h1>

   
      
        <p className="text-gray-400 text-lg text-center lg:text-left mt-2 max-w-md">
          Build skills for today, tomorrow, and beyond.{" "}
          <span className="text-blue-400">Education to future-proof your career.</span>
        </p>

        <div className="flex flex-col w-full max-w-md mt-6">
          <label htmlFor="email" className="mb-2">
            Email Id
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={userdata.email}
            onChange={handlechange}
            className="py-3 bg-[#161D29] outline-none shadow-md px-3 rounded-md"
            placeholder="Enter Your Email Id"
          />
        </div>

        <div className="flex flex-col w-full max-w-md mt-4">
          <label htmlFor="password" className="mb-2">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={userdata.password}
            onChange={handlechange}
            className="py-3 bg-[#161D29] outline-none shadow-md px-3 rounded-md"
            placeholder="Enter Your Password"
          />
        </div>

        <button
          type="submit"
          
          className="w-full max-w-md bg-yellow-400 text-black px-4 py-3 rounded-lg mt-6"
        >
          Create Your Account
        </button>
      </div>

      {/* Right Section */}
      <div className="lg:w-1/2 w-full flex justify-center lg:mt-32 mt-5 relative py-10 lg:py-0">
        <img src={frame} alt="Frame" className="h-[270px] sm:h-[340px] lg:h-[400px] max-w-sm lg:max-w-md mt-2 ms-3" />
        <img
          src={LoginImg}
          alt="Login"
          className=" h-[260px] sm:h-[330px] lg:h-[390px] max-w-sm lg:max-w-md absolute lg:top-0 top-10"
        />
      </div>
    </form>
  );
}

export default Login;
