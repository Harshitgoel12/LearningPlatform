import React from "react";
import Aboutus3 from "../assets/Images/aboutus3.webp";
import Aboutus1 from "../assets/Images/aboutus1.webp";
import Aboutus2 from "../assets/Images/aboutus2.webp";

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
      <div className="bg-[#000814] flex flex-col items-center justify-center lg:pt-32 pt-8 pb-20">
        <h1 className="text-center font-bold text-white mb-10 text-2xl md:text-3xl w-11/12 md:w-3/4 px-5">
          We are passionate about revolutionizing the way we learn. Our innovative platform{" "}
          <span className="text-blue-500">combines technology</span>,{" "}
          <span className="text-yellow-600">expertise</span>, and community to create an{" "}
          <span className="text-yellow-600">unparalleled educational experience.</span>
        </h1>
        <hr className="border-t border-gray-400 w-screen mt-20" />
      </div>
    </div>
  );
}

export default Aboutus;
