import React from 'react'
export default function UserProfilePage() {
    return (
        <div className="bg-white relative shadow rounded-lg w-1/2 mx-auto mt-32">
            <div className="flex justify-center">
                <img src="https://cdn-icons-png.flaticon.com/128/3177/3177440.png" alt="" className="rounded-full mx-auto absolute -top-20 w-24 h-24 shadow-md border-4 border-white transition duration-200 transform hover:scale-110" />
            </div>
            <div className="mt-7">
                <h1 className="font-bold text-center text-lgtext-gray-900">Profile</h1>
                <p className="text-center text-sm text-gray-400 font-medium">Your Details and Information</p>
                <div className='mt-4'>
                    <dl>
                        <div class="bg-gray-50 py-3 grid grid-cols-2 gap-52 pl-16 text-sm">
                            <dt className="text-gray-500 fw-semibold">
                                Full name
                            </dt>
                            <dd>
                               Avneet Kaur
                            </dd>
                        </div>
                    </dl>
                    <dl>
                        <div class="py-3 grid grid-cols-2 gap-52 pl-16 text-sm">
                            <dt className="text-gray-500 fw-semibold">
                                Username
                            </dt>
                            <dd>
                                @avneetcse
                            </dd>
                        </div>
                    </dl>
                    <dl>
                        <div class="bg-gray-50 py-3 grid grid-cols-2 gap-52 pl-16 text-sm">
                            <dt className="text-gray-500 fw-semibold">
                                Email
                            </dt>
                            <dd >
                                avneetkalra26@gmail.com
                            </dd>
                        </div>
                    </dl>
                    <dl>
                        <div class="py-3 grid grid-cols-2 gap-52 pl-16 text-sm">
                            <dt className="text-gray-500 fw-semibold">
                                Course
                            </dt>
                            <dd>
                                MERN Stack
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
        </div>

    )
}
