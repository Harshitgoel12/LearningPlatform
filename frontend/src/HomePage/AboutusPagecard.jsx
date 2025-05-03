import React from 'react'

const AboutusPagecard = ({color,heading,para}) => {
  return (
    <div>
      <div className={`lg:h-60 h-48 lg:max-w-88 w-screen lg:ms-0 ms-5   ${color} `}>
         <h1 className='text-lg text-gray-100 mt-6 mx-4 text-center break-words'>{heading}</h1>
         <p className='text-gray-400 text-center px-4 mt-6 break-words'>{para}</p>
      </div>
    </div>
  )
}

export default AboutusPagecard
