import React from 'react'
import { Link } from 'react-router-dom'
export default function NavbarDropdown() {
    return (
        <div className='z-10 container absolute flex  top-16 left-24 justify-end ' >
            <div class="text-gray-700  bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
                <div class="px-4 py-2.5 text-sm hover:bg-gray-100">
                    <Link to='/mainpage'> <div className='text-gray-900 '>Home</div> </Link>
                </div>
                <div class="px-4 py-2.5 text-sm hover:bg-gray-100 ">
                    <div className='text-gray-900 '>My Learning</div>
                </div>
                <div class="px-4 py-2.5 text-sm hover:bg-gray-100 ">
                    <div className='text-gray-900 '>My Submissions</div>
                </div>
                <div class="px-4 py-2.5 text-sm hover:bg-gray-100 ">
                    <div className='text-gray-900 '>Favourite Courses</div>
                </div>
                <div class="px-4 py-2.5 text-sm hover:bg-gray-100 ">
                    <Link to="/profile"><div className='text-gray-900 '>Profile</div></Link>
                </div>
                <div class="px-4 py-2.5 text-sm hover:bg-gray-100 ">
                    <Link to="/contactus"><div className='text-gray-900 '>Contact Us</div></Link>
                </div>
                <div class="px-4 py-2.5 text-sm hover:bg-gray-100 ">
                    <div className='text-gray-900 '>Logout</div>
                </div>
            </div>
        </div >
    )
}
