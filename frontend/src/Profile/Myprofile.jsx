import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { FaRegEdit } from "react-icons/fa";
import dashboardlinks from "../data/dashboard-links";
import { CiSettings } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';

function Myprofile() {
    const dispatch=useDispatch();
    const userdata= useSelector((state)=>state.Profile.user)
  return (
    <div className='w-screen min-h-screen bg-[#000814]'>

        
        <div className=' flex flex-col w-11/12 md:items-start items-center'>
            <h1 className='text-white mt-20 mb-10 text-3xl '>My Profile</h1>
            <div className='flex justify-between md:ms-0 ms-16 md:w-3/4 w-full bg-[#161D29] px-10 py-8 rounded-lg mb-6'>
                 <div className='flex  '>
                    <div>
                        <img src={userdata.image} alt="" className='h-16 w-16 rounded-full bg-gray-800' />
                    </div>
                    <div className='mt-3 ms-4'>
                        <h1 className='text-white font-semibold text-lg'>{userdata.firstName} {" "} {userdata.lastName}</h1>
                        <h1 className='text-gray-400 text-sm'>{userdata.email}</h1>
                    </div>
                 </div>
                 <Link to={"/dashboard/settings"} className=' bg-yellow-500 w-24 rounded-lg h-12 mt-3 gap-3 hidden md:flex justify-center font-semibold'>
                  <button className='text-center ' >Edit  </button>
                    <FaRegEdit  className='text-xl mt-3'/>
                 </Link>

                 </div>


          <div className='flex md:ms-0  ms-16 justify-between md:w-3/4  w-full bg-[#161D29] px-16 py-8 rounded-lg mb-6'>
                 <div className='flex '>
                    <div >
                        <p className='text-white font-bold text-xl'>About</p>
                        <p className='mt-12 text-gray-600 '>{userdata.About=="NA"?"Write Something about Yourself":userdata.About}</p>
                    </div>
                    <div className='mt-3 ms-4'>
                        
                    </div>
                 </div>
                 <Link  to={"/dashboard/settings"} className='flex bg-yellow-500 w-24 rounded-lg h-12 mt-3 gap-3 justify-center font-semibold'>
                    <button className='text-center ' >Edit  </button>
                    <FaRegEdit  className='text-xl mt-3'/>
                 </Link>

</div>

                 <div className='flex md:justify-between md:ms-0 ms-16  md:w-3/4 w-full  bg-[#161D29] px-10 py-8 rounded-lg mb-20'>
                 <div className='flex justify-between'>
                    <div >
                        <p className='text-white font-bold text-xl'>Personal Details</p>
                        <div className='flex md:flex-row flex-col md:gap-20 text-white text-md mt-5'>
                            <div className='text-gray-400 text-sm'>
                                <p className='mt-3 '>First Name</p>
                                <p className='text-white mt-1'>{userdata.firstName}</p>
                                <p className='mt-3'>Email</p>
                                <p className='text-white mt-1'>{userdata.email}</p>
                                <p className='mt-3'>Gender</p>
                                <p className='text-white mt-1'>{userdata.gender=="NA"?"Add Gender" : userdata.gender}</p>
                            </div>
                            <div className='text-gray-400 text-sm'>
                                <p className='mt-3'>Last Name</p>
                                <p className='text-white mt-1'>{userdata.lastName}</p>
                                <p className='mt-3'>Phone Number</p>
                                <p className='text-white mt-1'>{userdata.contact=="NA"?"Add Contact Number":userdata.contact}</p>
                                <p className='mt-3'>Date of Birth</p>
                                <p className='text-white mt-1'>{userdata.DOB=="NA" ?"Add Date of Birth" :userdata.DOB}</p>
                            </div>
                        </div>
                    </div>
                    
                 </div>
                 <Link  to={"/dashboard/settings"} className='flex md:ms-0 ms-20 bg-yellow-500 w-24 rounded-lg h-12 mt-3 gap-3 justify-center font-semibold'>
                    <button className='text-center '>Edit  </button>
                    <FaRegEdit  className='text-xl mt-3'/>
                 </Link>
                





        
        </div>
      </div>
    </div>
  )
}

export default Myprofile
