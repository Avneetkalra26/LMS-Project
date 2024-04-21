import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import DashboardBanner from '../Banner/DashboardBanner'
import SmallCards from '../Cards/SmallCards'
import CourseCards from '../Cards/CourseCards'
import { cardData } from '../../utils/CardsMockData'
import CourseCardBanner from '../Banner/CourseCardBanner'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
export default function Dashboard() {
    // const [searchData, setSearchData] = useState("")
    // const handleSearchInput = (searchDataContainer)=>{
    //           setSearchData(searchDataContainer)
    // }
    const [filteredCourses, setFilteredCourses] = useState([])
    const [coursesData, setCoursesData] = useState(cardData)
    useEffect(() => {
        setFilteredCourses(coursesData)
    }, [])
    const handleSearchInput = (searchDataContainer) => {
        const filtered = coursesData.filter((course) => course.title.toLowerCase().includes(searchDataContainer.toLowerCase()));
        setFilteredCourses(filtered)
    }
    return (
        <div>
            <Navbar />
            <DashboardBanner searchDataContainer={handleSearchInput} />
            {/* <h1>{searchData}</h1> */}
            <SmallCards />
            <CourseCardBanner />
            <div data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1500">
                <div className='grid grid-cols-4 ml-10 me-10 gap-3'>
                    {filteredCourses.map((value, index) => (
                        <div key={index} className='mb-5'>
                            {/* Adjust the width accordingly to accommodate the gap and margin */}
                            <Link to={"/contentpage?id=" + value.title}>
                                <CourseCards data={value} />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}
