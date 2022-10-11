import React, { createContext, useState } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from './Footer';
import { Nav } from './Nav';

export const TopicContext = createContext([]);
export const QuizContext = createContext([]);

const Root = () => {
    const topics = useLoaderData().data;
    const [quizId, setQuizId] = useState([]);
    return (
        <TopicContext.Provider value={[topics]}>
            <QuizContext.Provider value={[quizId, setQuizId]}>
                <Nav></Nav>
                <Outlet></Outlet>
                <Footer></Footer>
            </QuizContext.Provider>
        </TopicContext.Provider>
    );
};

export default Root;