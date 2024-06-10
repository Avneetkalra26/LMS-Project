import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

export default function QuizPage({ courseTitle, courseID }) {
    const [startQuiz, setStartQuiz] = useState(false);
    const [quizData, setQuizData] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [userAnswers, setUserAnswers] = useState([]);
    const [score, setScore] = useState(0);
    const [submitResponse, setSubmitResponse] = useState(false);
    const [getScore, setGetScore] = useState(null);

    const userId = useSelector((state) => state.auth.user.user._id);

    const handleStartQuiz = () => {
        setStartQuiz(true);
    };

    const getQuizData = () => {
        axios.get(`http://localhost:3000/api/v1/getQuiz/${courseID}`)
            .then((response) => {
                setQuizData(response.data.data.quizQuestion);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const getQuizResponse = () => {
        axios.get(`http://localhost:3000/api/v1/getQuizResponse/${userId}/${courseID}`)
            .then((response) => {
                const { submit, score } = response.data.data;
                setSubmitResponse(submit);
                setGetScore(score);
                if (submit) {
                    setScore(score); // Set the score from the backend if the quiz was already submitted
                }
            }).catch((error) => {
                console.log(error);
            });
    };

    const updateSubmit = () => {
        axios.put(`http://localhost:3000/api/v1/updateQuizValidation/${userId}/${courseID}`, {
            submit: true,
            score: score
        }).then((response) => {
            console.log(response.data);
        }).catch((error) => {
            console.error(error);
        });
    };

    const submissionQuizData = {
        courseId: courseID,
        score: score,
    };

    const quizResponse = () => {
        axios.post(`http://localhost:3000/api/v1/quizResponse/${userId}`, submissionQuizData)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleAnswerOptionClick = (answer) => {
        const newAnswers = [...userAnswers];
        newAnswers[currentQuestion] = answer;
        setUserAnswers(newAnswers);

        if (answer === quizData[currentQuestion].answer) {
            setScore(score + 1);
        }
    };

    const handlePrevious = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
    };

    const handleSubmit = () => {
        quizResponse();
        updateSubmit();
        setSubmitResponse(true);
    };

    useEffect(() => {
        getQuizData();
        getQuizResponse();
    }, [courseID]);

    return (
        <div>
            {submitResponse ? (
                <div className="text-3xl font-bold my-8 gap-2  justify-center flex items-center" style={{ color: "#B80000" ,height:"22rem"}}>
                    You scored {getScore !== null ? getScore : score} out of {quizData.length}
                </div>
            ) : (
                startQuiz ? (
                    <div className="flex flex-col items-center">
                        <div className="text-xl font-bold my-8 flex gap-2 text-customBlue">Quiz:<div className="text-xl font-bold" style={{ color: "#B80000" }}> {courseTitle}</div></div>
                        <div className="quiz-container bg-white rounded-lg shadow-lg p-10 mb-7 mt-0 pt-0 w-10/12">
                            <div className="question-section">
                                <div className="question-count text-lg mb-4">
                                    <span className="font-bold">Question {currentQuestion + 1}</span> / {quizData.length}
                                </div>
                                <div className="question-text text-xl mb-6">{quizData[currentQuestion].ques}</div>
                                <div className="answer-section grid grid-cols-2 gap-2">
                                    {quizData[currentQuestion].options.map((option, index) => (
                                        <button
                                            key={index}
                                            onClick={() => handleAnswerOptionClick(option)}
                                            className={`block w-full py-2 px-4 mb-1 rounded-lg focus:outline-none ${userAnswers[currentQuestion] ? (option === quizData[currentQuestion].answer ? "bg-green-600 text-white" : userAnswers[currentQuestion] === option ? "bg-red-600 text-white" : "bg-gray-200 text-gray-800") : "bg-gray-200 text-gray-800 hover:bg-gray-300"}`}
                                            disabled={userAnswers[currentQuestion] !== undefined}
                                        >
                                            {option}
                                        </button>
                                    ))}
                                </div>
                                <div className="flex justify-between mt-6">
                                    <button
                                        className={`px-7 py-2 mt-3 text-white rounded-lg bg-customBlue ${currentQuestion === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                                        disabled={currentQuestion === 0}
                                        onClick={handlePrevious}
                                    >
                                        Previous
                                    </button>
                                    {currentQuestion < quizData.length - 1 ? (
                                        <button
                                            onClick={() => setCurrentQuestion(currentQuestion + 1)}
                                            className="px-7 py-2 mt-3 text-white rounded-lg bg-customBlue"
                                            disabled={userAnswers[currentQuestion] === undefined}
                                        >
                                            Next
                                        </button>
                                    ) : (
                                        <button
                                            onClick={handleSubmit}
                                            className="px-7 py-2 mt-3 text-white rounded-lg bg-customBlue"
                                            disabled={userAnswers[currentQuestion] === undefined}
                                        >
                                            Submit
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className='my-3'>
                        <h1 className='py-6 text-xl bg-gradient-to-r from-customBlue via-violet-700 to-cyan-800 inline-block text-transparent bg-clip-text'>
                            You are about to start a Quiz: {courseTitle}
                        </h1>
                        <div className='flex'>
                            <div>
                                <div>
                                    <p className='fs-6 text-gray-500'>Click start to continue quiz.</p>
                                    <p className='inline-flex text-gray-500'>Attempt Left: 1</p>
                                </div>
                                <div>
                                    <button
                                        onClick={handleStartQuiz}
                                        className="mt-4 bg-transparent hover:bg-customBlue text-customBlue text-md hover:text-white py-1 px-5 border border-customBlue hover:border-transparent rounded"
                                    >
                                        Start
                                    </button>
                                </div>
                            </div>
                            <div className='ml-6'>
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
            )}
        </div>
    );
}
