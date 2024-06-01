import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Home from './pages/Home'

export default function App() {
    const router = createBrowserRouter([
        {path: "/", element: <Home/>},
        {path: "/about", element: <div>About Page</div>},
        {path: "/contact", element: <div>Contact Page</div>}
    ])
    return (
        <RouterProvider router={router}></RouterProvider>
    );
}