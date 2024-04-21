import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import pdfFile from "../../assets/SPM.pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";


pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function ContentPdfRender() {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
        setPageNumber(1);
    };

    const goToNextPage = () => {
        if (pageNumber < numPages) {
            setPageNumber(pageNumber + 1);
        }
    };

    const goToPrevPage = () => {
        if (pageNumber > 1) {
            setPageNumber(pageNumber - 1);
        }
    };
    return (
        <div className="pdf-container shadow-lg flex flex-col items-center bg-gray-200 ">
            <Document file={pdfFile} onLoadSuccess={onDocumentLoadSuccess}>
                <Page pageNumber={pageNumber} />
            </Document>

            <div className="mt-4 flex justify-center">
                <button
                    onClick={goToPrevPage}
                    disabled={pageNumber <= 1}
                    className="font-semibold py-2 px-4 rounded mr-2"
                >
                    <div className="flex">
                        <div className="mx-3">Previous</div>
                        <div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
                                />
                            </svg>
                        </div>
                    </div>
                </button>
                <span className="mt-2">
                    Page {pageNumber} of {numPages}
                </span>
                <button
                    onClick={goToNextPage}
                    disabled={pageNumber >= numPages}
                    className="font-semibold py-2 px-4 rounded ml-2"
                >
                    <div className="flex">
                        <div className="mx-3">Next</div>
                        <div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                            lao    className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                                />
                            </svg>
                        </div>
                    </div>
                </button>
            </div>
        </div>
    );

}

