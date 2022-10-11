import React, { useContext } from 'react';
import Course from './Course';
import { TopicContext } from './Root';

const Topics = () => {
    const topics = useContext(TopicContext)
    return (
        <div className='lg:flex justify-center my-2 md:my-6'>
            {
                topics[0].map(topic => <Course key={topic.id} topic={topic}></Course>)
            }
        </div>
    );
};

export default Topics;