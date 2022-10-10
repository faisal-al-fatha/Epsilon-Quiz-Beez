import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../Components/ErrorPage';
import Home from '../Components/Home';
import Root from '../Components/Root';

const router = createBrowserRouter([{
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
            index: true,
            element: <Home></Home>
        },
        {
            path: '/home',
            element: <Home></Home>
        },
    ]
}])

export default router;