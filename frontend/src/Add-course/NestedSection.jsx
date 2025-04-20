import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RxDropdownMenu } from "react-icons/rx";
import { MdOutlineModeEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { addCourseDetails, allSection } from '../slices/CourseSlice';
import axios from 'axios';
import AddLecturePage from './AddLecturePage';

const NestedSection = () => {
    const [addLecture,setAddLecture]=useState(false);
    const [sectionId,setSectionId]=useState(null);
  const selector = useSelector((state) => state.Course.course);
  const section =selector?.Sections;
  const dispatch = useDispatch();
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (index) => {
    setOpenSections(prev => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

//   handle adding lectuers

 const addingLectures=(id)=>{
    setSectionId(id)
    setAddLecture(!addLecture);

 }


const deleteSection=async (id)=>{
    try {
        const courseId=selector._id;
         console.log(id,courseId);
         const response = await axios.delete("http://localhost:8080/api/v1/delete-section", {
             data: { id, courseId },
             withCredentials: true,
           });
           console.log(response.data.updatedData);
         dispatch(addCourseDetails(response.data.updatedData))
      } catch (error) {
         console.log("something went wrong while deleting the section from the backend",error.message);
        }
 }


console.log(section)
  return (
    <div>
      {section?.map((ele, index) => (
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
              <RiDeleteBin6Line className="hover:text-red-500 cursor-pointer text-lg" onClick={() => deleteSection(ele._id)} />
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
                <p className="text-yellow-400 font-semibold text-lg mb-3 cursor-pointer" 
                onClick={()=>addingLectures(ele._id)}>+ Add Lectures</p>
              )}
            </div>
          )}
        </div>
      ))}
{console.log(addLecture)}
      {addLecture&&<AddLecturePage sectionId={sectionId} setAddLecture={setAddLecture}/>}
    </div>
  );
};

export default NestedSection;
