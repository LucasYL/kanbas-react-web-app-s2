import React from 'react';
import QuizControl from './QuizControl';
import './index.css';

const quizzes = [
    { title: 'Q1 - HTML', status: 'Not available until Sep 21', dueDate: 'Due Sep 21 at 1pm', points: 29, questions: 11, completed: true },
    { title: 'Q2 - CSS', status: 'Not available until Oct 5', dueDate: 'Due Oct 5 at 1pm', points: 32, questions: 7, completed: true },
    { title: 'EXAM 1 FA 23', status: 'Not available until Oct 26', dueDate: 'Due Oct 26 at 5:30pm', points: 113, questions: 20, completed: true },
    { title: 'Q3 - JS, ES6', status: 'Available Multiple Dates', dueDate: 'Due Multiple Dates', points: 38, questions: 13, completed: true },
    { title: 'Q4 - NODE', status: 'Not available until Nov 20', dueDate: 'Due Nov 20 at 3pm', points: 25, questions: 4, completed: true },
    { title: 'EXAM 2 FA23', status: 'Not available until Dec 15', dueDate: 'Due Dec 15 at 1pm', points: 104, questions: 18, completed: true },
];

const QuizzesContainer: React.FC = () => {
    return (
        <div className="quiz-container">
            <header className="quiz-header">
                <h2>Rocket Propulsion &gt; Quizzes</h2>
                <div className="quiz-controls">
                    <input type="text" placeholder="Search for Quiz" className="quiz-search" />
                    <button className="quiz-button group-button">+ Group</button>
                    <button className="quiz-button">+ Quiz</button>
                </div>
            </header>
            <div className="quiz-list">
                <h3 className="quiz-list-title">QUIZZES</h3>
                {quizzes.map((quiz, index) => (
                    <QuizControl key={index} {...quiz} />
                ))}
            </div>
        </div>
    );
};

export default QuizzesContainer;


