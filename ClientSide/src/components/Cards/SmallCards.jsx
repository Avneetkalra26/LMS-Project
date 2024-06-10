import React from 'react'
import { Link } from 'react-router-dom'
export default function SmallCards() {
  return (
    <div className="grid grid-cols-4 ml-10 mt-4">
      <div className="card shadow-md rounded-lg border border-gray-200">
        <div className="card-body p-0">
          <Link to='/allcourses'>
            <div className='flex'>
              <img src="https://img.freepik.com/free-vector/software-development-programming-coding-learning_335657-3118.jpg"
                alt="" className='h-24 w-28 rounded-l-lg' />
              <h1 className='font-semibold flex justify-center items-center mx-7 text-gray-600'>IT Courses</h1>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
