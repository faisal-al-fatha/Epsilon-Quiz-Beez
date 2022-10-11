import React, { useContext, useEffect, useState } from 'react';
import Quiz from './Quiz';
import { QuizContext } from './Root';

const QuizPage = () => {
    const [quizId, setQuizId] = useContext(QuizContext)
    const [quizData, setQuizdata] = useState([]);

    useEffect(() => {
        fetch(`https://openapi.programming-hero.com/api/quiz/${quizId}`)
            .then(res => res.json())
            .then(data => setQuizdata(data.data))
    }, [])


    const { name, questions, total } = quizData;
    console.log(questions);
    return (
        <div>
            <h3 className='text-3xl font-semibold text-center my-6'> Quiz of {name}</h3>
            <p className='text-center'>Total Questions : {total}</p>
            {
                questions.map(question => <Quiz key={question.id} question={question}></Quiz>)
            }
        </div>
    );
};

export default QuizPage;