import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../quiz/Quiz';
const Topics = () => {
    const Topicsquestions = useLoaderData();
    return (
        <div className="dark:bg-gray-900 dark:text-gray-50 pt-8">
            <h1 className="text-3xl mb-8  text-center mx-auto font-bold leading-none sm:text-3xl xl:max-w-3xl text-white">Quiz of {Topicsquestions.data.name}</h1>
            <div className='pb-5'>
                {
                    Topicsquestions.data.questions.map(optioncs => <Quiz key={optioncs.id} optioncs={optioncs}></Quiz>)
                }

            </div>

        </div>
    );
};

export default Topics;