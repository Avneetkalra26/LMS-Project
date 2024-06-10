import React, { useState } from 'react';

export default function DashboardBanner({ searchDataContainer }) {
    const [inputData, setInputData] = useState("");

    const handleClick = () => {
        searchDataContainer(inputData);
        setInputData("");
    };
    return (
        <div className="container-fluid mt-8">
            <div className="flex justify-between">
                <h1 className="text-3xl font-semibold mx-10" style={{ color: "#0C7185" }}>Dashboard</h1>
                {/* <div className={`relative mt-3 me-5 ${css.hoverEffect}`}>
                    <div className="absolute bottom-7 mx-3">
                        <label htmlFor="searchCourse" className={`text-gray-600 ${css.label}`}>Search Course by Name</label>
                    </div>
                    <button>
                        <input

                            className="border-b border-cyan-900 w-56 text-gray-950 text-sm px-1 mx-3 outline-none"

                            required
                        />
                        <div className="absolute right-7 bottom-3">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/54/54481.png"
                                onClick={handleClick}
                                className="w-4 h-4 cursor-pointer"
                                alt=""
                            />
                        </div>
                    </button
                    >
                </div> */}
                <div className="w-72 mr-7">
                    <div className="relative w-full min-w-[200px] h-10">
                        <div className="absolute grid w-4 h-4 place-items-center text-blue-gray-500 top-2/4 right-3 -translate-y-2/4">
                            <svg
                                onClick={handleClick} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#0C7185" className="size-4 cursor-pointer">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>

                        </div>
                        <input
                            type="text"
                            id="searchCourse"
                            value={inputData}
                            onChange={(e) => setInputData(e.target.value)}
                            style={{ color: "#0C7185" }}
                            className="text-sm peer w-full h-full bg-transparent font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent px-3 py-2.5 rounded-[7px] !pr-9 border-blue-gray-200 focus:border-customBlue"
                            placeholder=" "
                        />
                        <label
                            className="text-gray-500 flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-[#0C7185] after:border-blue-gray-200 peer-focus:after:!border-[#0C7185]">
                            Search Courses by Name
                        </label>

                    </div>
                </div>
            </div>

            <h1 className="text-xl font-semibold text-gray-500 my-7 ml-10">Explore Our Courses</h1>
        </div>
    );
}

