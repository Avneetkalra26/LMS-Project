import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import DashboardBanner from '../Banner/DashboardBanner'
import SmallCards from '../Cards/SmallCards'
import CourseCards from '../Cards/CourseCards'
import { cardData } from '../../utils/CardsMockData'
import CourseCardBanner from '../Banner/CourseCardBanner'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'
export default function Dashboard() {
    // const [searchData, setSearchData] = useState("")
    // const handleSearchInput = (searchDataContainer)=>{
    //           setSearchData(searchDataContainer)
    // }
    const [filteredCourses, setFilteredCourses] = useState([])
    const getCardData = () => {
        axios.get("http://localhost:3000/api/v1/getCards")
            .then((response) => {
                setFilteredCourses(response.data.data)
                console.log(response.data.data)
            })
    }
    const [coursesData, setCoursesData] = useState(cardData)
    useEffect(() => {
        getCardData()
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
                <div className='grid grid-cols-4 mx-10 gap-5'>
                    {filteredCourses.map((value, index) => (
                        <div key={index} className='mb-5'>
                            {/* Adjust the width accordingly to accommodate the gap and margin */}
                            <Link to={"/contentpage?id=" + value._id}>
                                <CourseCards data={value} />
                            </Link>
                        </div>
                    ))
                    }
                </div >
            </div >
        </div >

    )
}
