import React, { useState } from 'react'
import style from '../../CssModules/UserAccounts.module.css'
import img from '../../assets/form.jpg'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form";

export default function SignUpPage() {
    const [userData, setUserData] = useState("");
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isValid },
    } = useForm();

    const onDataSubmit = (data) => {
        if (isValid) {
            reset();
        }
        navigate('/mainpage')
        console.log(data);
        setUserData(data);
    };

    const handlePasswordValidation = (formData) => {
        const regex = /^(?=.*[!@#$%^&*])(?=.*\d)(?=.*[A-Z]).{8,}$/;
        return (
            regex.test(formData) ||
            "Password must contain a special character, a number, 8 characters,and an uppercase letter"
        );
    };
    const handleEmailPassword = (formData) => {
        const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        return (
            regex.test(formData) ||
            "Valid email example@gmail.com"
        );
    }
    return (
        <div className={`flex justify-center items-center h-screen`}>
            <div className={`p-6 my-6 w-3/5 `}>
                <div className="flex rounded-lg  m-8 px-4 pt-2 pb-1 shadow-md">
                    <div className='flex items-center'>
                        <img src={img} className='w-72 h-60' alt="" />
                    </div>
                    <div className="card-body ml-10">
                        <form className="max-w-xs mt-6 mx-auto" onSubmit={handleSubmit(onDataSubmit)}>
                            <div className={`card-title font-bold text-xl mt-2 mb-7 ml-2 ${style.pageTitle}`}>
                                Sign Up
                            </div>
                            <div className="mb-4">
                                <label htmlFor="name" className="block mb-2 text-sm font-semibold text-gray-700 ml-3">Name</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                        <img src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png" className='w-5 h-5' alt="" />
                                    </div>
                                    <input
                                        type="text"
                                        className="bg-gray-100 border border-gray-200 text-gray-950 text-sm rounded-full block w-full ps-10 p-2.5  outline-gray-300"
                                        placeholder="Enter Name"
                                        {...register("name", {
                                            required: "Username is required",
                                            maxLength: {
                                                value: 8,
                                                message: "Username should not exceed 8 characters",
                                            },
                                        })}
                                    />
                                    {errors.name && (
                                        <div className="absolute text-red-500 text-xs italic  mt-1 ml-3">
                                            {errors.name.message}
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="emailAddress" className="block mb-2 text-sm font-semibold text-gray-700 ml-3">Email</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                        <img src="https://cdn-icons-png.flaticon.com/128/732/732200.png" className='w-4 h-4' alt="" />
                                    </div>
                                    <input
                                        type="text"
                                        className="bg-gray-100 border border-gray-500 text-gray-950 text-sm rounded-full block w-full ps-10 p-2.5  outline-gray-300"
                                        placeholder="Enter Email Address"
                                        {...register("email", {
                                        validate:handleEmailPassword,
                                        })} />
                                    {errors.email && (
                                        <div className="absolute text-red-500 text-xs italic ml-3 mt-1">
                                            {errors.email.message}
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="mb-5">
                                <label htmlFor="userPassword" className="block mb-2 text-sm font-semibold text-gray-700 ml-3">Password</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                        <img src="https://cdn-icons-png.flaticon.com/128/4503/4503969.png" className="w-5 h-5" alt="" />
                                    </div>
                                    <input
                                        type="password"
                                        className="bg-gray-100 border border-gray-500 text-gray-950 text-sm rounded-full block w-full ps-10 p-2.5  outline-gray-300"
                                        placeholder="Enter Password"
                                        {...register("password", {
                                            required: "Password is required",
                                            validate: handlePasswordValidation,
                                        })}
                                    />
                                    {errors.password && (
                                        <div className="absolute text-red-500 text-xs mt-1 ml-3 italic">
                                            {errors.password.message}
                                        </div>
                                    )}
                                </div>
                            </div>

                            <button type="submit"
                                className={`text-white text-center text-md fw-bolder mb-3 rounded-full block w-full p-2 ${style.btnBgColor}`}>Sign Up</button>

                            <Link to="/">
                                <p className='text-center cursor-pointer mb-6'><span className='text-xs' style={{ color: "#B20303" }}>Already Registered?</span>
                                    <span className='text-xs fw-bolder ml-1' style={{ color: "#B20303" }}>Sign In</span>
                                </p>
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
