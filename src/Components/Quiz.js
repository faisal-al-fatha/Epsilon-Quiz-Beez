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



                    <h3 className="mb-5 text-lg font-medium text-gray-900">{i + 1}. {question}  <button className='absolute top-5 right-5' onClick={toast(`{ correctAnswer }`)}> <FontAwesomeIcon icon={faEye} /></button></h3>
                    <ul className="grid gap-6 w-full md:grid-cols-2">
                        {
                            options.map(option => <Validation option={option} correctAnswer={correctAnswer}></Validation>
                                // <p>
                                //     <li>
                                //         <input type="radio" id={option} name="hosting" value={option} className="hidden peer" required="" />
                                //         <label for={option} onClick={(event) => validateAnswer(option)} className="inline-flex justify-between items-center p-5 h-24 w-full text-gray-900 bg-white rounded-lg border border-gray-700 cursor-pointer  peer-checked:bg-rose-500 peer-checked:border-rose-900 peer-checked:text-gray-900 hover:text-gray-600 hover:bg-gray-300 ">
                                //             <div className="block">
                                //                 <div className="w-full text-lg font-semibold">{option}</div>
                                //             </div>
                                //         </label>
                                //     </li>
                                // </p>)
                            )}


                    </ul>

                </div>
            </div>

            <Toaster />
        </div>
    );
};

export default Quiz;
