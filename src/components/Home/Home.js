import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Category from '../Category/Category';

const Home = () => {
    const categorys = useLoaderData();
    return (
        <div>
            <section className="dark:bg-gray-800 dark:text-gray-100">
                <div className="container mx-auto flex flex-col items-center px-4 py-12 text-center md:py-16 md:px-10 lg:px-16 xl:max-w-3xl">
                    <h1 className="text-4xl font-bold leading-none sm:text-5xl">You can test your  
                        <span className="dark:text-violet-400"> React JavaScript CSS Git</span>skills with DEVELOPER-GRID' Quiz.
                    </h1>
                    <p className="px-8 mt-8 mb-12 text-lg">You will get 1 point for each correct answer. At the end of the Quiz, your total score will be displayed. The maximum score is 40 points.</p>
                    <div className="flex flex-wrap justify-center">
                       <Link to="/blog"> <button className="px-8 py-3 m-2 text-lg border rounded dark:text-gray-50 dark:border-gray-700">Learn more</button></Link>
                    </div>
                </div>
            </section>
           <section className='dark:bg-gray-700 border-t-2'>
           <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
                <div className='grid gap-8 row-gap-5 mb-8 md:grid-cols-2 lg:grid-cols-4 lg:row-gap-8'>
                   {
                    categorys.data.map(category => <Category key={category.id} category={category}></Category>)
                   }
                </div>
            </div>
           </section>
        </div>
    );
};

export default Home;