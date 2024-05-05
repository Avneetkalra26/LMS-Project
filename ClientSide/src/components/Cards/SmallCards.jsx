import React from 'react'
export default function SmallCards() {
  return (
    <div className="grid grid-cols-4 ml-10 mt-4">
                <div className="card shadow-md rounded-lg border-none">
                    <div className="card-body p-0">
                        <div className='flex'>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn1otOsetUJ7zHq1QBQo5oDjLIfZru8XubAQ&usqp=CAU"
                                alt="" className='h-24 w-28 rounded-l-lg' />
                            <h1 className='font-semibold flex justify-center items-center mx-7 text-gray-600'>IT Courses</h1>
                        </div>
                    </div>
                </div>
    </div>
  )
}
