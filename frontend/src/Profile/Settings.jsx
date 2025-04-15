import React, { useState } from 'react'
import {userData} from "../slices/Profileslice"
import { useDispatch, useSelector } from 'react-redux'
import { RiDeleteBin5Line } from "react-icons/ri";
import { Link } from 'react-router-dom';

function Settings() {
    const dispatch=useDispatch();
  
    const userdata= useSelector((state)=>state.Profile.user);
    const [preview, setPreview] = useState(null);
    const [User,setUser]=useState(userdata);

    const handlechange = (e) => {
        const file = e.target?.files?.[0];
        if (file) {
          setPreview(URL.createObjectURL(file));
        }
        else{
            setUser((prev)=>({...prev,[e.target.name]:e.target.value}))
        }
      };
      
  return (
    <div className='w-screen'>
      <div>
        <h1 className='text-white  text-3xl mt-10 '>Edit Profile</h1>

        <div className='flex flex-row mt-10 w-11/12  ps-8 rounded-lg py-10 bg-[#161D29] '>
        <div >
           <img  src={preview || userdata.image || "https://via.placeholder.com/100"} alt=""  className='h-20 w-20 rounded-full'/> 
        </div>
        <div className='flex flex-col ms-5'>
            <h1 className='text-white text-md mb-2 ms-3'>Change Profile Picture</h1>
            <div className='flex gap-5'>
               
            <div className="relative inline-block">
            <input
           type="file"
          id="fileInput"
          onChange={handlechange}
      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
        <button
     type="button"
     className="bg-gray-700 text-white px-4 py-2 rounded-lg font-semibold">
      Select
     </button>
  </div>

                <button className='bg-yellow-400 px-4 py-2 rounded-lg font-semibold text-black' >Upload</button>
            </div>
        </div>

        </div>


         <div className='mt-8 bg-[#161D29]  w-11/12 '>
         <h1 className='text-white text-bold text-lg ps-10 pt-5 '>Profile Information</h1>
          <div className='flex flex-row gap-12 justify-center w-11/12 mt-4 px-10 mb-10'>
            <div className='w-1/2 flex flex-col items-center'>
        <div className='flex flex-col text-white w-full'>
        <label htmlFor="" className='text-gray-500'>First Name</label>
        <input type="text" placeholder='Enter First Name ' name='firstName' onChange={handlechange} value={User.firstName} className='bg-[#2C333F] px-3 py-3 rounded-lg shadow-2xl mt-1 mb-3' />
        </div>
        <div className='flex flex-col text-white w-full'>
        <label htmlFor="" className='text-gray-500'>Date Of Birth</label>
        <input type="date" placeholder='Enter Date of Birth' name='DOB' onChange={handlechange} value={User.DOB} className='bg-[#2C333F] px-3 py-3 rounded-lg shadow-2xl mt-1 mb-5' />
        </div>
        <div className='flex flex-col text-white w-full'>
        <label htmlFor="" className='text-gray-500'>Contact Number</label>
        <input type="phone" placeholder='Enter Phone Number ' name='contact'  onChange={handlechange} value={User.phone} className='bg-[#2C333F] px-3 py-3 rounded-lg shadow-2xl mt-1 mb-5' />
        </div>
       
        
        </div>
        <div className='w-1/2 flex flex-col items-center'>
        <div className='flex flex-col text-white w-full'>
        <label htmlFor="" className='text-gray-500'>Last Name</label>
        <input type="text" placeholder='Enter Last Name ' name='lastName' onChange={handlechange} value={User.lastName} className='bg-[#2C333F] px-3 py-3 rounded-lg shadow-2xl mt-1 mb-5' />
        </div>
        <div className='flex flex-col text-white w-full'>
        <label htmlFor="" className='text-gray-500'>Gender</label>
        <input type="text" placeholder='Enter First Name ' name='gender'  onChange={handlechange} value={User.gender} className='bg-[#2C333F] px-3 py-3 rounded-lg shadow-2xl mt-1 mb-5' />
        </div>
        <div className='flex flex-col text-white w-full'>
        <label htmlFor="" className='text-gray-500'>About</label>
        <input type="text" placeholder='Enter Bio Details ' name='About'  onChange={handlechange} value={User.About} className='bg-[#2C333F] px-3 py-3 rounded-lg shadow-2xl mt-1 mb-5' />
        </div>
        </div>
        </div>
         </div>

         
         <div className='flex justify-end w-11/12 mt-8 '>
            <button className='text-black bg-yellow-300 px-4 py-2 font-semibold rounded-lg  me-4'>Save</button>
         </div>


         <div className='text-white flex flex-col w-11/12'>
            <label htmlFor="">Old Password</label>
            <input type="password"  placeholder='Enter Old Password'className='bg-[#2C333F] px-3 py-3 rounded-lg shadow-2xl mt-1 mb-5' />
         </div>

         <div className='text-white flex flex-col w-11/12'>
            <label htmlFor="">New Password</label>
            <input type="password"  placeholder='Enter Old Password'className='bg-[#2C333F] px-3 py-3 rounded-lg shadow-2xl mt-1 mb-5' />
         </div>

         <div className='text-white flex flex-col w-11/12'>
            <label htmlFor="">Confirm Password</label>
            <input type="password"  placeholder='Enter Old Password' className='bg-[#2C333F] px-3 py-3 rounded-lg shadow-2xl mt-1 ' />
         </div>


         <div className='flex justify-end w-11/12 mt-4'>
            <button className='text-black bg-yellow-400 px-4 py-2 font-semibold rounded-lg  me-4'>Save</button>
         </div>


         <div className='bg-[#340019] w-11/12 border-red-500 border-1 flex items-center mt-8 mb-20'>
            <div className='w-40'>
                {/* icon */}
                <div className='bg-[#691432] w-20 text-center h-20  ms-8 rounded-full px-2 py-3 '>
                <RiDeleteBin5Line  className='text-[#EF476F] text-5xl ps-3 pt-2'/>
                </div>
            </div>
            <div className='px-5 py-6 '>
                <h1 className='text-white font-semibold text-lg '>Delete Account</h1>
                <p className='text-white w-1/2 mt-3 mb-2'>Would you like to delete account?
This account may contain Paid Courses. Deleting your 
account is permanent and will remove all the contain 
associated with it.</p>
<Link className='text-[#D43D59] '> I want to delete my account.</Link>
            </div>
         </div>

      </div>
    </div>
  )
}

export default Settings
