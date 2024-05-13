import React, { useState } from 'react';
import css from '../../CssModules/DashboardCss.module.css';  

export default function DashboardBanner({ searchDataContainer }) {
    const [inputData, setInputData] = useState("");

    const handleClick = () => {
        searchDataContainer(inputData);
    };
    return (
        <div className="container-fluid mt-8">
            <div className="flex justify-between">
                <h1 className="text-3xl font-semibold mx-10">Dashboard</h1>
                <div className={`relative mt-3 me-5 ${css.hoverEffect}`}>
                    <div className="absolute bottom-7 mx-3">
                        <label htmlFor="searchCourse" className={`text-gray-600 ${css.label}`}>Search Course by Name</label>
                    </div>
                    <button>
                        <input
                            type="text"
                            id="searchCourse"
                            className="border-b border-cyan-900 w-56 text-gray-950 text-sm px-1 mx-3 outline-none"
                            value={inputData}
                            onChange={(e) => setInputData(e.target.value)}
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
                    </button>
                </div>
            </div>
            <h1 className="text-xl font-semibold text-gray-500 my-7 ml-10">Explore Our Courses</h1>
        </div>
    );
}

