import React, { useState, useEffect } from 'react';
import ContentBanner from '../Banner/ContentBanner'
import CourseContent from '../Content/CourseContent'
import Navbar from '../Navbar/Navbar'
import axios from 'axios';
export default function CourseContentPage() {
  const params = new URLSearchParams(window.location.search);
  const courseID = params.get("id");
  const [courseData, setCourseData] = useState({}); // State to store fetched course data

  useEffect(() => {
    // Function to fetch course data based on ID
    const fetchCourseData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/v1/getcardbyid/${courseID}`);
        if (response.data.success) {
          setCourseData(response.data.data); // Update course data state with fetched data
        } else {
          console.error('Failed to fetch course data');
        }
      } catch (error) {
        console.error('Error fetching course data:', error);
      }
    };

    fetchCourseData(); // Call fetchCourseData function when component mounts
  }, [courseID]); // Re-run effect when idTitle changes
  return (
    <div>
      <Navbar />
      <ContentBanner courseTitle={courseData.title} />
      <CourseContent data={courseData} />
    </div>
  )
}
