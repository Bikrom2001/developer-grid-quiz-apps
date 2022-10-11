
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Error from './components/Error/Error';
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import Topics from './components/Topics/Topics';
import Main from './layout/Main';


function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      errorElement: <Error></Error>,
      children: [
        { path: '/', 
        loader: async () => fetch('https://openapi.programming-hero.com/api/quiz'),
        element:
         <Home></Home> },
        {
          path: '/home',
          loader: async () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>
        },
        {
          path: '/topics',
          element: <Topics></Topics>
        },
        {
          path: '/topics/:topicsId',
          loader:async ({params})=> {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.topicsId}`)
          } ,
          element: <Topics></Topics>,
        },
        {
          path: '/statistics',
          loader: async()=> fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Statistics></Statistics>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
      ]

    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router}>
      </RouterProvider>
    </div>
  );
}

export default App;
