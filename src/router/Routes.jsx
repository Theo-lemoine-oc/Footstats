import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "../components/header/navbar/Navbar.jsx";

import Home from "../pages/Home.jsx";
import Players from "../pages/Players.jsx";
import Error from "../pages/Error.jsx";
import TopScorers from "../pages/ranking/TopScorers.jsx";


export const RoutesPage = () => {
    return (
        <BrowserRouter>
        <header>
            <Navbar />
        </header>
        <main>
            <Routes>
                {/* General */}
                <Route path="/" element={<Home />} />
                <Route path="/players" element={<Players />} />
                
                {/* Ranking players */}
                <Route path="/ranking/topscorers" element={<TopScorers />} />

                {/* 404 page */}
                <Route path="*" element={<Error />} />
            </Routes>
        </main>
        </BrowserRouter>
    )
}