import React, { useContext, useEffect } from 'react';
import Quiz from './Quiz';
import { QuizContext } from './Root';

const QuizPage = () => {
    const [quizId] = useContext(QuizContext)
    // const { name, questions } = quizData
    useEffect(() => {
        fetch(`https://openapi.programming-hero.com/api/quiz/${quizId}`)
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])

    return (
        <div>
            <h3 className='text-xl font-semibold'> Quiz of </h3>
            {
                <Quiz></Quiz>
            }
        </div>
    );
};

export default QuizPage;