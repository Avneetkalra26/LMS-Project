import React, { useState } from 'react'
import css from '../../CssModules/DashboardCss.module.css'  
export default function DashboardBanner({searchDataContainer}) {
    const [inputData, setInputData] = useState("")
    const handleClick = () =>{
       searchDataContainer(inputData)
    }
  return (
    <div className='container-fluid mt-8'>
            <div className='flex justify-between'>
                <h1 className='fs-4 fw-semibold ml-7 '>Dashboard</h1>
                <div className={`relative mt-3 ${css.hoverEffect}`}>
                    <div className="absolute bottom-7 mx-4">
                        <label for="searchCourse" className={`text-gray-600 ${css.label}`}>Search Course by Name</label>
                    </div>
                    <button>
                        <input
                            type="text"
                            id="searchCourse"
                            className="border-b border-cyan-900 w-56 text-gray-950 text-sm ps-1 mx-4 outline-none"
                            value={inputData}
                            required onChange={(e)=>setInputData(e.target.value)}/>
                        <div className="absolute end-11 bottom-3">
                            <img src="https://cdn-icons-png.flaticon.com/512/54/54481.png" onClick={handleClick} className='w-4 h-4' alt="" />
                        </div>
                    </button>
                </div>
            </div>
            <h1 className='fs-5 fw-semibold text-gray-500 mt-4 ml-7'>Explore Our Courses</h1>
    </div>
  )
}
