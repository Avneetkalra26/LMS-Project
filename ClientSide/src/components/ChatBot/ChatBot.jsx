import React, { useState } from "react";
import ChatBot from "react-chatbotify";

const MyChatBot = () => {
  const [form, setForm] = useState({
    name: "",
    courseInterest: "",
    helpDeskInquiry: "",
  });

  const handleUserInput = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const handleSubmit = () => {
    console.log("Form Data:", form);

    setForm({
      name: "",
      courseInterest: "",
      helpDeskInquiry: "",
    });
  };

  const handleContactSupport = (contactOption) => {
    if (contactOption === "Phone") {
      window.location.href = "tel:+917091302506";
    } else if (contactOption === "Email") {
      window.location.href = "mailto:mohitbite@gmail.com";
    }
  };

  const flow = {
    start: {
      message: "Welcome to our Learning Management System! What's your name?",
      function: (params) => handleUserInput("name", params.userInput),
      path: "course_interest",
    },
    course_interest: {
      message:
        "Which course are you interested in? (e.g., HTML, CSS, JavaScript, React)",
      function: (params) => handleUserInput("courseInterest", params.userInput),
      path: "favorites",
    },
    favorites: {
      message: "The cost of the course is Rs.100",
      function: (params) => handleUserInput("courseInterest", params.userInput),
      path: "help_desk",
    },
    help_desk: {
      message: "Do you have any questions or need assistance with anything?",
      options: ["Yes", "No"],
      function: (params) => {
        if (params.userInput === "Yes") {
          return "Please type your question or inquiry:";
        }
        return "Alright! If you have any questions later, feel free to ask.";
      },
      textInput: true,
      path: "contact_support_or_end",
    },
    contact_support_or_end: {
      message:
        "If you need further assistance, you can contact our support team via phone or email. How would you like to contact us?",
      options: ["Phone", "Email"],
      function: (params) => handleContactSupport(params.userInput),
      path: "end",
    },
    end: {
      message: "Thank you for contacting us! We'll get back to you shortly.",
      options: ["Submit Another Inquiry"],
      function: () => handleSubmit(),
      path: "start",
    },
  };

  return (
    <div>
      <ChatBot flow={flow} />
    </div>
  );
};

export default MyChatBot;
