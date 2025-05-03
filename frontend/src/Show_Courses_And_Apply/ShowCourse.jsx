import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const ShowCourse = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [courses, setCourses] = useState([]);
  const [allCourses, setAllCourses] = useState([]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


  const findCourse = async () => {
    try {
      const data = await axios.get(
        `http://localhost:8080/api/v1/getcourse/${params.coursename}`,
        {
          withCredentials: true,
        }
      );
      setCourses(data.data.response);
    } catch (error) {
      console.log("something went wrong while fetching the course", error.message);
    }
  };

  const findAllCourses = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/v1/findallCourses/${params.coursename}`,
        {
          withCredentials: true,
        }
      );
      setAllCourses(response.data.response);
    } catch (error) {
      console.log("something went wrong while fetching all courses", error.message);
    }
  };

  useEffect(() => {
    findCourse();
    findAllCourses();
  }, [params.coursename]);

  const handleClick = (id) => {
    navigate(`/course/${id}`);
  };

  return (
    <div className="min-h-screen bg-[#000814] p-4">
      <div className="w-full h-60 bg-[#161D29] p-4">
        <h1 className="text-gray-500 mt-10">
          Home/Catalog/
          <span className="text-yellow-400">{params.coursename}</span>
        </h1>
        <h1 className="text-gray-100 text-4xl mt-2">{params.coursename}</h1>
        <p className="text-gray-400">Description</p>
      </div>

      <div className="mt-10 px-4 min-w-screen">
        <h1 className="text-white text-3xl mb-6">{params.coursename} Courses</h1>
        {courses.length === 0 ? (
          <h1 className="text-2xl mt-10 text-center text-gray-400">No Course Found</h1>
        ) : (
          <Slider {...settings} className="px-2">
            {courses.map((ele) => (
              <div key={ele._id} className="px-2 cursor-pointer" onClick={() => handleClick(ele._id)}>
                <div className="bg-[#161D29] p-4 rounded-lg">
                  <img src={ele.Thumbnail} alt={ele.Title} className="w-full h-40 object-cover rounded-md" />
                  <h1 className="text-white text-xl mt-3 truncate">{ele.Title}</h1>
                  <h1 className="text-gray-400 text-sm mt-1">
                    By <span className="text-yellow-300">{ele.user.firstName} {ele.user.lastName}</span>
                  </h1>
                  <h1 className="text-white text-lg mt-2">Rs. {ele.Price}</h1>
                </div>
              </div>
            ))}
          </Slider>
        )}
      </div>

      <div className="mt-16 px-4">
        <h1 className="text-white text-3xl mb-6">All Courses</h1>
        {allCourses.length === 0 ? (
          <h1 className="text-2xl mt-12 text-center text-gray-400 mb-16">No Course Found</h1>
        ) : (
          <Slider {...settings} className="px-2">
            {allCourses?.map((ele) => (
              <div key={ele._id} className="px-2 cursor-pointer" onClick={() => handleClick(ele._id)}>
                <div className="bg-[#161D29] p-4 rounded-lg">
                  <img src={ele.Thumbnail} alt={ele.Title} className="w-full h-40 object-cover rounded-md" />
                  <h1 className="text-white text-xl mt-3 truncate">{ele.Title}</h1>
                  <h1 className="text-gray-400 text-sm mt-1">
                    By <span className="text-yellow-300">{ele.user.firstName} {ele.user.lastName}</span>
                  </h1>
                  <h1 className="text-white text-lg mt-2">Rs. {ele.Price}</h1>
                </div>
              </div>
            ))}
          </Slider>
        )}
      </div>
    </div>
 );
};

export default ShowCourse;