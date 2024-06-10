import React from "react";

const MyLearningBanner = ({ active, done }) => {
  return (
    <div className="mt-10 bg-gray-50 ">
      <div className=" ms-5">
        <div className="flex pt-5">
          <div className="text-3xl text-cyan-800 me-3">
            <h3>My Learning</h3>
          </div>
          <div className="flex bg-cyan-800 rounded-md px-3">
            <div className="py-2 text-white ">
              <h5>Total Courses</h5>
            </div>
            <div className="py-2 ms-2">
              <div className="bg-white px-2 font-semibold rounded-md">
                <p>{active}</p>
              </div>
            </div>
          </div>
        </div>

        {/* cards */}
        <div className="mt-5 flex gap-x-4 me-5">
          <div className="w-1/3 flex rounded-lg shadow-lg h-32 bg-white">
            <div className="py-4 px-4">
              <h3 className="text-lg text-gray-600 mb-2">Active Courses</h3>
              <p className="text-cyan-800 font-semibold text-2xl">{active - done}</p>
            </div>
          </div>
          <div className="w-1/3 flex rounded-lg shadow-lg h-32 bg-white">
            <div className="py-4 px-4">
              <h3 className="text-lg text-gray-600 mb-2">Overdue Courses</h3>
              <p className="text-cyan-800 font-semibold text-2xl">0</p>
            </div>
          </div>
          <div className="w-1/3 flex rounded-lg shadow-lg h-32 bg-white">
            <div className="py-4 px-4">
              <h3 className="text-lg text-gray-600 mb-2">Course Completed</h3>
              <p className="text-cyan-800 font-semibold text-2xl">{done}</p>
            </div>
          </div>
          <div className="w-1/3 flex rounded-lg shadow-lg h-32 bg-white">
            <div className="py-4 px-4">
              <h3 className="text-lg text-gray-600 mb-2">Rating/Feedback</h3>
              <p className="text-cyan-800 font-semibold text-2xl">{done}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyLearningBanner;
