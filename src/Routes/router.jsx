import React from 'react';
import { createBrowserRouter } from "react-router";
import Home from '../Pages/Home/Home/Home';
import Layout from '../Layoyt/Layout';
import Register from '../Pages/Auth/Register/Register';
import Login from '../Pages/Auth/Login/Login';
const router = createBrowserRouter([
    {
        path: "/",
        Component: Layout,
        children: [
            {
                index: true,
                Component: Home
            },

        ]
    },
    {
        path: "Register",
        Component: Register
    },
    {
        path: "login",
        Component: Login
    }

]);

export default router;