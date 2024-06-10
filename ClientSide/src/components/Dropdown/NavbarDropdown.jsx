import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../features/authSlice';

export default function NavbarDropdown() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("userData");
        dispatch(logout());
        navigate('/login'); // Redirect to login page
    };

    return (
        <div className='z-10 container absolute flex top-16 left-24 justify-end'>
            <div className="text-gray-700 bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
                <div className="px-4 py-2.5 text-sm hover:bg-gray-100">
                    <Link to='/'> <div className='text-gray-900'>Home</div> </Link>
                </div>
                <div className="px-4 py-2.5 text-sm hover:bg-gray-100">
                    <Link to='/mylearning'><div className='text-gray-900'>My Learning</div></Link>
                </div>
                <div className="px-4 py-2.5 text-sm hover:bg-gray-100">
                    <Link to="/favouriteList"><div className='text-gray-900'>Favourite Courses</div></Link>
                </div>
                <div className="px-4 py-2.5 text-sm hover:bg-gray-100">
                    <Link to="/profile"><div className='text-gray-900'>User Profile</div></Link>
                </div>
                <div className="px-4 py-2.5 text-sm hover:bg-gray-100">
                    <Link to="/contactus"><div className='text-gray-900'>Contact Us</div></Link>
                </div>
                <div className="px-4 py-2.5 text-sm hover:bg-gray-100">
                    <Link to="/aboutUs"><div className='text-gray-900'>About Us</div></Link>
                </div>
                <div className="px-4 py-2.5 text-sm hover:bg-gray-100">
                    <div className='text-gray-900 cursor-pointer' onClick={handleLogout}>Logout</div>
                </div>
            </div>
        </div>
    );
}
