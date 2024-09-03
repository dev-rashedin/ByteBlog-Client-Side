import { createBrowserRouter } from 'react-router-dom';
import Root from '../layouts/Root';
import Home from '../pages/Home/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import AddBlog from '../pages/AddBlog';
import ErrorPage from './../error/ErrorPage';





const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '/',
        element: <Home/>,
      },
      {
        path: '/addBlog',
        element: <AddBlog/>
      },
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/register',
        element: <Register/>
      }
    ],
  },
]);

export default router;
