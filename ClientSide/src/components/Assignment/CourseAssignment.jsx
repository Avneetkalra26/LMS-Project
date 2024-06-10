import { useEffect, useRef, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import axios from 'axios';
import { useSelector } from 'react-redux';

export default function CourseAssignment({ courseID }) {
    const editorRef = useRef(null);
    const [assignmentData, setAssignmentData] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState({}); // State to store answers for each question
    const [submitResponse, setSubmitResponse] = useState();
    const userId = useSelector((state) => state.auth.user.user._id);

    // Fetch assignment data when the component mounts or when the courseID changes
    const getAssignmentData = () => {
        axios.get(`http://localhost:3000/api/v1/getAssignment/${courseID}`)
            .then((response) => {
                setAssignmentData(response.data.data.questions || []);
            })
            .catch((error) => {
                console.log(error);
            });
    };


    //getValidation
    const getValidation = () => {
        axios.get(`http://localhost:3000/api/v1/getValidation/${userId}/${courseID}`)
            .then((response) => {
                console.log(response.data.data.submit)
                setSubmitResponse(response.data.data.submit)
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const updateSubmit = () => {
        axios.put(`http://localhost:3000/api/v1/updateValidation/${userId}/${courseID}`, {
            submit: true
        }).then((response) => {
            console.log(response.data);
            // Handle success if needed
        }).catch((error) => {
            console.error(error);
            // Handle error if needed
        });
    };

    // Handle the submission of the assignment answer
    const handleSubmit = () => {
        if (editorRef.current) {
            const answerContent = editorRef.current.getContent({ format: 'text' }); // Get the content from the editor
            const updatedAnswers = {
                ...answers,
                [currentQuestionIndex]: answerContent,
            };
            setAnswers(updatedAnswers);

            const submissionData = {
                courseId: courseID,
                ques_answers: Object.keys(updatedAnswers).map((index) => ({
                    assignmentQuestion: assignmentData[index],
                    assignmentAnswer: updatedAnswers[index],
                }))
            };

            axios.post(`http://localhost:3000/api/v1/assignmentSubmit/${userId}`, submissionData)
                .then((response) => {
                    console.log(response.data);
                    setSubmitResponse(true);
                    updateSubmit()
                    // Handle success (e.g., show a success message, navigate to another page, etc.)
                })
                .catch((error) => {
                    console.error(error);
                    // Handle error (e.g., show an error message)
                });

        }
    };

    // Save the current answer and navigate to the next question
    const handleNext = () => {
        if (editorRef.current) {
            const answerContent = editorRef.current.getContent({ format: 'text' }); // Get the content from the editor
            setAnswers((prevAnswers) => ({
                ...prevAnswers,
                [currentQuestionIndex]: answerContent,
            }));
        }
        if (currentQuestionIndex < assignmentData.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    };

    // Save the current answer and navigate to the previous question
    const handlePrevious = () => {
        if (editorRef.current) {
            const answerContent = editorRef.current.getContent({ format: 'text' }); // Get the content from the editor
            setAnswers((prevAnswers) => ({
                ...prevAnswers,
                [currentQuestionIndex]: answerContent,
            }));
        }
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    };

    // Fetch assignment data when the component mounts or when the courseID changes
    useEffect(() => {
        getAssignmentData();
        getValidation();
    }, [courseID]);

    // Update the editor content when the current question changes
    useEffect(() => {
        if (editorRef.current) {
            editorRef.current.setContent(answers[currentQuestionIndex] || ''); // Set the editor content based on the current question
        }
    }, [currentQuestionIndex, answers]);

    return (
        <div>
            {submitResponse ? (
                <div className='flex justify-center text-3xl items-center ' style={{height:"28rem"}}><h1 style={{ color: "#B80000" }}>Thanks for submitting the assignment</h1><h1 className='ml-3 text-2xl'>👍</h1></div>
            ) : (
                <div className="mx-20">
                    <div className="mt-5 h-auto w-full max-w-5xl">
                        {assignmentData.length > 0 && (
                            <div>
                                <h2 className='text-green-700 text-lg'>Question {currentQuestionIndex + 1}</h2>
                                <p className='my-2 text-lg'>{assignmentData[currentQuestionIndex]}</p>
                                <Editor
                                    className="w-full"
                                    apiKey='l74uba1h9wj5hnaa4yt58hog4atxzdoq7ipsdngzg021xy88'
                                    onInit={(_evt, editor) => editorRef.current = editor}
                                    init={{
                                        height: 200,
                                        menubar: false,
                                        plugins: [
                                            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                                            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                                            'insertdatetime', 'media', 'table', 'code', 'help'
                                        ],
                                        toolbar: 'undo redo | blocks | ' +
                                            'bold italic forecolor | alignleft aligncenter ' +
                                            'alignright alignjustify | bullist numlist outdent indent | ' +
                                            'removeformat | help',
                                        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
                                        branding: false
                                    }}
                                />
                            </div>
                        )}
                    </div>
                    <div className='flex justify-between w-full max-w-5xl pb-4'>
                        <button
                            onClick={handlePrevious}
                            className={`px-7 py-2 mt-3 text-white rounded-lg bg-customBlue ${currentQuestionIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                            disabled={currentQuestionIndex === 0}
                        >
                            Previous
                        </button>
                        {currentQuestionIndex < assignmentData.length - 1 ? (
                            <button
                                onClick={handleNext}
                                className={`px-7 py-2 mt-3 text-white rounded-lg bg-customBlue`}
                            >
                                Next
                            </button>
                        ) : (
                            <button
                                onClick={handleSubmit} // Call handleSubmit on button click
                                className='px-7 py-2 mt-3 text-white rounded-lg bg-customBlue'
                            >
                                Submit
                            </button>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
