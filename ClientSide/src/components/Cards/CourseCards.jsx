import React, { useState } from 'react';
import axios from 'axios';
import RatingBar from '../RatingBar/RatingBar';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
export default function CourseCards({ data, courseName, activeLink = false }) {
    const reduxData = useSelector((state) => state.auth.user)
    const navigate = useNavigate();
    // console.log(reduxData);
    const [fill, setFill] = useState(data.favourite); // Initialize fill state with the favourite status of the card
    const courseID = data._id
    const userID = reduxData.user._id
    // console.log(userID)

    const handleToggleFavorite = async () => {
        try {
            const response = await axios.put(`http://localhost:3000/api/v1/updatefavcards/${courseID}`, {
                favourite: !fill // Toggle the favourite status
            });
            if (response.data.success) {
                setFill(!fill); // Update the fill state on success
            }
        } catch (error) {
            console.error(error);
        }
    };
    const handleEnrollClick = async () => {
        try {
            const response = await axios.post(
                "http://localhost:3000/api/v1/payment",
                {
                    userID: userID,
                    courseID: courseID,
                    amount: 100,
                    currency: "INR",
                    keyId: "rzp_test_YgUY0iSX1ggQSC",
                    keySecret: "iFtjontGbLgQH9glnQGEl2oU",
                }
            );

            // console.log(response.data);
            // Redirect to Razorpay payment page
            const { currency, amount } = response.data;
            const options = {
                key: "rzp_test_YgUY0iSX1ggQSC",
                amount: amount,
                currency: currency,
                name: data.title,
                description: data.description,
                handler: async function (response) {
                    // console.log(response);
                    try {
                        const response = await axios.post(
                            "http://localhost:3000/api/v1/paymentData",
                            { userID: userID, courseID: courseID }
                        );
                        // console.log(response.data);
                        if (response.data.success) {
                            Swal.fire({
                                icon: 'success',
                                title: 'Payment Successful',
                                showConfirmButton: true,
                            }).then((result) => {
                                if (result.isConfirmed) {
                                    navigate('/');
                                }
                            });
                        }
                    } catch (error) {
                        console.log("Error while saving payment data");
                        console.error(error);
                    }

                },
                prefill: {
                    name: "YOUR_NAME",
                    email: "YOUR_EMAIL",
                    contact: "YOUR_PHONE",
                },
                theme: {
                    color: "#3399cc",
                },
            };

            const rzp1 = new window.Razorpay(options);
            rzp1.open();
        } catch (error) {
            if (error.response && error.response.status === 400) {
                Swal.fire({
                    title: error.response.data.message,
                    showConfirmButton: true,
                }).then((result) => {
                    if (result.isConfirmed) {
                        navigate('/');
                    }
                });
            } else {
                console.log("Error while initiating payment");
                console.error(error);
            }
        }
    };

    return (
        <div>
            <div className="bg-white rounded-lg shadow-md relative text-justify">
                {activeLink ?
                    (<Link to={"/"}>
                        <img className="h-36 w-full object-cover rounded-t-lg" src={data.imageUrl} alt={data.title} />
                    </Link>) : (<Link to={"/contentpage?id=" + data._id}>
                        <img className="h-36 w-full object-cover rounded-t-lg" src={data.imageUrl} alt={data.title} />
                    </Link>)}

                <div className="rounded-full bg-white absolute top-2 right-3 p-1">
                    <svg
                        onClick={handleToggleFavorite}
                        xmlns="http://www.w3.org/2000/svg"
                        fill={fill ? "red" : "none"}
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="red"
                        className="w-6 h-6 cursor-pointer "
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                        />
                    </svg>
                </div>
                <div className="p-4">
                    <h2 className="text-xl font-semibold text-customBlue">{data.title}</h2>
                    <p className="text-sm text-gray-600 mt-2 mb-4">{data.description}</p>
                    <RatingBar initialRating={data.rating} cardId={data._id} />
                    {activeLink && <button onClick={handleEnrollClick} className="mt-2 bg-transparent hover:bg-customBlue text-customBlue font-semibold text-sm hover:text-white py-1 px-2 border border-customBlue hover:border-transparent rounded">
                        Enroll
                    </button>}
                </div>
            </div>
        </div>
    );
}
