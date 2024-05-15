import React from 'react'
import css from '../../CssModules/CourseContent.module.css'

export default function QuizPage({ courseTitle }) {
    return (
        <div>
            <h1 className='py-6 fs-4 bg-gradient-to-r from-purple-800 via-cyan-600 to-violet-700 inline-block text-transparent bg-clip-text'>You are about to start a Quiz: {courseTitle }</h1>
            <div className="row">
                <div className="col-lg-3">
                    <p className='fs-6 text-gray-500'>Click start to continue quiz .</p>
                    <p className='inline-flex text-gray-500'>Attempt Left: 1</p>
                    <button type="button" className={` mt-4 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ${css.clickbtn}`}>Start</button>
                </div>
                <div className="col-lg-3">
                    <video
                        src="https://cdnl.iconscout.com/lottie/premium/preview-watermark/female-web-developer-7362399-6031664.mp4"
                        loop
                        autoPlay
                        muted
                        className="w-28 h-24 m-0 cursor-default shadow-md rounded-lg pointer-events-none"
                        alt=""
                    />
                </div>
            </div>
        </div>
    )
}
