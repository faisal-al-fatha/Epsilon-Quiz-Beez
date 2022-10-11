import React from 'react';
import Header from './Header';
import Topics from './Topics';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <div className='py-9 px-12'>
                <Topics></Topics>
            </div>
        </div>
    );
};

export default Home;