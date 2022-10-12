import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from './Quiz';


const QuizPage = () => {
    const quizData = useLoaderData().data;
    const { name, questions, total } = quizData;
    let i = 0;

    return (
        <div>
            <h3 className='text-3xl font-semibold text-center my-6'> Quiz of {name}</h3>
            <p className='text-center'>Total Questions : {total}</p>
            {
                questions.map(quiz => <Quiz key={quiz.id} quiz={quiz} i={i++}></Quiz>)
            }
        </div>
    );
};

export default QuizPage;