import React, { useState } from 'react'
import NavbarDropdown from '../Dropdown/NavbarDropdown'

export default function Navbar() {
    const [dropdown, setDropdown] = useState(false)
    return (
        <>
            <nav className="navbar navbar-light bg-white shadow-md ">
                <a className="navbar-brand px-3" href="#">
                    <div className='flex items-center'>
                        <img src="https://us.123rf.com/450wm/devidgrutz/devidgrutz2206/devidgrutz220600285/187089425-flat-web-template-with-lms-for-concept-design-concept-of-learning-management-system.jpg?ver=6" alt=""
                            className='w-14 h-14' />
                        <h1 className='text-slate-900 fs-5 fw-semibold py-2'>LMS</h1>

                    </div>
                </a >
                <div className="d-flex align-items-center">
                    <img className="w-7 h-7 mr-2" src="https://cdn-icons-png.flaticon.com/128/1144/1144709.png" alt="" />
                    <span className="mr-5">avneetkalra26@gmail.com</span>
                    <button type="button" onClick={() => setDropdown(!dropdown)} className='cursor-pointer'>
                        <img className="w-5 h-5 me-6" src="https://cdn-icons-png.flaticon.com/512/2516/2516745.png" alt="" />
                    </button>
                </div>
            </nav >
            {dropdown && (
               < NavbarDropdown />
            )
            }
        </>
    )
}
