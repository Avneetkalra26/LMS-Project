import React from 'react'
import RatingBar from '../RatingBar/RatingBar'

export default function CourseCards({data}) {
    return (
                <div>
                    <div className={`card shadow-sm h-80 w-80 rounded-lg`} >
                        <img class="h-36 rounded-t-lg" src={data.imgId}  alt="" />
                        <div className="card-body p-4 mx-2">
                            <div className="text-lg fw-bolder card-title">
                                {data.title}
                            </div>
                            <div className="card-text mb-4">
                                <p className='text-sm'>{data.content}</p>
                            </div>
                            <RatingBar />
                        </div>
                    </div>
                </div>
            
    )
}
