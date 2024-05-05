import React from 'react';
import RatingBar from '../RatingBar/RatingBar';

export default function CourseCards({ data }) {
    return (
        <div>
            <div className="bg-white rounded-lg shadow-md ">
                <img className="h-36 w-full object-cover rounded-t-lg" src={data.imageUrl} alt={data.title} />
                <div className="p-4">
                    <h2 className="text-xl font-semibold text-gray-800">{data.title}</h2>
                    <p className="text-sm text-gray-600 mt-2 mb-4">{data.description}</p>
                    <RatingBar />
                </div>
            </div>
        </div>
    );
}
