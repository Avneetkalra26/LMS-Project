import React from 'react';
import Quiz from 'react-quiz-component';
export default function QuizQuestions() {
    const quiz = [
        {
          question: "What is 2 + 2?",
          options: ["3", "4", "5", "6"],
          correctAnswer: "4"
        },
        {
          question: "What is the capital of France?",
          options: ["Berlin", "Madrid", "Paris", "Rome"],
          correctAnswer: "Paris"
        },
        // Add more questions as needed
      ];
      
    return (

        <div>
            <h1>Test Your Knowledge!</h1>
            <Quiz quiz={quiz} />
        </div>
    )
}
