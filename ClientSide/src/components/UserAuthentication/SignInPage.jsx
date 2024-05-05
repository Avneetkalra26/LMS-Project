import React, { useState } from 'react'
import style from '../../CssModules/UserAccounts.module.css'
import img from '../../assets/form.jpg'
import { Link } from 'react-router-dom'
export default function SignInPage() {
    return (
        <div className={`flex justify-center items-center h-screen`}>
            <div className={`p-6 my-6 w-3/5`}>
                <div className="flex rounded-lg  m-8 px-6 pt-2 pb-1 shadow-md">
                    <div className='grid grid-cols-2 container'>
                        <div className='flex items-center'> <img src={img} className='w-72 h-60' alt="" /></div>
                        <div className='me-6'>
                        <form class="mt-6 mx-auto ">
                            <div className={`card-title font-bold text-xl mt-2 mb-7 ml-2 ${style.pageTitle}`}>
                                Sign In
                            </div>
                            <div className="mb-7">
                                <label htmlFor="name" class="block mb-2 text-sm font-semibold text-gray-700 ml-3">Name</label>
                                <div class="relative">
                                    <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                        <img src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png" className='w-5 h-5' alt="" />
                                    </div>
                                    <input
                                        type="text"
                                        id="name"
                                        className="bg-gray-100 border border-gray-200 text-gray-950 text-sm rounded-full w-full ps-10 p-2.5 outline-gray-300"
                                        placeholder="Enter Name" required
                                    />
                                </div>
                            </div>
                            <div className="mb-12">
                                <label htmlFor="userPassword" class="block mb-2 text-sm font-semibold text-gray-700 ml-3">Password</label>
                                <div class="relative">
                                    <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                        <img src="https://cdn-icons-png.flaticon.com/128/4503/4503969.png" className="w-5 h-5" alt="" />
                                    </div>
                                    <input
                                        type="text"
                                        id="userPassword"
                                        className="bg-gray-100 border border-gray-200 text-gray-950 text-sm rounded-full w-full ps-10 p-2.5  outline-gray-300"
                                        placeholder="Enter Password" required
                                    />
                                </div>
                            </div>
                            <Link to="/mainpage">
                                <button type="button" className={`text-white text-center text-md font-bold mb-5 rounded-full block w-full p-2 ${style.btnBgColor}`}>Sign In</button>
                            </Link>
                            <Link to="/registration">
                                <p className='text-center cursor-pointer mb-6'><span className='text-xs' style={{ color: "#B20303" }}>Not an Account?</span>
                                    <span className='text-xs font-bold ml-1' style={{ color: "#B20303" }}>Create Account</span>
                                </p>
                            </Link>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


