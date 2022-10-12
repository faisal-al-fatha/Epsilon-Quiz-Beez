import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
const correct = () => toast('Coorect Answer');
const wrong = () => toast('Wrong Answer');

const Quiz = ({ quiz, i }) => {
    const { options, id, question, correctAnswer } = quiz

    return (
        <div className='flex justify-center mb-5'>
            <div className='card w-9/12 bg-base-100 shadow-xl'>
                <div className='card-body'>


                    <h3 className="mb-5 text-lg font-medium text-gray-900">{i}. {question.slice(3, -4)}</h3>
                    <ul className="grid gap-6 w-full md:grid-cols-2">
                        {
                            options.map(option => <p>
                                <li>
                                    <input type="radio" id={option} name="hosting" value={option} className="hidden peer" required="" />
                                    <label for={option} className="inline-flex justify-between items-center p-5 w-full text-gray-900 bg-white rounded-lg border border-gray-700 cursor-pointer  peer-checked:bg-emerald-400 peer-checked:border-emerald-900 peer-checked:text-gray-900 hover:text-gray-600 hover:bg-gray-300 ">
                                        <div className="block">
                                            <div className="w-full text-lg font-semibold">{option}</div>

                                        </div>
                                    </label>
                                </li>
                            </p>)


                        }

                    </ul>

                </div>
            </div>


        </div>
    );
};

export default Quiz;
