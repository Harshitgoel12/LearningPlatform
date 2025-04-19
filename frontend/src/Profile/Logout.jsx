import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const Logout = ({isLogedIn}) => {
    const navigate=useNavigate();
    const handleCancle= ()=>{
        isLogedIn(false);
    }
    const handleLogout=async  ()=>{
      try {
         const response= await axios.delete("http://localhost:8080/api/v1/logout",{
              withCredentials:true
          })
          console.log(response)
          localStorage.removeItem("user");
          isLogedIn(false);
          navigate("/");

      } catch (error) {
        console.log("something went wrong while logout the user",error.message);
        
      }
    }
  return (
    <div className='flex flex-col w-screen absolute right-1/3 justify-center items-end h-11/12  '>

      

       <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 flex items-center justify-center">
  <div className="bg-gray-800 p-6 rounded-lg shadow-xl z-50">
    <h2 className="text-2xl font-bold mb-4 text-white">Are You Sure?</h2>
    <p className="mb-4 text-white text-lg">You will be logged out of your account</p>
    <div className="flex justify-end gap-4">
      <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded" onClick={handleLogout}>Logout</button>
      <button className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded" onClick={handleCancle}>Cancel</button>
    </div>
  </div>
</div>




    </div>
  )
}

export default Logout
