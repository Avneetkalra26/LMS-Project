import React, { useEffect, useState } from 'react';
import NavbarDropdown from '../Dropdown/NavbarDropdown';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const selector = useSelector((state) => state.auth.user)
    const userEmail = selector.user.email;
    // const [userEmail, setUserEmail] = useState("")
    // const getUserEmail = () => {
    //     axios.get(`http://localhost:3000/api/v1/getUserProfile/${id}`)
    //         .then((response) => {
    //             setUserEmail(response.data.userData.email)
    //         })
    // }
    // useEffect(() => {
    //     getUserEmail()
    // })
    const [dropdown, setDropdown] = useState(false);
    return (
        <>
            <nav className="bg-white shadow-md px-4 flex justify-between ">
                <div className="flex items-center my-4 mx-4">
                    <Link to="/"><img src="https://lmsolutionsllc.com/wp-content/uploads/2022/10/LMS-Updated-Logo.png" alt="Logo" className="w-20 h-18" /></Link>
                    {/* <h1 className="text-gray-800 text-2xl font-semibold ml-1">Learnify</h1> */}
                </div>
                <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#0C7185" className="size-7 mr-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                    <h3 className="mr-5 text-sm">{userEmail}</h3>
                    <button type="button" onClick={() => setDropdown(!dropdown)} className="cursor-pointer me-6">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#0C7185" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </div>
            </nav>
            {dropdown && <NavbarDropdown />}
        </>
    );
}


