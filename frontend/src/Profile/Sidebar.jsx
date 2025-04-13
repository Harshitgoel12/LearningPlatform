import React from 'react'
import * as vscIcons from "react-icons/vsc";
import { Link } from 'react-router-dom';

function Sidebar({element}) {
  const Icon=vscIcons[element.icon]
  return (
    
    <div className=' w-full flex flex-col  mt-3 '>
      
       <div className='flex gap-2 ms-10'>
        <Icon className="text-white text-xl"/>
     <Link to={element.path}><h1 className='text-white'>{element.name}</h1></Link>
     </div>
    </div>
  )
}

export default Sidebar;
