import React, { useEffect, useState } from "react";
import MyLearningBanner from "../Banner/MyLearningBanner"
import CoursesCard from "../Cards/CourseCards"
import axios from 'axios'
import { useSelector } from "react-redux";

const MyLearning = () => {

  const { user } = useSelector((state) => state.auth);
  const userID = user.user._id;

  const [coursesListProgress, setcoursesListProgress] = useState([]);
  const [coursesListCompleted, setcoursesListCompleted] = useState([]);
  const [progress, setprogress] = useState(0);
  const [completed, setcompleted] = useState(0);

  const fetchCompletedCourse = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/v1/completed/${userID}`)
      setcompleted(response.data.count)
      setcoursesListCompleted(response.data.data)

    } catch (error) {
      console.log("Error while getting the completed course")
      console.log(error)

    }
  }

  const getEnrolledCourses = () => {
    axios.get(`http://localhost:3000/api/v1/enrolledCourses/${userID}`)
      .then((response) => {
        setprogress(response.data.count)

      })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    fetchCompletedCourse()
    getEnrolledCourses()

  }, [userID])

  return (
    <div className="bg-gray-50">
      <MyLearningBanner active={progress} done={completed} />
      {/* <div className="text-2xl text-gray-700 mt-10">
        <h1 className="ms-6 font-semibold">In Progress Courses</h1>
      </div>
      {coursesListProgress.length > 0 ? (
        <div className="flex flex-wrap ms-5">
          {coursesListProgress.map((course, index) => {
            
            return (
              <CoursesCard
                key={index}
                data={course}
                enrolledButton={false}
              
              />
            );
          })}
        </div>
      ) : (
        <div className="h-50 ms-10 mt-7 pb-7 text-xl text-gray-600">
          No progress courses found.
        </div>
      )} */}
      <div className="text-2xl text-gray-700 mt-10 mb-5">
        <h1 className="ms-6 font-semibold">Completed Courses</h1>
      </div>
      <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500">
        {coursesListCompleted.length > 0 ? (
          <div className='grid grid-cols-4 mx-16 gap-5'>
            {coursesListCompleted.map((course, index) => {
              return (
                <div key={index} className='mb-5'>
                  <CoursesCard
                    key={index}
                    data={course}
                  />
                </div>
              );
            })}
          </div>
        ) : (
          <div className="h-50 ms-10 mt-7 pb-7 text-xl text-gray-600">
            No completed courses found.
          </div>
        )}
      </div>
    </div>
  );
};

export default MyLearning;
