import React, { useEffect, useState } from 'react';
import css from '../../CssModules/CourseContent.module.css';
import QuizPage from '../Quiz/QuizPage';
import ContentPdfRender from '../PdfRender/ContentPdfRender';
import VideoLecture from '../VideoLecture/VideoLecture';
import CourseAssignment from '../Assignment/CourseAssignment';
import axios from 'axios';
import Feedback from '../Feedback/Feedback';
import Certificate from '../Certification/Certificate';

export default function CourseContent({ data, courseID }) {
    const [screenSize, setScreenSize] = useState(true);
    const [toggleQuiz, setToggleQuiz] = useState(false);
    const [togglePDF, setTogglePDF] = useState(false);
    const [toggleVideoLect, setToggleVideoLect] = useState(false);
    const [toggleAssignment, setToggleAssignment] = useState(false);
    const [toggleFeedback, settoggleFeedback] = useState(false)
    const [toggleCertificate, settoggleCertificate] = useState(false)
    const [resourcesData, setResourcesData] = useState({})
    const fetchResourcesData = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/api/v1/getResourcesData/${courseID}`);
            if (response.data.success) {
                setResourcesData(response.data.data)
                // console.log(resourcesData.videoLink)
            } else {
                console.error('Failed to fetch course data');
            }
        } catch (error) {
            console.error('Error fetching course data:', error);
        }
    };
    useEffect(() => {
        fetchResourcesData();
    }, []);
    const handleQuiz = () => {
        setToggleQuiz(true);
        setTogglePDF(false);
        setToggleVideoLect(false);
        setToggleAssignment(false);
        settoggleFeedback(false)
        settoggleCertificate(false)
    };

    const handlePDF = () => {
        setTogglePDF(true);
        setToggleQuiz(false);
        setToggleVideoLect(false);
        setToggleAssignment(false);
        settoggleFeedback(false)
        settoggleCertificate(false)
    };

    const handleVideoLect = () => {
        setToggleVideoLect(true);
        setTogglePDF(false);
        setToggleQuiz(false);
        setToggleAssignment(false);
        settoggleFeedback(false)
        settoggleCertificate(false)
    };

    const handleAssignment = () => {
        setToggleAssignment(true);
        setToggleVideoLect(false);
        setTogglePDF(false);
        setToggleQuiz(false);
        settoggleFeedback(false)
        settoggleCertificate(false)
    };

    const handleFeedback = () => {
        setToggleAssignment(false);
        setToggleVideoLect(false);
        setTogglePDF(false);
        setToggleQuiz(false);
        settoggleFeedback(true)
        settoggleCertificate(false)

    }

    const handleCertificate = () => {
        setToggleAssignment(false);
        setToggleVideoLect(false);
        setTogglePDF(false);
        setToggleQuiz(false);
        settoggleFeedback(false)
        settoggleCertificate(true)

    }

    return (
        <>
            <div>
                <div className="flex gap-6">
                    {screenSize && (< div className={` ms-5 mt-5 w-64`}>
                        <nav className={`shadow-xl ${css.img} h-full pb-44`} >
                            <div className='bg-slate-400 text-white h-8 px-6 fs-6 py-6 m-0 flex items-center justify-center gap-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                                </svg>
                                <h2>Course Content</h2>
                            </div>
                            <div className='px-1'>
                                <div className='bg-gray-200 m-2 cursor-pointer text-sm flex items-center '>
                                    <div className='my-2 ml-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="black" className="size-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                                        </svg>
                                    </div>
                                    <div onClick={handlePDF} className='p-2 text-black'>Introduction
                                    </div>
                                </div>
                                <div className='bg-gray-200 m-2  cursor-pointer text-sm flex items-center '>
                                    <div className='my-2 ml-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="black" className="size-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
                                        </svg>

                                    </div>
                                    <div onClick={handleVideoLect} className='p-2 text-black'>Video Lecture</div>
                                </div>
                                <div className='bg-gray-200 m-2  cursor-pointer text-sm flex items-center ' >
                                    <div className='my-2 ml-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="black" className="size-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                        </svg>

                                    </div>
                                    <div onClick={handleAssignment} className='p-2 text-black'>Assignment</div>
                                </div>
                                <div className='bg-gray-200 m-2  cursor-pointer text-sm  flex items-center'>
                                    <div className='my-2 ml-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="black" className="size-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
                                        </svg>

                                    </div>
                                    <div onClick={handleQuiz} className='p-2 text-black'>Quiz</div>
                                </div>
                                <div className='bg-gray-200 m-2  cursor-pointer text-sm  flex items-center'>
                                    <div className='my-2 ml-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="black" className="size-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                                        </svg>


                                    </div>
                                    <div onClick={handleFeedback} className='p-2 text-black'>Feedback</div>
                                </div>
                                <div className='bg-gray-200 m-2  cursor-pointer text-sm  flex items-center'>
                                    <div className='my-2 ml-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="black" className="size-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m.75 12 3 3m0 0 3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                                        </svg>


                                    </div>
                                    <div onClick={handleCertificate} className='p-2 text-black'>Certification</div>
                                </div>
                            </div>
                        </nav>
                    </div>
                    )}
                    <div className={`container mt-5 ${screenSize ? 'w-5/6 me-8' : 'w-full mx-auto'}`}>
                        <div className="card shadow-xl h-auto ">
                            <div className="text-white h-8 px-6 text-xl py-6 m-0 flex gap-3 items-center" style={{ backgroundColor: "#0C7185" }}>
                                <svg className="cursor-pointer w-6 h-6" onClick={() => setScreenSize(!screenSize)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                                {data.title}
                            </div>
                            {/* Merge condition for quiz and pdf rendering */}
                            {toggleQuiz ? <div className="card-text px-14 pb-7 "><QuizPage courseTitle={data.title} courseID={courseID} /> </div> : togglePDF ? <div className="p-0 m-0">
                                <ContentPdfRender pdf={resourcesData.pdfLink} /> </div> : toggleVideoLect ? <div><VideoLecture videoLink={resourcesData.videoLink} /></div> : toggleAssignment ? <div><CourseAssignment courseID={courseID} /></div> : toggleFeedback ? <div><Feedback courseID={courseID} /></div> : toggleCertificate ? <div><Certificate courseID={courseID} /></div>
                                    :
                                    <div className="h-64 items-center grid grid-cols-2">
                                        <div className='text-2xl ml-32'>
                                            <div className='flex gap-2'>
                                                <h1 style={{ color: "#B80000" }}>What is</h1>
                                                {data.title && (
                                                    <div className='text-customBlue'>{data.title.split(" ")[0]} ?</div>
                                                )}                                            </div>
                                            <p className='text-sm col-l text-gray-500 '>{data.description}</p>
                                        </div>
                                        <div className='ml-32'>
                                            <img src={data.imageUrl} alt="" className='w-52 h-40
                                            rounded-2xl shadow-lg' />
                                        </div>
                                    </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
