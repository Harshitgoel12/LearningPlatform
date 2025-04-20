import React from 'react'
import AddCourseFirstPageForm from './AddCourseFirstPageForm'
import { Outlet } from 'react-router-dom'

function AddCourseFirstPage() {
  return (
    <div className='mt-16 '>
      <div className='flex flex-row gap-10 '>
       <Outlet/>
        <div className='w-1/2 hidden xl:block h-1/2 me-10 px-3 py-3 bg-gray-900'>
            <h1 className='text-white text-xl font-semibold ms-3'>⚡ Course Upload Tips</h1>
            <ul className='text-gray-300 text-xs px-3 text-start ' >
                <li><span className='text-4xl'>.</span> Set the Course Price option or make it free.</li>
                <li><span className='text-4xl'>.</span> Standard size for the course thumbnail is 1024x576.</li>
                <li><span className='text-4xl'>.</span> Video section controls the course overview video.</li>
                <li><span className='text-4xl'>.</span> Course Builder is where you create and organize a course.</li>
                <li><span className='text-4xl'>.</span> Add Topics in the Course Builder section to create lessons, quizzes, and assignments.</li>
                <li><span className='text-4xl'>.</span> Information from the Additional Data section shows up on the course single page.</li>
            
            </ul>
        </div>
      </div>
    </div>
  )
}

export default AddCourseFirstPage
