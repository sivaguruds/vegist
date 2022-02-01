import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout
import HomeLayout from "../layout/homeLayout/HomeLayout";

// Pages
import Home from "../pages/home/Home";

const routes = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<HomeLayout/>}>
                    <Route  path="/" element={<Home/>}/>
                </Route>
            </Routes>
        </Router>
    );
};

export default routes;