import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import DashboardBanner from '../Banner/DashboardBanner';
import SmallCards from '../Cards/SmallCards';
import CourseCardBanner from '../Banner/CourseCardBanner';
import axios from 'axios';
import CourseCards from '../Cards/CourseCards';
import { useSelector } from 'react-redux';

export default function Dashboard() {
    const selector = useSelector((state) => state.auth.user);
    const id = selector.user._id;
    // console.log(selector);
    const [filteredCourses, setFilteredCourses] = useState([]);
    const [coursesData, setCoursesData] = useState([]);
    const [error, setError] = useState(false);

    const getCardData = () => {
        axios.get(`http://localhost:3000/api/v1/enrolledCourses/${id}`)
            .then((response) => {
                setFilteredCourses(response.data.data); // it holds the updated data list after every search
                setCoursesData(response.data.data); // it holds the entire data 
                setError(false); // Reset error state on successful fetch
            }).catch(() => {
                setError(true); // Set error state if there is a problem fetching data
            });
    };

    useEffect(() => {
        getCardData();
    }, []);

    const handleSearchInput = (searchDataContainer) => {
        const filtered = coursesData.filter((course) => course.title.toLowerCase().includes(searchDataContainer.toLowerCase()));
        setFilteredCourses(filtered);
        setError(filtered.length === 0); // Set error state based on search results
    };

    return (
        <div>
            <Navbar />
            <DashboardBanner searchDataContainer={handleSearchInput} />
            <SmallCards />
            <CourseCardBanner />
            <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500">
                {coursesData.length === 0 ? (
                    <div><h1 className='text-xl text-customBlue ml-11 font-semibold'>No active courses</h1></div>
                ) : error ? (
                    <div>
                        <h1 className='text-xl text-customBlue ml-11 font-semibold'>No courses found...</h1>
                    </div>
                ) : (

                    <div className='grid grid-cols-4 mx-10 gap-5'>
                        {filteredCourses.map((value, index) => (
                            <div key={index} className='mb-5'>
                                <CourseCards data={value} />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
