import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { FaRegEdit } from "react-icons/fa";
import dashboardlinks from "../data/dashboard-links";
import { CiSettings } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
import Sidebar from './Sidebar';
import { Link, Outlet } from 'react-router-dom';

function Dashboard() {
    const dispatch=useDispatch();
    const userdata= useSelector((state)=>state.Profile.user)
  return (
    <div className='w-screen min-h-screen bg-[#000814]'>
      <div className='flex  gap-32 ' >
        <div className='w-1/5 min-h-screen bg-[#161D29] pt-10 '>
        {/* handle the side bar  */}
        {
  userdata.accountType === "Student"
    ? dashboardlinks.map((ele, idx) => {
        if (ele.type === "Student"||ele.type=="both") {
         
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
     <Link to={"/dashboard/settings"}><h1 className='text-white'>Settings</h1></Link>
     </div>
     <div className='flex gap-2 ms-10 mt-5'>
        <CiLogout   className="text-gray-500 text-xl"/>
     <Link to={"/dashboard/logout"}><h1 className='text-gray-500'>Logout</h1></Link>
     </div>
</div>
        </div>


   <Outlet/>


        </div>
    </div>
  )
}

export default Dashboard;

