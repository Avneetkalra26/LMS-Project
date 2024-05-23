import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CourseCards from './CourseCards'
export default function AllCourses() {
  const getCardData = () => {
    axios.get("http://localhost:3000/api/v1/getCards")
      .then((response) => {
        // console.log(response.data.data)
        setCoursesData(response.data.data)
      })
  }
  const [coursesData, setCoursesData] = useState([])
  useEffect(() => {
    getCardData()
  }, [])
  return (
    <div className='mt-10'>
      <h1 className="text-2xl font-semibold mx-10 mb-10 text-gray-500">All Courses</h1>
      <div data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1500">
        <div className='grid grid-cols-4 mx-10 gap-5'>
          {coursesData.map((value, index) => (
            <div key={index} className='mb-5'>
              <CourseCards data={value} activeLink={true} />
            </div>
          ))
          }
        </div >
      </div >
    </div>
  )
}
