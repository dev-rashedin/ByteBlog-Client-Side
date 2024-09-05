import { createBrowserRouter } from 'react-router-dom';
import Root from '../layouts/Root';
import Home from '../pages/Home/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import AddBlog from '../pages/AddBlog';
import ErrorPage from './../error/ErrorPage';
import AllBlogs from './../pages/AllBlogs';
import BlogDetails from '../pages/BlogDetails';
import UpdateBlog from '../pages/UpdateBlog';
import PrivateRoute from './PrivateRoute';





const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/allBlogs',
        element: <AllBlogs />,
      },
      {
        path: '/addBlog',
        element: <AddBlog />,
      },
      {
        path: '/posts/:id',
        element: (
          <PrivateRoute>
            <BlogDetails />
          </PrivateRoute>
        ),
        // loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/posts/${params.id}`),
      },
      {
        path: '/update/:id',
        element: <UpdateBlog />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
    ],
  },
]);

export default router;
