import React from 'react';
import { EyeIcon } from '@heroicons/react/24/solid';
import { toast } from 'react-toastify';


const Quiz = ({ optioncs }) => {
    const { question, correctAnswer, id, options} = optioncs;


    const curentAns = (correctAnswer) => {
        toast.info(correctAnswer, { autoClose: 1500, theme: 'dark' })
    }

    return (
        <div className='flex mb-8 mx-auto flex-col max-w-2xl p-6 space-y-6 overflow-hidden rounded-lg shadow-md bg-slate-800 text-black'>
            <div className='flex justify-between'>
                <blockquote className="max-w-lg text-lg dark:text-violet-400 italic font-medium text-center">Quiz : "{question}"</blockquote>
                <EyeIcon onClick={() => curentAns(correctAnswer)} className="h-6 w-6 text-violet-400 cursor-pointer" />
            </div>

            <div>
                <div className='flex items-center mb-3 pl-4 rounded border border-gray-200 dark:border-gray-700'>
                    <input type="radio" name="bordered-radio" value='1' id={id} className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-0 dark:bg-gray-700 dark:border-gray-600' />
                    <label htmlFor={id} className='py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300'>{options[0]}</label>
                </div>
                <div className='flex items-center mb-3 pl-4 rounded border border-gray-200 dark:border-gray-700'>
                    <input type="radio" name="bordered-radio"  value='2' id={id} className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-0 dark:bg-gray-700 dark:border-gray-600' />
                    <label htmlFor={id} className='py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300'>{options[1]}</label>
                </div>
                <div className='flex items-center mb-3 pl-4 rounded border border-gray-200 dark:border-gray-700'>
                    <input type="radio" name="bordered-radio"  value='3' id={id} className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-0 dark:bg-gray-700 dark:border-gray-600' />
                    <label htmlFor={id} className='py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300'>{options[2]}</label>
                </div>
                <div className='flex items-center pl-4 rounded border border-gray-200 dark:border-gray-700'>
                    <input type="radio" name="bordered-radio"  value='4' id={id} className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-0 dark:bg-gray-700 dark:border-gray-600' />
                    <label htmlFor={id} className='py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300'>{options[3] ?options[3] : 'unfined' }</label>
                </div>
            </div>

        </div>
    );
};

export default Quiz;