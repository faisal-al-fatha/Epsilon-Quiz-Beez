import React from 'react';
import Quiz from './Quiz';

const QuizPage = (props) => {
    const { name, questions } = props
    return (
        <div>
            <h3 className='text-xl font-semibold'> Quiz of {name}</h3>
            {
                (<Quiz></Quiz>)
            }
        </div>
    );
};

export default QuizPage;