import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

export default function UserProfilePage() {
    const [userData, setUserData] = useState({});
    const selector = useSelector((state) => state.auth.user);
    const [getEnrolledData, setGetEnrolledData] = useState([]);
    const id = selector.user._id;

    const getUserData = () => {
        axios.get(`http://localhost:3000/api/v1/getUserProfile/${id}`)
            .then((response) => {
                setUserData(response.data.userData);
            }).catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        getUserData();
        getEnrolledCourses();
    }, []);

    const getEnrolledCourses = () => {
        axios.get(`http://localhost:3000/api/v1/enrolledCourses/${id}`)
            .then((response) => {
                setGetEnrolledData(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className="bg-slate-50 flex justify-center items-center mt-3 pb-32">
            <div className="bg-white relative shadow-xl rounded-lg w-1/2 mx-auto mt-32">
                <div className="flex justify-center">
                    <img src="https://cdn-icons-png.flaticon.com/128/3177/3177440.png" alt="" className="rounded-full mx-auto absolute -top-20 w-24 h-24 shadow-md border-4 border-white transition duration-200 transform hover:scale-110" />
                </div>
                <div className="mt-7">
                    <h1 className="font-bold text-center text-lg text-gray-900">Profile</h1>
                    <p className="text-center text-sm text-gray-400 font-medium">Your Details and Information</p>
                    <div className='mt-4'>
                        <dl>
                            <div className="py-4 bg-gray-50 grid grid-cols-2 gap-52 pl-16 text-sm">
                                <dt className="text-gray-500 font-semibold">
                                    Username
                                </dt>
                                <dd>
                                    {userData.username}
                                </dd>
                            </div>
                        </dl>
                        <dl>
                            <div className=" py-4 grid grid-cols-2 gap-52 pl-16 text-sm">
                                <dt className="text-gray-500 font-semibold">
                                    Email
                                </dt>
                                <dd>
                                    {userData.email}
                                </dd>
                            </div>
                        </dl>
                        <dl>
                            <div className="py-4 bg-gray-50 grid grid-cols-2 gap-52 pl-16 text-sm" >
                                <dt className="text-gray-500 font-semibold mb-2">
                                    Courses
                                </dt>
                                <dd>
                                    {getEnrolledData.length != 0 ? (<ul className="list-disc ml-5">
                                        {getEnrolledData.map((value, index) => (
                                            <li key={index}>
                                                {value.title}
                                            </li>
                                        ))}
                                    </ul>) : <h1>No enrolled courses</h1>}
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    );
}
