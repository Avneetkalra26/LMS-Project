import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

// Import PDF files from assets
import htmlPdf from "../../assets/html.pdf";
import reactPdf from "../../assets/react.pdf";
import cssPdf from "../../assets/css.pdf";
import jsPdf from "../../assets/js.pdf";
import mongodbPdf from "../../assets/mongodb.pdf";
import nodejsPdf from "../../assets/nodejs.pdf";
import githubPdf from "../../assets/github.pdf";
// Import other PDF files as needed

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function ContentPdfRender({ pdf }) {
    const [numPages, setNumPages] = useState(null);
    const [selectedPdf, setSelectedPdf] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Dynamically select PDF file based on the name passed as prop
        switch (pdf) {
            case "html":
                setSelectedPdf(htmlPdf);
                break;
            case "react":
                setSelectedPdf(reactPdf);
                break;
            case "css":
                setSelectedPdf(cssPdf);
                break;
            case "nodejs":
                setSelectedPdf(nodejsPdf);
                break;
            case "mongodb":
                setSelectedPdf(mongodbPdf);
                break;
            case "github":
                setSelectedPdf(githubPdf);
                break;
            case "js":
                setSelectedPdf(jsPdf);
                break;
            // Add cases for other PDF files if needed
            default:
                setError(`PDF '${pdf}' not found.`);
        }
    }, [pdf]);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };
    return (
        <div className="flex justify-center">
            <div className="pdf-container shadow-lg flex flex-col items-center w-full bg-gray-100 overflow-y-scroll"
                style={{ height: "84vh" }}>
                {error ? (
                    <div>Error: {error}</div>
                ) : (
                    selectedPdf && (
                        <Document file={selectedPdf} onLoadSuccess={onDocumentLoadSuccess}>
                            {Array.from(new Array(numPages), (el, index) => (
                                <Page key={`page_${index + 1}`} pageNumber={index + 1} />
                            ))}
                        </Document>
                    )
                )}
            </div>
        </div>
    );
}
