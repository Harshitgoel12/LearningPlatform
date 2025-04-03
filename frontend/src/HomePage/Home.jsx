import React from 'react'
import banner from "../assets/Images/banner.mp4";
import {data1} from "../data/data1"
import Timelineimage from "../assets/Images/TimelineImage.png"
import KnowYourProgress from "../assets/Images/Know_your_progress.png";
import CompareWithOthers from "../assets/Images/Compare_with_others.png";
import PlanYourLessons from "../assets/Images/Plan_your_lessons.png";
import Instructor from "../assets/Images/Instructor.png"


function Home() {
  return (
    <>
    <div className='  justify-center w-screen flex flex-col items-center'>
      <div className='w-11/12  flex flex-col items-center '>
        <h1 className='text-4xl font-semibold text-center mt-8'>Learning Now Become 
          <span className='text-blue-400 ms-3'>More Easier </span></h1>
        <p className='text-center text-lg   mt-3'>With our online coding courses, you can learn at your own pace, from anywhere in the world,
           and get access to a wealth of resources, including hands-on projects, quizzes, and personalized 
           feedback from instructors.</p>



          {/* two button learn more and book a demo */}
         <div className='  justify-center mt-6 '>
          <button className="bg-yellow-400 px-4 py-3 rounded-lg  cursor-pointer transition-transform duration-300 hover:scale-110
          font-semibold">Learn More</button>
          <button className="text-white w-[140px] bg-black px-4 py-3 ms-4 rounded-lg shadow-xl transition-transform duration-300 hover:scale-110
          font-semibold">Book a demo</button>
          </div>




          {/* chalo background image lagao ab theek hai */}
          <video className="w-screen h-[600px] mt-5  " autoPlay loop muted >
  <source src={banner} type="video/mp4" />
  
</video>

      </div>

<div className='flex w-screen gap-20 justify-center  bg-gray-50 py-10 mb-6'>
      <div className='ms-8 w-1/2 me-4 overflow-x-hidden'>
      <div className='text-center'>
      <h1 className='text-4xl font-bold mt-6 text-center text-black'>Unlock Your coding potential  <br />
      <span className='text-blue-400'>with our online courses</span></h1>
      <p className='text-center mt-3 text-md transition-transform duration-500 text-gray-500
          hover:scale-102'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, quas maxime?
         Facere voluptas sint quidem mollitia quia sed tempora reiciendis hic a facilis in 
         dignissimos maxime explicabo porro provident repellat officia,
         sunt magnam doloremque dicta architecto eos quisquam velit. Similique?
         
         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos inventore, at qui culpa eaque voluptate harum numquam nam cupiditate quidem.
         </p>
         <button className='text-white w-[140px] bg-black px-4 py-3 ms-4 rounded-lg 
          font-semibold mt-5 '>Learn More</button>
         </div>
         
      </div>
    

<div className='w-1/3 mt-10'>
  <h1 className='font-semibold text-xl text-blue-400'>
    Flexible Schedule
  </h1>
  <p className='text-lg text-gray-500 '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In,
     quaerat? Eum natus voluptates officiis reprehenderit, omnis libero quam vitae nihil
      error ea velit earum sequi a distinctio quos recusandae. Quibusdam?</p>

    <h1 className='font-semibold text-xl mt-8 text-blue-400'>Pocket Friendly</h1>
    <p className='text-lg text-gray-500 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Esse maiores doloremque quae natus aspernatur exercitationem modi dolorem, perferendis commodi
       suscipit ducimus alias consequuntur mollitia, odio dolor nesciunt nobis, repellat numquam?</p>
</div>

      </div>
      
      {/* popular courses */}

      <div className='flex gap-5 w-11/12 justify-center mt-7'>
        <div className='w-1/2 text-center'>
          <h1 className='text-4xl font-bold '>Get the Skills you need for a <span className='text-blue-400'>Job 
            <br />that is in demand </span></h1>
        </div>
        <div className='text-center'>
          <p className=''>The modern StudyNotion is the dictates its own terms.Today, to   <br />be a
             competitive specialist requires more than professional skills.</p>
             <button className='text-black w-[140px] bg-yellow-500 px-4 py-3 ms-4 rounded-lg 
          font-semibold mt-5 '>Learn More</button>
        </div>
      </div>



{/* section */}
<div className="flex flex-row w-screen mt-10 gap-20">
  <div>
  {data1.map((ele, idx) => (
    
    <div key={idx} className='flex  flex-row  gap-4 mb-16  ms-60 w-1/2'>
    <div >
      <img src={ele.image} alt="" className="w-16 h-10 rounded-lg bg-white shadow-lg object-contain" />
      </div>
      <div>
        <h1 className="font-bold text-xl">{ele.heading}</h1>
        <p className="text-gray-600 text-lg">{ele.title}</p>
      </div>
    </div>
  
  ))}
</div>
  <div>
    <img src={Timelineimage} alt="" />
  </div>


</div>




{/*  */}

<div className='flex flex-col items-center'>
  <div className='w-1/2 '>
  <h1 className='font-bold text-4xl text-center'>Your Swiss Knife for <span className='text-blue-400'>learning any language </span></h1>
<p className='text-center text-md  mt-3'>Using spin making learning multiple languages easy. with 20+ languages realistic voice-over, progress tracking, custom schedule and more.</p>
</div>

<div className='flex mt-12'>
<img src={KnowYourProgress} alt="" className='relative left-32 h-1/4' />
  <img src={CompareWithOthers} alt=""  className='relative h-1/4 bottom-12'/>

  <img src={PlanYourLessons} alt="" className='relative right-32 h-1/4'/>
</div>


{/* learn more button */}
<button className='text-black w-[140px] bg-yellow-400 px-4 py-3 ms-4 rounded-lg 
          font-semibold mt-5 '>Learn More</button>

</div>





{/* instructor section pr aa chuke hai hm kya baat samajh me aati hai  */}



<div className='  w-screen bg-gray-900 py-12 mt-10'>
  <div className='w-11/12 flex justify-center gap-10'>
  <div className='w-1/2  flex justify-center'>
  <img src={Instructor} alt="" />
  </div>
  <div className='flex flex-col justify-center -ms-10 mb-10 w-1/4 '>
 <h1 className='text-4xl font-bold text-white'>Become an <br /><span className='text-blue-400'>Instructor</span></h1>
 <p className='text-white mt-8'>Instructors from around the world teach millions of students on StudyNotion.
   We provide the tools and skills to teach what you love.</p>
<div className='flex justify-center'>
   <button className='text-black w-60  bg-yellow-400 px-4 py-3 ms-4 rounded-lg 
          font-semibold mt-16  '>Start Learning Today</button>
</div>
  </div>
  </div>


<h1 className=' font-bold text-4xl  text-center text-white mt-4'>Reviews from other learners</h1>


</div>


 
    </div>

    </>
  )
}

export default Home;
