
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, } from 'recharts';

const Statistics = () => {
    const categorys = useLoaderData();
    const datas = categorys.data;

    return (
        <div className='dark:bg-gray-900 dark:text-gray-50'>
            <div className='w-full lg:w-2/3 px-4 py-16 mx-auto sm:max-w-xl md:max-w-full text-black lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
                <ResponsiveContainer width='100%' height={300}>
                    <LineChart width={600} height={300} data={datas}>
                        <Line type="monotone" dataKey="total" stroke="#e80774" />
                        <CartesianGrid stroke="#fafafa" />
                        <XAxis dataKey="name" stroke='#fafafa' />
                        <Tooltip />
                        <YAxis stroke='#fafafa' />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Statistics;