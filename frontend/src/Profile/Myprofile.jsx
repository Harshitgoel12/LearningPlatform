import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { FaRegEdit } from "react-icons/fa";
import dashboardlinks from "../data/dashboard-links";
import { CiSettings } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
import Sidebar from './Sidebar';

function Myprofile() {
    const dispatch=useDispatch();
    const userdata= useSelector((state)=>state.Profile.user)
  return (
    <div className='w-screen min-h-screen bg-[#000814]'>
      <div className='flex  gap-8 ' >
        <div className='w-1/5 min-h-screen bg-[#161D29] pt-10 '>
        {/* handle the side bar  */}
        {
  userdata.accountType === "Student"
    ? dashboardlinks.map((ele, idx) => {
        if (ele.type === "Student"||ele.type=="both") {
          console.log(ele); // log outside JSX
          return <Sidebar key={idx} element={ele} />;
        } else {
          return null;
        }
      })
    : dashboardlinks.map((ele, idx) => {
        if (ele.type === "Instructor"||ele.type=="both") {
          return <Sidebar key={idx} element={ele} />;
        } else {
          return null;
        }
      })

}
<div className='flex justify-center'>
<hr  className='text-gray-600 mt-10 w-3/4 '/>
</div>

<div>
<div className='flex gap-2 ms-10 mt-5'>
        <CiSettings  className="text-white text-xl"/>
     <Link to={"/settings"}><h1 className='text-white'>Settings</h1></Link>
     </div>
     <div className='flex gap-2 ms-10 mt-5'>
        <CiLogout   className="text-gray-500 text-xl"/>
     <Link to={"/logout"}><h1 className='text-gray-500'>Logout</h1></Link>
     </div>
</div>
        </div>
        <div className=' flex flex-col w-11/12'>
            <h1 className='text-white mt-20 mb-10 text-3xl '>My Profile</h1>
            <div className='flex justify-between w-11/12 bg-[#161D29] px-10 py-8 rounded-lg mb-6'>
                 <div className='flex '>
                    <div>
                        <img src={userdata.image} alt="" className='h-16 w-16 rounded-full bg-gray-800' />
                    </div>
                    <div className='mt-3 ms-4'>
                        <h1 className='text-white font-semibold text-lg'>{userdata.firstName} {" "} {userdata.lastName}</h1>
                        <h1 className='text-gray-400 text-sm'>{userdata.email}</h1>
                    </div>
                 </div>
                 <div className='flex bg-yellow-500 w-24 rounded-lg h-12 mt-3 gap-3 justify-center font-semibold'>
                    <button className='text-md'>Edit  </button>
                    <FaRegEdit  className='text-xl mt-3'/>
                 </div>

                 </div>


          <div className='flex justify-between w-11/12 bg-[#161D29] px-10 py-8 rounded-lg mb-6'>
                 <div className='flex '>
                    <div >
                        <p className='text-white font-bold text-xl'>About</p>
                        <p className='mt-12 text-gray-600 '>Write Something about Yourself</p>
                    </div>
                    <div className='mt-3 ms-4'>
                        
                    </div>
                 </div>
                 <div className='flex bg-yellow-500 w-24 rounded-lg h-12 mt-3 gap-3 justify-center font-semibold'>
                    <button className='text-md'>Edit  </button>
                    <FaRegEdit  className='text-xl mt-3'/>
                 </div>

</div>

                 <div className='flex justify-between w-11/12 bg-[#161D29] px-10 py-8 rounded-lg mb-20'>
                 <div className='flex '>
                    <div >
                        <p className='text-white font-bold text-xl'>Personal Details</p>
                        <div className='flex flex-row gap-20 text-white text-md mt-5'>
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
                 <div className='flex bg-yellow-500 w-24 rounded-lg h-12 mt-3 gap-3 justify-center font-semibold'>
                    <button className='text-md'>Edit  </button>
                    <FaRegEdit  className='text-xl mt-3'/>
                 </div>
                





            </div>
        </div>
      </div>
    </div>
  )
}

export default Myprofile
