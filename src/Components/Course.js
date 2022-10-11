import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import { QuizContext } from "./Root";

const Course = ({ topic }) => {
    const { id, name, logo, total } = topic;
    const [quizId, setQuizId] = useContext(QuizContext);
    return (
        <div>
            <div className="max-w-xs mx-auto lg:mx-6 my-4 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
                <img src={logo} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-600" />
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-semibold tracking-wide">{name}</h2>
                        <p className="dark:text-gray-100">Total quiz: {total}</p>
                    </div>
                    <Link type="button" to="/quiz" onClick={() => setQuizId(id)} className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-emerald-500 dark:text-gray-900">Start Practice</Link>
                </div>
            </div>
        </div>
    );
};

export default Course;