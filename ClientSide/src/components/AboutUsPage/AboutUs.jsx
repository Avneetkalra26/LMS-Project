import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar.jsx"
const teamMembers = [
    {
        name: "Mohit Kumar",
        role: "Lead Developer",
        imageUrl: "https://i.imgur.com/WbQnbas.png",
        bio: "Mohit Kumar is the lead developer at Our Website, bringing innovative solutions to our digital platform.",
    },
    {
        name: "Avneet Kaur",
        role: "Lead Developer",
        imageUrl: "https://i.imgur.com/WbQnbas.png",
        bio: "Avneet Kaur is a skilled developer who contributes to the technical backbone of Our Website.",
    },
];

const features = [
    {
        title: "Course Management",
        description:
            "Effortlessly create, organize, and manage courses with intuitive tools. Schedule classes and manage course content efficiently.",
    },
    {
        title: "Content Management",
        description:
            "Upload diverse learning materials including text, multimedia, and documents. Seamlessly embed videos, presentations, and interactive elements.",
    },
    {
        title: "Assessment and Grading",
        description:
            "Conduct online quizzes, assignments, and assessments. Automate grading and provide constructive feedback using customizable rubrics.",
    },

    {
        title: "Analytics and Reporting",
        description:
            "Gain valuable insights into student performance and course engagement. Generate comprehensive reports for informed decision-making.",
    },
];

const AboutUs = () => {
    const navigate = useNavigate();
    const hanldeClick = () => {
        navigate("/contactus");
    };
    return (
        <>
            <Navbar />
            <div className="mt-7">
                <div className="max-w-screen-xl mx-auto py-8 px-4 sm:px-6 lg:px-8 bg-gray-100">
                    <div className="sm:flex items-center justify-between">
                        <div className="sm:w-1/2">
                            <div className="image object-center text-center">
                                <img
                                    src="https://i.imgur.com/WbQnbas.png"
                                    alt="About Us"
                                    className="rounded-lg shadow-lg"
                                />
                            </div>
                        </div>
                        <div className="sm:w-1/2 mt-8 sm:mt-0">
                            <h2 className="text-3xl font-bold text-gray-800 mb-4">
                                About <span className="text-cyan-800">Our Website</span>
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                Welcome to Our Website, a pioneering Learning Management System
                                dedicated to transforming the way students learn and grow. Founded
                                in 2024, our mission is to empower educators and learners by
                                providing a dynamic, intuitive, and comprehensive digital platform
                                tailored to meet the diverse needs of the educational community.
                                At Our Website, we blend cutting-edge technology with educational
                                best practices to foster engaging, effective, and accessible
                                learning experiences.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="max-w-screen-xl mx-auto py-8">
                    <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">
                        Meet Our Team
                    </h2>
                    <div className="flex flex-wrap justify-center">
                        {teamMembers.map((member, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-lg shadow-md overflow-hidden w-80 md:w-96 m-4"
                            >
                                <img
                                    src={member.imageUrl}
                                    alt={member.name}
                                    className="w-full h-64 object-cover object-center rounded-t-lg"
                                />
                                <div className="p-4">
                                    <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                                    <p className="text-gray-700">{member.role}</p>
                                    <p className="text-gray-600 text-sm mt-2">{member.bio}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-gray-100 py-12">
                    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">
                            Key Features
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {features.map((feature, index) => (
                                <div className="bg-white rounded-lg shadow-md p-6" key={index}>
                                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                                    <p className="text-gray-700">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="max-w-screen-xl mx-auto py-12 flex items-center justify-center">
                    <button
                        className="bg-cyan-800 text-white py-2 px-4 rounded-md hover:bg-cyan-700"
                        onClick={hanldeClick}
                    >
                        Contact Us
                    </button>
                </div>
            </div>
            
        </>
    );
};

export default AboutUs;