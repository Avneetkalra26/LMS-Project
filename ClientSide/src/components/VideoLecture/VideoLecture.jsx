import React from 'react';

export default function VideoLecture({ videoLink }) {
    // console.log(`videoLink = ${videoLink}`)
    return (
        <div className="flex justify-center bg-gray-100 " style={{height:"28rem"}}>
            <iframe
                src={videoLink}
                frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-2/3 mx-10 my-6 h-96 rounded-lg shadow-lg"
            ></iframe>
        </div>
    );
}

