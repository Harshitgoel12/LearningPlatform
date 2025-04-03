import React from 'react'
import Logo from "../assets/Logo/Logo-Full-Light.png"
import {Link } from "react-router-dom"
function Header() {
  return ( 
    <div className='w-screen  h-16 bg-[#000814]'>
      <div className='w-11/12 text-white h-full flex justify-between '>
      <div className='flex items-center h-full ms-20'>
      <img src={Logo}  className=' h-8 '/>
      </div>
<div className='text-white flex  gap-6 items-center'>
  <ul className='flex gap-6 items-center'>
   <Link to={"/"}> <li>Home</li></Link>
    <Link ><li>Catalog</li></Link>
    <Link to={"/AboutUs"}><li>About Us</li></Link>
    <Link><li>Contact Us</li></Link>
    
  </ul>

  <input type="text" placeholder='Search'  className=' h-6 w-24 rounded-lg border-white selection:border-2 me-2 ms-2'/>

  </div>
  <div className='flex items-center'>
  <Link to={"/login"}><button className='me-3  px-4 py-2  rounded-lg bg-gray-900 cursor-pointer'>Login</button></Link>
  <Link to={"/signup"}><button className='px-4 py-2  rounded-lg bg-gray-900 cursor-pointer'>Signup</button></Link>
  </div>


      </div>
    </div>
  )
}

export default Header
