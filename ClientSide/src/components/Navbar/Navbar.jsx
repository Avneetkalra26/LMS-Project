import React, { useState } from 'react';
import NavbarDropdown from '../Dropdown/NavbarDropdown';

export default function Navbar() {
    const [dropdown, setDropdown] = useState(false);
    return (
        <>
            <nav className="bg-white shadow-md p-4 flex justify-between ">
                <div className="flex items-center">
                    <img src="https://us.123rf.com/450wm/devidgrutz/devidgrutz2206/devidgrutz220600285/187089425-flat-web-template-with-lms-for-concept-design-concept-of-learning-management-system.jpg?ver=6" alt="Logo" className="w-14 h-14" />
                    <h1 className="text-gray-800 text-xl font-semibold ml-1">LMS</h1>
                </div>
                <div className="flex items-center">
                    <img src="https://cdn-icons-png.flaticon.com/128/1144/1144709.png" alt="Profile" className="w-7 h-7 mr-2" />
                    <h3 className="mr-5 text-sm">avneetkalra26@gmail.com</h3>
                    <button type="button" onClick={() => setDropdown(!dropdown)} className="cursor-pointer me-6">
                        <img src="https://cdn-icons-png.flaticon.com/512/2516/2516745.png" alt="Dropdown" className="w-5 h-5" />
                    </button>
                </div>
            </nav>
            {dropdown && <NavbarDropdown />}
        </>
    );
}


