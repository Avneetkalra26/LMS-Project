import React, { useEffect, useState } from 'react'
import style from '../../CssModules/UserAccounts.module.css'
import img from '../../assets/form.jpg'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form";
import axios from 'axios';
export default function SignInPage() {
    // const [formData, setFormData] = useState({})
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm();

    const onDataSubmit = (data) => {
        if (isValid) {
            try {
                axios.post("http://localhost:3000/api/v1/signinUser", { data })
                    .then((response) => {
                        const success = response.data.success;
                        if (success) {
                            Swal.fire({
                                icon: 'success',
                                title: 'Login Successful',
                                showConfirmButton: true,
                            }).then((result) => {
                                if (result.isConfirmed) {
                                    navigate('/mainpage');
                                }
                            });
                        }
                    })
                    .catch((error) => {
                        const errorCode = error.response.data.errorCode;
                        let errorMessage = "";
                        if (errorCode === "email") {
                            errorMessage = "Email does not exist.";
                            setEmailError(errorMessage)
                        } else if (errorCode === "password") {
                            errorMessage = "Invalid password.";
                            setPasswordError(errorMessage)
                        } else {
                            errorMessage = "An error occurred while signing in.";
                            console.log(errorMessage)
                        }
                    })
            } catch (error) {
                console.log("Error in Submission", error);
            }
        }
    }
    // useEffect(() => {
    //     console.log(formData);
    // },[formData]);
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
            <div className={`p-6 my-6 w-3/5`}>
                <div className="flex rounded-lg  m-8 px-6 pt-2 pb-1 shadow-md">
                    <div className='grid grid-cols-2 container'>
                        <div className='flex items-center'> <img src={img} className='w-72 h-60' alt="" /></div>
                        <div className='me-6'>
                            <form className="mt-6 mx-auto" onSubmit={handleSubmit(onDataSubmit)}>
                                <div className={`card-title font-bold text-xl mt-2 mb-7 ml-2 ${style.pageTitle}`}>
                                    Sign In
                                </div>
                                <div className="mb-7">
                                    <label htmlFor="email" className="block mb-2 text-sm font-semibold text-gray-700 ml-3">Email</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                            <img src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png" className='w-5 h-5' alt="" />
                                        </div>
                                        <input
                                            type="text"
                                            id="email"
                                            className="bg-gray-100 border border-gray-200 text-gray-950 text-sm rounded-full w-full ps-10 p-2.5 outline-gray-300"
                                            placeholder="Enter Email"
                                            {...register("email", {
                                                required: "* Email is required",
                                                validate: handleEmailPassword,
                                            })} />

                                        <div className='mb-9'>
                                            <div className="absolute text-red-500 text-xs italic ml-3 mt-1">
                                                {emailError || (errors.email && errors.email.message)}
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="mb-12">
                                    <label htmlFor="userPassword" className="block mb-2 text-sm font-semibold text-gray-700 ml-3">Password</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                            <img src="https://cdn-icons-png.flaticon.com/128/4503/4503969.png" className="w-5 h-5" alt="" />
                                        </div>
                                        <input
                                            type={showPassword ? 'text' : 'password'}
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
                                        <div className='mb-9'>
                                            <div className="absolute text-red-500 text-xs italic ml-3 mt-1">
                                                {passwordError || (errors.password && errors.password.message)}
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div>
                                    <button type="submit" className={`text-white text-center text-md font-bold mb-5 rounded-full block w-full p-2 ${style.btnBgColor}`}>Sign In</button>
                                </div>
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


