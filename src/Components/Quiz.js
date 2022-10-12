import { faEye } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Validation from './validation';

const Quiz = ({ quiz, i }) => {
    const { options, id, question, correctAnswer } = quiz
    return (
        <div className='flex justify-center mb-5'>
            <div className='card w-9/12 bg-teal-300 shadow-xl'>
                <div className='card-body relative'>



                    <h3 className="mb-5 text-lg font-medium text-gray-900">{i + 1}. {question.slice(3, -3)}  <button className='absolute top-5 right-5' onClick={() => toast(`${correctAnswer}`)}> <FontAwesomeIcon icon={faEye} /></button></h3>
                    <ul className="grid gap-6 w-full md:grid-cols-2">
                        {
                            options.map(option => <Validation option={option} correctAnswer={correctAnswer}></Validation>

                            )}


                    </ul>

                </div>
            </div>

            <Toaster />
        </div>
    );
};

export default Quiz;
