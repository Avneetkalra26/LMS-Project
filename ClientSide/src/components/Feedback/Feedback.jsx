// import axios from 'axios';
// import React, { useEffect, useState } from 'react'
// import { useSelector } from 'react-redux';

// const Feedback = ({ courseID }) => {

//     const { user } = useSelector((state) => state.auth);
//     const username = user.user.username;
//     const userID = user.user._id;

//     const [message, setMessage] = useState("")
//     const [feedbackDone, setFeedbackDone] = useState(false);

//     const handleSubmit = () => {
//         axios.post(`http://localhost:3000/api/v1/postFeedback/${userID}`, { courseID, username, message })
//             .then((response) => {
//                 // console.log(response)
//                 if (response.data.success) {
//                     setFeedbackDone(true)
//                 }
//             }).catch((error) => {
//                 console.log(error)
//             })
//     }

//     const initialFeedback = () => {
//         axios.get(`http://localhost:3000/api/v1/getFeedback/${userID}/${courseID}`,)
//             .then((response) => {
//                 // console.log(response)
//                 if (response.data.data.feedbackResponse) {
//                     setFeedbackDone(true)
//                 }
//             }).catch((error) => {
//                 console.log(error)
//             })
//     }

//     useEffect(() => {
//         if (courseID) {
//             initialFeedback()
//         }

//     }, [courseID])
//     return (
//         <div className="h-full flex items-center justify-center py-8">
//             {feedbackDone ? (
//                 <div className="flex  bg-white py-48 ">
//                     <h1 className="text-3xl text-gray-700">
//                         Thank You for giving feedback!!
//                     </h1>
//                 </div>
//             ) : (
//                 <div className="max-w-xl w-full border rounded-lg bg-white p-8 shadow-lg">
//                     <h2 className="title-font mb-1 text-lg font-medium text-gray-900">
//                         Feedback 🙂
//                     </h2>
//                     <p className="mb-5 leading-relaxed text-gray-600">
//                         If you had any issues or you liked our course, please share with us!
//                     </p>
//                     <form >
//                         <div className="mb-4">
//                             <label htmlFor="name" className="text-sm leading-7 text-gray-600">
//                                 Name
//                             </label>
//                             <input
//                                 type="text"
//                                 id="name"
//                                 name="name"
//                                 value={username}
//                                 readOnly
//                                 className="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
//                             />
//                         </div>
//                         <div className="mb-4">
//                             <label
//                                 htmlFor="message"
//                                 className="text-sm leading-7 text-gray-600"
//                             >
//                                 Message
//                             </label>
//                             <textarea
//                                 id="message"
//                                 name="message"
//                                 value={message}
//                                 onChange={(e) => setMessage(e.target.value)}
//                                 className="h-32 w-full resize-none rounded border border-gray-300 bg-white py-1 px-3 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
//                             ></textarea>
//                         </div>
//                         <button
//                             className="rounded border-0 bg-cyan-900 py-2 px-6 text-lg text-white hover:bg-cyan-900 focus:outline-none"
//                             type="button" onClick={handleSubmit}
//                         >
//                             Send
//                         </button>
//                     </form>
//                     <p className="mt-3 text-xs text-gray-500">
//                         Feel free to connect with us on social media platforms.
//                     </p>
//                 </div>
//             )}
//         </div>
//     )
// }

// export default Feedback




import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

const Feedback = ({ courseID }) => {

    const { user } = useSelector((state) => state.auth);
    const username = user.user.username;
    const userID = user.user._id;

    const [message, setMessage] = useState("")
    const [feedbackDone, setFeedbackDone] = useState(false);

    const handleSubmit = () => {
        axios.post(`http://localhost:3000/api/v1/postFeedback/${userID}`, { courseID, username, message })
            .then((response) => {
                const success = response.data.success;
                if (success) {
                    setFeedbackDone(true)
                    Swal.fire({
                        icon: 'success',
                        title: 'Feedback Sent Successfully',
                        showConfirmButton: true,
                    })
                }

            }).catch((error) => {
                console.log(error)
            })
    }

    const initialFeedback = () => {
        axios.get(`http://localhost:3000/api/v1/getFeedback/${userID}/${courseID}`,)
            .then((response) => {
                if (response.data.data.feedbackResponse) {
                    setFeedbackDone(true)
                }
            }).catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        if (courseID) {
            initialFeedback()
        }
    }, [courseID]);

    return (
        <div className="h-full flex items-center justify-center py-8">
            {feedbackDone ? (
                <div className='flex justify-center text-3xl items-center h-96'><h1 style={{ color: "#B80000" }}>Thanks for giving the feedback !!!</h1></div>
            ) : (
                <div className="max-w-xl w-full border rounded-lg bg-white p-6 shadow-lg">
                    <h2 className="title-font mb-1 text-lg font-medium text-gray-900">
                        Feedback 🙂
                    </h2>
                    <p className="mb-5 leading-relaxed text-gray-600">
                        If you had any issues or you liked our course, please share with us!
                    </p>
                    <form>
                        <div className="mb-4">
                            <label htmlFor="name" className="text-sm leading-7 text-gray-600">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={username}
                                readOnly
                                className="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="text-sm leading-7 text-gray-600">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className="h-24 w-full resize-none rounded border border-gray-300 bg-white py-1 px-3 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                            ></textarea>
                        </div>
                        <button
                            className="rounded border-0 bg-cyan-900 py-2 px-6 text-lg text-white hover:bg-cyan-700 focus:outline-none"
                            type="button" onClick={handleSubmit}
                        >
                            Send
                        </button>
                    </form>
                    <p className="mt-3 text-xs text-gray-500">
                        Feel free to connect with us on social media platforms.
                    </p>
                </div>
            )}
        </div>
    )
}

export default Feedback
