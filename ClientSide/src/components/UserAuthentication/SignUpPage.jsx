import React, { useState } from 'react'
import style from '../../CssModules/UserAccounts.module.css'
import img from '../../assets/form.jpg'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form";
import axios from 'axios';

export default function SignUpPage() {
    const [showPassword, setShowPassword] = useState("")
    const [emailExistError, setEmailExistError] = useState("")
    const [userExistError, setUserExistError] = useState("")
    const navigate = useNavigate();
    const {

        register,
        handleSubmit,
        reset,
        formState: { errors, isValid },
    } = useForm();

    const onDataSubmit = (data) => {
        if (isValid) {
            try {
                axios.post("http://localhost:3000/api/v1/signupUser", {
                    data
                }).then((response) => {
                    const success = response.data.success;
                    if (success) {
                        Swal.fire({
                            icon: 'success',
                            title: 'User Registered Successfully',
                            showConfirmButton: true,
                        }).then((response) => {
                            if (response.isConfirmed) {
                                reset(); // Reset form after navigation
                                navigate("/");
                            }
                        })
                    }
                }).catch((error) => {
                    const errorCode = error.response.data.errorCode;
                    let errorMessage = "";
                    if (errorCode === "email") {
                        errorMessage = error.response.data.error;
                        setEmailExistError(errorMessage)
                    }
                    else if (errorCode === "username") {
                        errorMessage = error.response.data.error;
                        setUserExistError(errorMessage)
                    }
                    else {
                        errorMessage = "An error occurred while signing in.";
                        console.log(errorMessage)
                    }
                })

            }
            catch (error) {
                console.log("Error in Submission", error);
            }
        }
    };
    // const handleUsernameValidation = (formData) => {
    //     const regex = /^[A-Za-z][A-Za-z0-9_]{7,29}$/;
    //     return (
    //         regex.test(formData) ||
    //         "Username must start with a letter and contain at least 8 characters, consisting of letters, digits, or underscores."
    //     );
    // }
    const handleUsernameValidation = (formData) => {
        const regex = /^[A-Z][a-zA-Z]{4,7}$/;
        return (
            regex.test(formData) ||
            "Username start with a capital letter, contain only alphabets, and be between 5 to 8 characters long."
        );
    }
    
    const handlePasswordValidation = (formData) => {
        const regex = /^(?=.*[!@#$%^&*])(?=.*\d)(?=.*[A-Z]).{8,}$/;
        return (
            regex.test(formData) ||
            "Password must contain a special character, a number, 8 characters,and an uppercase letter"
        );
    };
    const handleEmailValidation = (formData) => {
        const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        return (
            regex.test(formData) ||
            "Valid email example@gmail.com"
        );
    }
    return (
        <div className={`flex justify-center items-center h-screen`}>
            <div className={`p-6 my-6 w-3/5`}>
                <div className="flex rounded-lg  m-8 px-6 pt-2 pb-1 shadow-md">
                    <div className='grid grid-cols-2 container'>
                        <div className='flex items-center'> <img src={img} className='w-72 h-60' alt="" /></div>
                        <div className='me-6'>
                            <form className="mt-6 mx-auto" onSubmit={handleSubmit(onDataSubmit)}>
                                <div className={`card-title font-bold text-xl mt-2 mb-7 ml-2 ${style.pageTitle}`}>
                                    Sign Up
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="username" className="block mb-2 text-sm font-semibold text-gray-700 ml-3">Name</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                            <img src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png" className='w-5 h-5' alt="" />
                                        </div>
                                        <input
                                            type="text"
                                            id="username"
                                            className="bg-gray-100 border border-gray-200 text-gray-950 text-sm rounded-full w-full ps-10 p-2.5  outline-gray-300"
                                            placeholder="Enter Name"
                                            {...register("username", {
                                                required: "* Username is required",
                                                validate: handleUsernameValidation,
                                            })}
                                        />
                                        <div className='mb-10'>
                                            <div className="absolute text-red-500 text-xs italic  mt-1 ml-3">
                                                {userExistError || errors.username && (errors.username.message)}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="mb-4">
                                    <label htmlFor="emailAddress" className="block mb-2 text-sm font-semibold text-gray-700 ml-3">Email</label>
                                    <div className="relative ">
                                        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                            <img src="https://cdn-icons-png.flaticon.com/128/732/732200.png" className='w-4 h-4' alt="" />
                                        </div>
                                        <input
                                            type="text"
                                            id="emailAddress"
                                            className="bg-gray-100 border border-gray-200 text-gray-950 text-sm rounded-full w-full ps-10 p-2.5  outline-gray-300"
                                            placeholder="Enter Email Address"
                                            {...register("email", {
                                                required: "* Email is required",
                                                validate: handleEmailValidation
                                            })} />
                                        <div className='mb-10'>
                                            <div className="absolute text-red-500 text-xs italic  mt-1 ml-3">
                                                {emailExistError || errors.email && (errors.email.message)}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="userPassword" className="block mb-2 text-sm font-semibold text-gray-700 ml-3">Password</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                            <img src="https://cdn-icons-png.flaticon.com/128/4503/4503969.png" className="w-5 h-5" alt="" />
                                        </div>
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            id="userPassword"
                                            className="bg-gray-100 border border-gray-200 text-gray-950 text-sm rounded-full w-full ps-10 p-2.5  outline-gray-300"
                                            placeholder="Enter Password"
                                            {...register("password", {
                                                required: "* Password is required",
                                                validate: handlePasswordValidation,
                                            })}
                                        />
                                        {/* show password */}
                                        <div className="absolute inset-y-0 end-6 flex items-center ps-3.5 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
                                            <img src={showPassword ? "https://cdn-icons-png.flaticon.com/128/4121/4121492.png" : "https://cdn-icons-png.flaticon.com/128/875/875643.png"}
                                                className="w-5 h-5" alt="" />
                                        </div>
                                        {errors.password && (
                                            <div className='mb-14'>
                                                <div className="absolute text-red-500 text-xs mt-1 ml-3 italic ">
                                                    {errors.password.message}
                                                </div>
                                            </div>
                                        )}

                                    </div>
                                </div>

                                <div className='mt-10'>
                                    <button type="submit"
                                        className={`text-white text-center text-md font-bold mb-3 rounded-full block w-full p-2 ${style.btnBgColor}`}>Sign Up</button>
                                </div>

                                <Link to="/">
                                    <p className='text-center cursor-pointer mb-6'><span className='text-xs' style={{ color: "#B20303" }}>Already Registered?</span>
                                        <span className='text-xs font-bold ml-1' style={{ color: "#B20303" }}>Sign In</span>
                                    </p>
                                </Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
