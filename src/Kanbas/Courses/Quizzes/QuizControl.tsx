import React from 'react';
import GreenCheckmarkNew from './GreenCheckmarkNew';

interface QuizControlProps {
    title: string;
    status: string;
    dueDate: string;
    points: number;
    questions: number;
    completed: boolean;
}

const QuizControl: React.FC<QuizControlProps> = ({ title, status, dueDate, points, questions, completed }) => {
    return (
        <div className="quiz-control">
            <div className="quiz-info">
                <h4>{title}</h4>
                <p className="quiz-status">{status} | {dueDate} | {points} pts | {questions} Questions</p>
            </div>
            {completed && <GreenCheckmarkNew />}
        </div>
    );
};

export default QuizControl;


