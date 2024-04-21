import React, { useState } from 'react'
import css from '../../CssModules/CourseContent.module.css'
import QuizPage from '../Quiz/QuizPage'
import ContentPdfRender from '../PdfRender/ContentPdfRender';
import VideoLecture from '../VideoLecture/VideoLecture';
import CourseAssignment from '../Assignment/CourseAssignment';
export default function CourseContent() {
    const params = new URLSearchParams(window.location.search);
    const idTitle = params.get("id");
    const [screenSize, setScreenSize] = useState(true)
    const [toggleQuiz, setToggleQuiz] = useState(false)
    const [togglePDF, setTogglePDF] = useState(false)
    const [toggleVideoLect, setToggleVideoLect] = useState(false)
    const [toggleAssignment, setToggleAssignment] = useState(false)
    const handleQuiz = () => {
        setToggleQuiz(true)
        setTogglePDF(false)
        setToggleVideoLect(false)
    }
    const handlePDF = () => {
        setTogglePDF(true)
        setToggleQuiz(false)
        setToggleVideoLect(false)
    }
    const handleVideoLect = () => {
        setToggleVideoLect(true)
        setTogglePDF(false)
        setToggleQuiz(false)
    }
    const handleAssignment = () => {
        setToggleAssignment(true)
        setToggleVideoLect(false)
        setTogglePDF(false)
        setToggleQuiz(false)
    }

    return (
        <>
            <div className={css.text}>
                <div className="flex gap-3">
                    {screenSize && (< div className={` ms-4 mt-4 w-64`}>
                        <nav id={css.sidebar} className={`shadow-xl ${css.img}`} >
                            <div className='bg-zinc-400 text-white h-8 px-6 fs-6 py-6 m-0 flex items-center justify-center gap-2'>
                                <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                                </svg>
                                <h2>Course Content</h2>
                            </div>
                            <div className='bg-gray-300 m-2 cursor-pointer'>
                                <div onClick={handlePDF} className='p-2 text-black'>Introduction
                                </div>
                            </div>
                            <div className='bg-gray-300 m-2  cursor-pointer'>
                                <div onClick={handleVideoLect} className='p-2 text-black'>Video Lecture</div>
                            </div>
                            <div className='bg-gray-300 m-2  cursor-pointer'>
                                <div onClick={handleAssignment} className='p-2 text-black'>Assignment</div>
                            </div>
                            <div className='bg-gray-300 m-2  cursor-pointer'>
                                <div onClick={handleQuiz} className='p-2 text-black'>Quiz</div>
                            </div>
                        </nav>
                    </div>
                    )}
                    <div className={`container mt-4 ${screenSize ? 'w-5/6 me-8' : 'w-full'}`}>
                        <div className="card shadow-xl h-auto ">
                            <div className="card-title text-white h-8 px-6 fs-5 py-6 m-0 flex gap-3 items-center" style={{ backgroundColor: "#611f69" }}>
                                <svg className="cursor-pointer w-6 h-6" onClick={() => setScreenSize(!screenSize)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                                {idTitle}
                            </div>
                            {/* Merge condition for quiz and pdf rendering */}
                            {toggleQuiz ? <div className="card-text px-14 pb-7 "><QuizPage /> </div> : togglePDF ? <div className="p-0 m-0">
                                <ContentPdfRender /> </div> : toggleVideoLect ? <div><VideoLecture /></div> : toggleAssignment ? <div><CourseAssignment /></div>
                                    : <div className='flex justify-center items-center h-80 fs-4'>Welcome to {idTitle}</div>}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
