import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({ category }) => {
    const { id, logo, total, name } = category;
    return (
        <div className='dark:bg-gray-900 dark:text-gray-50 p-6 rounded-md shadow-lg '>
            <img
                className='object-cover w-full h-56 mb-6 rounded shadow-lg md:h-60 xl:h-60'
                src={logo}
                alt=''
            />
            <h3 className="text-xl font-semibold dark:text-violet-400">{name}</h3>
            <p className="leading-snug dark:text-gray-400">Total Quiz: {total}</p>
            <Link to={`/topics/${id}`}>
                <button type="button" className="px-8 mt-4 block w-full py-3 font-semibold border hover:border-none rounded-md dark:border-gray-100 dark:text-gray-100 hover:bg-violet-400">Start Practice</button>
            </Link>
        </div>
    );
};

export default Category;