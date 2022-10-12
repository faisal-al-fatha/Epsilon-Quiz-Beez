import React, { createContext, useState } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from './Footer';
import { Nav } from './Nav';

export const TopicContext = createContext([]);


const Root = () => {
    const topics = useLoaderData().data;

    return (
        <TopicContext.Provider value={[topics]}>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </TopicContext.Provider>
    );
};

export default Root;