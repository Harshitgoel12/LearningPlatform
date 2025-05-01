import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { RiArrowDropDownLine } from 'react-icons/ri';
import Logo from "../assets/Logo/Logo-Full-Light.png"
import  {useDispatch, useSelector} from "react-redux"
import { FaCaretDown } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { RiDashboard2Line } from "react-icons/ri";
import { userData } from '../slices/Profileslice';
import { BsCart4 } from "react-icons/bs";


import "../App.css";
import axios from 'axios';

function Header() {
  const navigate= useNavigate();
  const dispatch = useDispatch();
  const user= useSelector((state)=>state.Profile.user);
  const [openDropdown,setOpenDropDown]=useState(false);

  const handleDropDown= ()=>{
    setOpenDropDown(!openDropdown);
  }

  const handleLogout=async  ()=>{
    try {
       const response= await axios.delete("http://localhost:8080/api/v1/logout",{
            withCredentials:true
        })
        console.log(response)
        localStorage.removeItem("user");
        setOpenDropDown(false);
        dispatch(userData(null));
        navigate("/");
       

    } catch (error) {
      console.log("something went wrong while logout the user",error.message);
      
    }
  }
  return (
    <div className="w-screen bg-[#000814]">
      <div className="w-11/12 text-white h-full flex justify-between items-center py-4">
        
        {/* Logo Section */}
        <div className="flex items-center h-full ms-20">
          <img src={Logo} className="h-8" alt="Logo" />
        </div>

        {/* Navigation Links Section */}
        <div className="text-white flex gap-6 items-center">
          <ul className="flex gap-6 items-center">
            <Link to="/">
              <li className="hover:text-gray-300">Home</li>
            </Link>

            {/* Dropdown for Catalog */}
            <div className="group  parentDiv">
              <Link className="flex items-center">
                <span>Catalog</span>
                <RiArrowDropDownLine className="text-2xl ms-1" />
              </Link>

              {/* Dropdown Content */}
              <div className="absolute  z-10 hidden  group-hover:block childDiv bg-white text-gray-700 font-bold min-w-[160px] shadow-lg rounded">
                <Link to="/courses/Web Development" className="block w-72 ms-2 mt-2 py-4 px-4 hover:rounded-lg hover:bg-gray-300">Web Development</Link>
                <Link to="/courses/Python" className="block ms-2 py-4 px-4 hover:rounded-lg hover:bg-gray-300">Python </Link>
                <Link to="/courses/Web designer" className="block w-72 ms-2 py-4 px-4 hover:rounded-lg hover:bg-gray-300">Webdesigner</Link>
                <Link to="/courses/Artificial Intelligence" className="block w-72 ms-2 py-4 px-4 hover:rounded-lg hover:bg-gray-300">Artificial Intelligence</Link>
                <Link to="/courses/Java Developer" className="block w-72 ms-2 mt-2 py-4 px-4 hover:rounded-lg hover:bg-gray-300">Java Developer</Link>
                <Link to="/courses/DevOps" className="block w-72 ms-2 mt-2 py-4 px-4 hover:rounded-lg hover:bg-gray-300">DevOps</Link>
                <Link to="/courses/Machine Learning" className="block w-72 ms-2 mt-2 py-4 px-4 hover:rounded-lg hover:bg-gray-300">Machine Learning</Link>
                <Link to="/courses/BlockChain Development" className="block w-72 ms-2 mt-2 mb-2 py-4 px-4 hover:rounded-lg hover:bg-gray-300">BlockChain Development</Link>
              </div>
            </div>

            <Link to="/AboutUs">
              <li className="hover:text-gray-300">About Us</li>
            </Link>
            <Link to="/contactUs">
              <li className="hover:text-gray-300">Contact Us</li>
            </Link>
          </ul>

          {/* Search Input */}
          <input
            type="text"
            placeholder="Search"
            className="h-8 w-48 rounded-lg border-white px-4 py-2 focus:outline-none"
          />
        </div>

        {/* Login & Signup Buttons */}
        {!user&&<div className="flex items-center">
          <Link to="/login">
            <button className="me-3 px-4 py-2 rounded-lg bg-gray-900 cursor-pointer hover:bg-gray-700">Login</button>
          </Link>
          <Link to="/signup">
            <button className="px-4 py-2 rounded-lg bg-gray-900 cursor-pointer hover:bg-gray-700">Signup</button>
          </Link>
        </div>}

        {
          user&&<div className="flex items-center gap-5" >
            {console.log("user ki image",user)}
            {user.accountType=="Student"&&<Link to={"/dashboard/cart"}><BsCart4 className='text-white text-2xl me-5' /></Link>}
            <div onClick={handleDropDown} className='flex items-center gap-2'>
             <img src={user.image} alt=""  className='h-10 w-10 rounded-full bg-white'/>
             <FaCaretDown  className='text-xl text-gray-400'/>
             </div>
          </div>
        }

    {openDropdown&&<div className='flex z-20 flex-col absolute rounded-lg right-20 top-16 bg-gray-900 px-5 py-3'>
      <Link className='text-white mb-4 text-md flex gap-2 items-center' to={"/dashboard/my-profile"}><RiDashboard2Line />
<span>  Dashboard </span>   </Link>
      <Link className='text-white flex gap-2 items-center text-md ms-1' onClick={handleLogout}><FiLogOut />
      <span>Logout</span></Link>
      </div>}


      </div>
    </div>
  );
}

export default Header;
