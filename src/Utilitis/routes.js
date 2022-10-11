import { createBrowserRouter } from 'react-router-dom';
import Blogs from '../Components/Blogs';
import Course from '../Components/Course';
import ErrorPage from '../Components/ErrorPage';
import Home from '../Components/Home';
import Root from '../Components/Root';
import Statistics from '../Components/Statistics';
// import Topics from '../Components/Topics';

const router = createBrowserRouter([{
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
    children: [
        {
            index: true,
            element: <Home></Home>
        },
        {
            path: '/home',
            element: <Home></Home>
        },
        {
            path: '/topics',
            element: <Course></Course>
        },
        {
            path: '/statistics',
            element: <Statistics></Statistics>
        },
        {
            path: '/blogs',
            element: <Blogs></Blogs>
        },
    ]
}])

export default router;