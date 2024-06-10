import React, { useEffect, useRef, useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useSelector } from "react-redux";
import axios from "axios";

const Certificate = ({ courseID }) => {
  const certificateRef = useRef();
  const { user } = useSelector((state) => state.auth);
  const username = user.user.username;
  const userID = user.user._id;
  const [courseName, setCourseName] = useState("")

  const [count, setCount] = useState(0);

  const preloadImage = (src) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = src;
      img.onload = resolve;
      img.onerror = reject;
    });
  };

  const handleDownloadCertificate = () => {
    const input = certificateRef.current;

    const logoSrc =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqneHCKOqUKroqKPj0Hfthu1uWYu-v8BCRhA&s";

    Promise.all([preloadImage(logoSrc)])
      .then(() => {
        html2canvas(input)
          .then((canvas) => {
            const imgData = canvas.toDataURL("image/png");
            const pdf = new jsPDF("landscape");
            pdf.addImage(imgData, "PNG", 0, 0);
            pdf.save("certificate.pdf");
          })
          .catch((error) =>
            console.error("Error generating certificate:", error)
          );
      })
      .catch((error) => console.error("Error loading images:", error));
  };

  const fetchCompletedCourses = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/v1/certificate/${userID}/${courseID}`);
      setCount(response.data.count);
    } catch (error) {
      console.log("Error while getting completed courses");
      console.error(error);
    }
  };

  const getCourseName = () => {
    axios(`http://localhost:3000/api/v1/getcardbyid/${courseID}`)
      .then((response) => {
        // console.log(response.data.data)
        setCourseName(response.data.data.title)
      }).catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    fetchCompletedCourses();
    getCourseName()
  }, []);

  return (
    <>
      {count > 0 ? (
        <div className="flex flex-col items-center justify-center h-full p-4 bg-gray-100">
          <div
            ref={certificateRef}
            className="bg-white p-6 rounded-lg shadow-lg text-center w-full max-w-3xl border-4 border-cyan-900 relative"
          >
            <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-r from-cyan-900 to-cyan-800"></div>
            <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-r from-cyan-900 to-cyan-800"></div>

            <button
              onClick={handleDownloadCertificate}
              className="absolute top-4 right-4 p-2 bg-gray-500 text-white rounded-full shadow hover:bg-gray-400 transition duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
            </button>

            <div className="mb-4">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqneHCKOqUKroqKPj0Hfthu1uWYu-v8BCRhA&s"
                alt="Logo"
                className="mx-auto w-20 h-24"
              />
            </div>

            <h1 className="text-2xl font-serif font-bold text-gray-800 mb-2">
              🎉 Certificate of Completion 🎉
            </h1>
            <p className="text-lg text-gray-700 mb-4 italic">
              This certifies that
            </p>
            <h2 className="text-xl font-serif font-semibold text-gray-900 mb-4">
              {username}
            </h2>
            <p className="text-lg text-gray-700 mb-4 italic">
              has successfully completed the course
            </p>
            <h3 className="text-xl font-serif font-semibold text-gray-900 mb-4">
              {courseName && courseName.replace(/certification$/i, "").trim()}
            </h3>
            <p className="text-lg text-gray-600 mt-2">
              Congratulations on your achievement! ❤️
            </p>

            <div className="absolute bottom-4 right-4">
              <div className="text-sm text-gray-500">
                Date: {new Date().toLocaleDateString()}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center w-full h-full bg-white shadow-xl py-24" style={{height:"28rem"}}>
          <h1 className="text-3xl text-gray-700 flex items-center justify-center font-semibold" style={{ color: "#B80000"}}>
            Complete the course first !!
          </h1>
        </div>
      )}
    </>
  );
};

export default Certificate;
