import React from "react";
import Aboutus3 from "../assets/Images/aboutus3.webp";
import Aboutus1 from "../assets/Images/aboutus1.webp";
import Aboutus2 from "../assets/Images/aboutus2.webp";
import FoundingStroy from "../assets/Images/FoundingStory.png"
import AboutusPagecard from "./AboutusPagecard";

function Aboutus() {
  return (
    <div className="bg-gray-800 relative">
      {/* Heading Section */}
      <div className="w-11/12 flex flex-col items-center mt-16 pb-32 mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-white text-center max-w-2xl">
          Driving Innovation in Online Education for a{" "}
          <span className="text-blue-400">Brighter Future</span>
        </h1>
        <p className="text-md md:text-lg text-gray-400 text-center mt-5 w-full md:w-3/4">
          Studynotion is at the forefront of driving innovation in online education.
          We're passionate about creating a brighter future by offering cutting-edge courses,
          leveraging emerging technologies, and nurturing a vibrant learning community.
        </p>
      </div>

      {/* Images Section (Now Fully Responsive) */}
      <div className="bg-[#000814] pb-32 flex justify-center">
        <div className="flex flex-row gap-6 justify-center items-center absolute md:top-78 sm:top-72 top-80">
          <img src={Aboutus1} alt="About Us 1" className="w-1/4 rounded-lg shadow-lg" />
          <img src={Aboutus2} alt="About Us 2" className="w-1/4 rounded-lg shadow-lg" />
          <img src={Aboutus3} alt="About Us 3" className="w-1/4 rounded-lg shadow-lg" />
        </div>
      </div>

      {/* About Section */}
      <div className="bg-[#000814] flex flex-col items-center justify-center lg:pt-32 pt-8 ">
        <h1 className="text-center font-bold text-white mb-10 text-2xl md:text-3xl w-11/12 md:w-3/4 px-5">
          We are passionate about revolutionizing the way we learn. Our innovative platform{" "}
          <span className="text-blue-500">combines technology</span>,{" "}
          <span className="text-yellow-600">expertise</span>, and community to create an{" "}
          <span className="text-yellow-600">unparalleled educational experience.</span>
        </h1>
        <hr className="border-t border-gray-400 w-screen mt-20" />


        



      </div>


      <div className="bg-[#000814] flex justify-center w-screen lg:pt-32 pt-20 lg:flex-nowrap flex-wrap">
          <div className=" lg:w-2/3 w-screen flex flex-col items-center ">
            <h1 className="text-red-500 text-4xl font-bold text-left   mb-5 lg:w-7/12 w-11/12  ">Our Founding Story</h1>
            <p className="text-md text-gray-400 lg:w-7/12 w-11/12 text-left mt-3">Our e-learning platform was born out of a shared vision and passion 
              for transforming education. It all began with a group of educators, 
              technologists, and lifelong learners who recognized the need for accessible,
               flexible, and high-quality learning opportunities in a rapidly evolving digital world.</p>
               <p className="text-md text-gray-400 mt-10 lg:w-7/12 w-11/12 text-left">
               As experienced educators ourselves, we witnessed firsthand the limitations
                and challenges of traditional education systems. We believed that education should not be 
                confined to the walls of a classroom or restricted by geographical boundaries. We envisioned a 
                platform that could bridge these gaps and empower
                individuals from all walks of life to unlock their full potential.
               </p>
          </div>
          <div className="lg:w-1/2 w-2/3   flex justify-center items-center relative lg:mb-40 mb-20">
  <img
    src={FoundingStroy}
    alt=""
    className="rounded-lg shadow-[0_0_20px_10px_rgba(255,0,0,0.8)] lg:mt-0 mt-20"
  />
</div>




        </div>




        <div className="flex flex-row bg-[#000814] lg:flex-nowrap flex-wrap">
          <div className="lg:w-1/2  w-screen flex flex-col items-center lg:flex-nowrap ">
            <h1 className="text-yellow-600 font-bold text-4xl mb-5 lg:w-2/3 w-11/12 text-left">Our Vision</h1>
            <p className="text-gray-400 lg:w-2/3 w-11/12 text-left ">With this vision in mind, we set out on a journey to create an e-learning platform 
              that would revolutionize the way people learn. Our team of dedicated experts worked
               tirelessly to develop a robust and intuitive platform that combines cutting-edge 
               technology with engaging content, fostering a dynamic and interactive learning experience.</p>
          </div>
          <div className="lg:w-1/2 w-screen flex flex-col items-center">
            <h1 className="text-blue-500 font-bold text-4xl mb-5 lg:w-2/3 w-11/12 text-left lg:mt-0 mt-5">Our Mission</h1>
            <p className="text-gray-400 lg:w-2/3 w-11/12 text-left ">Our mission goes beyond just delivering courses online. We wanted to create a 
              vibrant community of learners, where individuals can connect, collaborate, and learn
               from one another. We believe that knowledge thrives in an environment of sharing and 
               dialogue, and we foster this spirit of collaboration through forums, live sessions, 
               and networking opportunities.</p>
          </div>







 


        </div>

         <div className="pt-20 bg-[#000814]">
            <div className="flex justify-evenly gap-10 text-white bg-gray-600 px-3 py-10 flex-wrap">
              <div>
                <h1 className="font-bold text-3xl text-center">5K+</h1>
                <p className="font-semibold text-lg">Active Student</p>
              </div>

              <div>
                <h1 className="font-bold text-3xl text-center">10+</h1>
                <p className="font-semibold text-lg">Mentors</p>
              </div>


              <div>
                <h1 className="font-bold text-3xl text-center">200+</h1>
                <p className="font-semibold text-lg">Courses</p>
              </div>


              <div>
                <h1 className="font-bold text-3xl text-center">50+</h1>
                <p className="font-semibold text-lg">Awards</p>
              </div>
              
            </div>





<div className="flex justify-between mt-10 lg:flex-nowrap flex-wrap">
  <div className="lg:w-1/2 w-screen mt-6 ms-12 ">
    <h1 className="text-white text-4xl font-bold text-center w-11/12">World-Class Learning for <span className="text-blue-400 text-4xl ">Anyone, Anywhere</span></h1>
  <p className="text-white font-lg text-bold  mt-4 lg:w-3/4 w-11/12">
  Studynotion partners with more than 275+ leading universities and companies to bring flexible,
   affordable, job-relevant online learning to individuals and organizations worldwide.
  </p>

  <button className="text-black bg-yellow-400 px-3 py-3 font-bold rounded-lg mt-4">Learn More</button>
  
  </div>
  <div className="flex me-8 mt-6  lg:flex-nowrap  flex-wrap">
  <div>

   <AboutusPagecard color={"bg-[#2C333F]"} heading={"Curriculum Based on Industry Needs"} para={"Save time and money! The Belajar curriculum is made to be easier to understand and in line with industry needs."}/>
  </div>
  <div>
  <AboutusPagecard color={"bg-[#161D29]"} heading={"Our Learning Methods"} para={"Studynotion partners with more than 275+ leading universities and companies to bring"}/>
  </div>
  </div>
</div>


<div>

<div className="flex me-8  justify-end flex-wrap">
  <div>

   <AboutusPagecard color={"bg-[#2C333F]"} heading={"Certification"} para={"Studynotion partners with more than 275+ leading universities and companies to bring."}/>
  </div>
  <div>
  <AboutusPagecard color={"bg-[#161D29]"} heading={"Rating \"Auto-grading\""} para={"Studynotion partners with more than 275+ leading universities and companies to bring"}/>
  </div>
  <div>
  <AboutusPagecard color={"bg-[#2C333F]"} heading={"Ready to Work"} para={"Studynotion partners with more than 275+ leading universities and companies to bring"}/>
  </div>
  </div>

</div>




</div>

 
 


    </div>
  );
}

export default Aboutus;
