
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Error from './components/Error/Error';
import Home from './components/Home/Home';
import Main from './layout/Main';


function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      errorElement: <Error></Error>,
      children: [
        { path: '/', element: <Home></Home> },
        { path: '/home', element: <Home></Home> },


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
