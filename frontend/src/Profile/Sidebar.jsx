// import React from 'react'
// import * as vscIcons from "react-icons/vsc";
// import { Link } from 'react-router-dom';

// function Sidebar({element}) {
//   const Icon=vscIcons[element.icon]
//   return (
    
//     <div className=' w-full flex flex-col  mt-3 '>
      
//        <div className='flex gap-2 ms-10'>
//         <Icon className="text-white md:text-3xl text-2xl"/>
//      <Link to={element.path}><h1 className='text-white hidden md:inline '>{element.name}</h1></Link>
//      </div>
//     </div>
//   )
// }

// export default Sidebar;













// import React from 'react';
// import * as vscIcons from "react-icons/vsc";
// import { Link } from 'react-router-dom';

// function Sidebar({ element }) {
//   const Icon = vscIcons[element.icon];

//   return (
//     <div className='w-full mt-4 px-4'>
//       <Link to={element.path}>
//         <div className='flex items-center gap-4'>
//           <Icon className="text-white text-2xl md:text-3xl" />
//           <h1 className='text-white hidden md:inline text-base md:text-lg'>
//             {element.name}
//           </h1>
//         </div>
//       </Link>
//     </div>
//   );
// }

// export default Sidebar;



































import React from 'react';
import * as vscIcons from "react-icons/vsc";
import { Link } from 'react-router-dom';

function Sidebar({ element }) {
  const Icon = vscIcons[element.icon];

  return (
    <Link to={element.path}>
      <div className='flex flex-col items-center md:flex-row md:items-start gap-1 md:gap-3 px-2 md:px-6 mt-7'>
        <Icon className="text-white text-2xl mb-2 md:text-2xl" />
        <h1 className='text-white hidden md:inline text-sm md:text-lg'>{element.name}</h1>
      </div>
    </Link>
  );
}

export default Sidebar;


