import './App.css';
import React from 'react';
import {
    createBrowserRouter,
    Outlet,
    RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import Logement from './pages/Logement';
import About from './pages/About';
import Error from './pages/Error';
import Header from './components/Header'
import Footer from './components/Footer'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/logement/:logementId",
                element: <Logement />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "*",
                element: <Error />,
            },
        ]
    }
]);

function Root() {
    return <>
    <Header />
    <Outlet />
    <Footer />
    </>
}

function App() {
    return <RouterProvider router={router}/>
}

export default App;