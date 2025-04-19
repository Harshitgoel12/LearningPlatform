// import React, { useState } from 'react'
// import { useDispatch,useSelector } from 'react-redux'
// import { FaRegEdit } from "react-icons/fa";
// import dashboardlinks from "../data/dashboard-links";
// import { CiSettings } from "react-icons/ci";
// import { CiLogout } from "react-icons/ci";
// import Sidebar from './Sidebar';
// import { Link, Outlet } from 'react-router-dom';
// import Logout from './Logout';

// function Dashboard() {
//     const dispatch=useDispatch();
//     const [isClickedOnLogout,setIsClickedLogout]=useState(false);
//     const handleLogout= ()=>{
//       setIsClickedLogout(true);
//     }
//     const userdata= useSelector((state)=>state.Profile.user)
//   return (
//     <div className='w-screen min-h-screen bg-[#000814]'>
//       <div className='flex  gap-32 ' >
//         <div className='w-1/12 md:w-1/4 min-h-screen bg-[#161D29] pt-10 '>
//         {/* handle the side bar  */}
//         {
//   userdata.accountType === "Student"
//     ? dashboardlinks.map((ele, idx) => {
//         if (ele.type === "Student"||ele.type=="both") {
         
//           return <Sidebar key={idx} element={ele} />;
//         } else {
//           return null;
//         }
//       })
//     : dashboardlinks.map((ele, idx) => {
//         if (ele.type === "Instructor"||ele.type=="both") {
//           return <Sidebar key={idx} element={ele} />;
//         } else {
//           return null;
//         }
//       })

// }
// <div className='flex justify-center'>
// <hr  className='text-gray-600 mt-10 w-3/4 '/>
// </div>

// <div>
// <div className='flex gap-2 ms-10 mt-5'>
//         <CiSettings  className="text-white text-xl"/>
//      <Link to={"/dashboard/settings"}><h1 className='text-white md:text-3xl text-5xl hidden md:inline'>Settings</h1></Link>
//      </div>
//      <div className='flex gap-2 ms-10 mt-5'>
//         <CiLogout   className="text-gray-500 md:text-3xl text-5xl"/>
//      <h1 className='text-gray-500 cursor-pointer hidden md:inline' onClick={handleLogout
//      }>Logout</h1>
//      </div>



// </div>
//         </div>

// {isClickedOnLogout&&<Logout isLogedIn={setIsClickedLogout}/>}

//    <Outlet/>


//         </div>

      



//     </div>
//   )
// }

// export default Dashboard;





















// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { CiSettings, CiLogout } from "react-icons/ci";
// import { Link, Outlet } from 'react-router-dom';
// import dashboardlinks from "../data/dashboard-links";
// import Sidebar from './Sidebar';
// import Logout from './Logout';

// function Dashboard() {
//   const dispatch = useDispatch();
//   const [isClickedOnLogout, setIsClickedLogout] = useState(false);

//   const handleLogout = () => {
//     setIsClickedLogout(true);
//   };

//   const userdata = useSelector((state) => state.Profile.user);

//   return (
//     <div className='w-screen min-h-screen bg-[#000814]'>
//       <div className='flex'>
//         {/* Sidebar */}
//         <div className='w-[70px] md:w-1/4 min-h-screen bg-[#161D29] pt-10'>
//           {(userdata.accountType === "Student"
//             ? dashboardlinks.filter(link => link.type === "Student" || link.type === "both")
//             : dashboardlinks.filter(link => link.type === "Instructor" || link.type === "both")
//           ).map((ele, idx) => (
//             <Sidebar key={idx} element={ele} />
//           ))}

//           <div className='flex justify-center'>
//             <hr className='text-gray-600 mt-10 w-3/4' />
//           </div>

//           {/* Settings */}
//           <div className='flex items-center gap-4 px-4 mt-5'>
//             <CiSettings className="text-white text-2xl md:text-3xl" />
//             <Link to="/dashboard/settings">
//               <h1 className='text-white hidden md:inline text-base md:text-lg'>Settings</h1>
//             </Link>
//           </div>

//           {/* Logout */}
//           <div className='flex items-center gap-4 px-4 mt-5'>
//             <CiLogout className="text-gray-500 text-2xl md:text-3xl" />
//             <h1
//               className='text-gray-500 cursor-pointer hidden md:inline text-base md:text-lg'
//               onClick={handleLogout}
//             >
//               Logout
//             </h1>
//           </div>
//         </div>

//         {/* Main Outlet */}
//         <div className='flex-1'>
//           {isClickedOnLogout && <Logout isLogedIn={setIsClickedLogout} />}
//           <Outlet />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;








































import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CiSettings, CiLogout } from "react-icons/ci";
import { Link, Outlet } from 'react-router-dom';
import dashboardlinks from "../data/dashboard-links";
import Sidebar from './Sidebar';
import Logout from './Logout';

function Dashboard() {
  const dispatch = useDispatch();
  const [isClickedOnLogout, setIsClickedLogout] = useState(false);

  const handleLogout = () => {
    setIsClickedLogout(true);
  };

  const userdata = useSelector((state) => state.Profile.user);

  const filteredLinks = userdata.accountType === "Student"
    ? dashboardlinks.filter(link => link.type === "Student" || link.type === "both")
    : dashboardlinks.filter(link => link.type === "Instructor" || link.type === "both");

  return (
    <div className='w-screen min-h-screen bg-[#000814] gap-28 flex flex-col-reverse md:flex-row'>
      {/* Small screen bottom sidebar */}
      <div className='w-screen md:hidden flex  justify-around items-center bg-[#161D29] py-2'>
        {filteredLinks.map((ele, idx) => (
          <Sidebar key={idx} element={ele} />
        ))}
        <Link to="/dashboard/settings">
          <CiSettings className="text-white md:text-2xl  text-2xl mt-3 " />
        </Link>
        <CiLogout className="text-gray-500 md:text-2xl text-2xl  mt-3" onClick={handleLogout} />
      </div>

      {/* Big screen left sidebar */}
      <div className='hidden md:block w-1/5  min-h-screen bg-[#161D29] pt-10'>
        {filteredLinks.map((ele, idx) => (
          <Sidebar key={idx} element={ele} />
        ))}
        <hr className='text-gray-600 mt-10 w-3/4 mx-auto' />
        <div className='flex gap-2 ms-10 mt-5'>
          <CiSettings className="text-white text-2xl" />
          <Link to="/dashboard/settings">
            <h1 className='text-white md:text-lg hidden md:inline'>Settings</h1>
          </Link>
        </div>
        <div className='flex gap-2 ms-10 mt-5'>
          <CiLogout className="text-gray-500 md:text-2xl" />
          <h1 className='text-gray-500 cursor-pointer hidden md:inline' onClick={handleLogout}>
            Logout
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className='flex-1'>
        {isClickedOnLogout && <Logout isLogedIn={setIsClickedLogout} />}
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;


