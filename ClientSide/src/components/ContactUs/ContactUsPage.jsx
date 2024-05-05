import React from 'react';

const ContactUsPage = () => {
    return (
        <div className='flex mx-32'>
            <div className="container shadow-md border border-gray-100 rounded-xl mt-10">
                <div className="flex">
                    <div className="w-1/4 flex justify-center">
                        <div className="m-36 mb-32 text-center ml-44">
                            <div className="text-lg font-semibold">Address</div>
                            <div className="text-sm text-gray-400 mb-4">Amritsar</div>
                            <div className="text-lg font-semibold">Phone</div>
                            <div className="text-sm text-gray-400 mb-4">7087136312</div>
                            <div className="text-lg font-semibold">Email</div>
                            <div className="text-sm text-gray-400 mb-3">avneetagc@gmail.com</div>
                        </div>
                    </div>

                    <div className='h-40 mt-44 border-2 border-gray-300'></div>
                    <div className='m-10 mx-16'>
                        <div className="text-2xl font-bold text-customPurple">Send us a message</div>
                        <p className='text-gray-700 mt-1'>If you have any work from me or any types of queries related to my tutorial, you can send me a message from here. It's my pleasure to help you.</p>
                        <form className="mt-3" >
                            <div className="mb-4">
                                <input type="text" className="bg-gray-100 border border-gray-300 outline-none text-gray-900 text-md rounded-lg block w-full p-2.5"
                                    placeholder='Enter your name' />
                            </div>
                            <div className="mb-4">
                                <input type="text" className="bg-gray-100 border border-gray-300 outline-none text-gray-900 text-md rounded-lg block w-full p-2.5"
                                    placeholder='Enter your email' />
                            </div>
                            <div className="mb-5">
                                <textarea rows="4" className="bg-gray-100 border border-gray-300 outline-none text-gray-900 text-md rounded-lg block w-full p-2.5 resize-none" placeholder="Enter your message here..." required>
                                </textarea>
                            </div>
                            <div>
                                <button className='px-7 py-2 bg-purple-700 text-white rounded-lg'
                                    style={{ backgroundColor: "#611f69", border: "none" }} >
                                    Back
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUsPage;
