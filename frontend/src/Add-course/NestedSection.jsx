import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RxDropdownMenu } from "react-icons/rx";
import { MdOutlineModeEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { allSection } from '../slices/CourseSlice';

const NestedSection = () => {
  const selector = useSelector((state) => state.Course.allSection);
  const dispatch = useDispatch();
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (index) => {
    setOpenSections(prev => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const deleteSection = (index) => {
    const updatedSections = selector.filter((_, i) => i !== index); // Correct way to remove item from array
    dispatch(allSection(updatedSections));
  };

  return (
    <div>
      {selector?.map((ele, index) => (
        <div key={index} className="border-b border-gray-600">
          <div className="flex items-center justify-between py-2 px-4">
            {/* Left Side */}
            <div
              className="flex items-center gap-2 text-white cursor-pointer mb-4"
              onClick={() => toggleSection(index)}
            >
              <RxDropdownMenu className={`text-2xl transition-transform ${openSections[index] ? 'rotate-180' : ''}`} />
              <p className="font-medium text-gray-300 text-lg">{ele.Section}</p>
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-4 text-gray-400">
              <MdOutlineModeEdit className="hover:text-blue-400 cursor-pointer text-lg" />
              <RiDeleteBin6Line className="hover:text-red-500 cursor-pointer text-lg" onClick={() => deleteSection(index)} />
              <div className="border-l border-gray-600 h-5"></div>
            </div>
          </div>

          {/* Dropdown Content */}
          {openSections[index] && (
            <div className="ms-10 mb-2 text-sm text-gray-300">
              {ele.lectures?.length > 0 ? (
                ele.lectures.map((lecture, i) => (
                  <div key={i} className="py-1">🎥 {lecture.title}</div>
                ))
              ) : (
                <p className="text-yellow-400 font-semibold text-lg mb-3">+ Add Lectures</p>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default NestedSection;
