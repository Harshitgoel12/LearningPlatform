import React from 'react';
import { IoIosChatboxes } from "react-icons/io";
import { FaEarthAmericas } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import CountryCode from "../data/countrycode.json";

function ContectUs() {
  return (
    <div className="w-full bg-[#000814] text-white py-10">
      <div className="max-w-7xl mx-auto flex flex-wrap lg:flex-nowrap gap-10 px-4">
        
        {/* Left Section */}
        <div className="w-full lg:w-1/2 h-fit flex justify-center lg:justify-end">
          <div className="w-full md:w-10/12 xl:w-2/3 bg-[#161D29] p-6 rounded-xl space-y-8">
            
            {/* Chat */}
            <div >
              <div className="flex items-center gap-3 text-gray-400">
                <IoIosChatboxes className="text-2xl" />
                <h2 className="text-white text-lg font-bold">Chat with us</h2>
              </div>
              <p className="text-gray-400 mt-1">Our friendly team is here to help.</p>
              <span className="block font-semibold text-sm text-gray-400 mt-1">info@studynotion.com</span>
            </div>

            {/* Visit */}
            <div>
              <div className="flex items-center gap-3 text-gray-400">
                <FaEarthAmericas className="text-2xl" />
                <h2 className="text-white text-lg font-bold">Visit Us</h2>
              </div>
              <p className="text-gray-400 mt-1">Come and say hello at our office HQ.</p>
              <span className="block font-semibold text-sm text-gray-400 mt-1">
                Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016
              </span>
            </div>

            {/* Call */}
            <div>
              <div className="flex items-center gap-3 text-gray-400">
                <IoCall className="text-2xl" />
                <h2 className="text-white text-lg font-bold">Call us</h2>
              </div>
              <p className="text-gray-400 mt-1">Mon - Fri From 8am to 5pm</p>
              <span className="block font-semibold text-sm text-gray-400 mt-1">+91 6366 000 666</span>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-2/3">
          <div className="border border-gray-500 rounded-lg p-8 space-y-6">
            
            <div className="space-y-4">
              <h1 className="text-3xl lg:text-4xl font-bold leading-snug">Got an idea? We've got the skills. Let's team up.</h1>
              <p className="text-gray-400">Tell us more about yourself and what you've got in mind.</p>
            </div>

            <form className="space-y-6">
              {/* Name fields */}
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex flex-col w-full">
                  <label htmlFor="firstname" className="mb-2">First Name <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    id="firstname"
                    name="firstName"
                    placeholder="Enter first name"
                    className="bg-[#161D29] px-4 py-3 rounded-lg outline-none"
                  />
                </div>
                <div className="flex flex-col w-full">
                  <label htmlFor="lastName" className="mb-2">Last Name <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Enter last name"
                    className="bg-[#161D29] px-4 py-3 rounded-lg outline-none"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="flex flex-col">
                <label htmlFor="email" className="mb-2">Email ID</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  className="bg-[#161D29] px-4 py-3 rounded-lg outline-none"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block mb-2">Phone Number <span className="text-red-500">*</span></label>
                <div className="flex gap-4 flex-wrap w-full">
                  <select
                    name="countryCode"
                    id="countryCode"
                    className="bg-[#161D29] px-4 py-3 rounded-lg text-gray-400 font-semibold outline-none"
                  >
                    {CountryCode.map((ele, idx) => (
                      <option key={idx} value={ele.code}>
                        {ele.code} - {ele.country}
                      </option>
                    ))}
                  </select>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    placeholder="Enter phone number"
                    className="bg-[#161D29] flex-1 px-3 py-3 rounded-lg outline-none "
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Enter your message here"
                  className="bg-[#161D29] px-4 py-3 rounded-lg w-full outline-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg hover:bg-yellow-300 transition"
                >
                  Send Your Message
                </button>
              </div>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
}

export default ContectUs;
