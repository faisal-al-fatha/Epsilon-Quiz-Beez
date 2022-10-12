import React, { useContext } from 'react';
import { Bar, XAxis, YAxis, BarChart, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TopicContext } from './Root';

const Statistics = () => {
    const topics = useContext(TopicContext);
    const data = [];
    topics.map(topic => data.push[topic])
    console.log(topics[0]);


    return (
        <div>
            <BarChart className='my-12' width={930} height={450} data={topics[0]}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="total" fill="#E97C9F" />
            </BarChart>
            <div> <h3 className='font-semibold font-4xl pl-5'>Figure: Total quizes in each topics</h3></div>
        </div>
    );
};

export default Statistics;