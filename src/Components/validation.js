import React from 'react';
import toast, { Toaster } from 'react-hot-toast';

const Validation = ({ option, correctAnswer }) => {
    const correct = () => toast('Correct Answer');
    const wrong = () => toast('Wrong Answer');
    const validateAnswer = (event) => {
        if (event === correctAnswer) {
            return correct
        } else {
            return wrong
        }
    }
    return (
        <div>
            <input type="radio" id={option} name="hosting" value={option} className="hidden peer" required="" />
            <label onClick={(event) => validateAnswer(option)} className='inline-flex justify-between items-center p-5 h-24 w-full text-gray-900 bg-white rounded-lg border border-gray-700 cursor-pointer  peer-checked:bg-rose-500 peer-checked:border-rose-900 peer-checked:text-gray-900 hover:text-gray-600 hover:bg-gray-300'><div className="block">
                <div className="w-full text-lg font-semibold">{option}</div>
            </div></label>
            <Toaster />
        </div>
    );
};

export default Validation;