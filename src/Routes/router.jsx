import React from 'react';
import { createBrowserRouter } from "react-router";
import Home from '../Pages/Home/Home/Home';
import Layout from '../Layoyt/Layout';
const router = createBrowserRouter([
    {
        path: "/",
        Component : Layout,
        children: [
            {
                index: true,
                Component: Home
            },

        ]
    },

]);

export default router;