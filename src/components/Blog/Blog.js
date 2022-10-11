import React from 'react';

const Blog = () => {
    return (
        <section className="dark:bg-gray-800 dark:text-gray-100 text-left">
            <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Frequently Asked Questions</h2>
                <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
                    <details open="">
                        <summary className="py-2 outline-none  cursor-pointer focus:underline">What is the purpose of react-router?</summary>
                        <div className="px-4 pb-4">
                            <p>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.</p>
                            <p className='mt-2'>React Router, and dynamic, client-side routing, allows us to build a single-page web application with navigation without the page refreshing as the user navigates. React Router uses a component structure to call components, which display the appropriate information.</p>
                        </div>
                    </details>
                    <details>
                        <summary className="py-2 outline-none cursor-pointer focus:underline">How Does Context API Work?</summary>
                        <div className="px-4 pb-4">
                            <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
                        </div>
                    </details>
                    <details>
                        <summary className="py-2 outline-none cursor-pointer focus:underline">What is Ref react hooks?</summary>
                        <div className="px-4 pb-4 space-y-2">
                            <p>The useRef returns a mutable ref object. This object has a property called .current. The value is persisted in the red container. current property. These values are accessed from the current property of the returned object. The .current property could be initialised to the passed argument initialValue e.g. useRef(initialValue). The object can persist a value for the full lifetime of the component. </p>
                        </div>
                    </details>
                </div>
            </div>
        </section>
    );
};

export default Blog;