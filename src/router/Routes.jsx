import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "../components/header/navbar/Navbar.jsx";

import Home from "../pages/Home.jsx";
import Players from "../pages/Players.jsx";
import Error from "../pages/Error.jsx";
import TopScorersL1 from "../pages/ranking/TopScorersL1.jsx";
import TopScorersChampionsLeague from "../pages/ranking/TopScorersChampionsLeague.jsx";
import TopScorersPremierLeague from "../pages/ranking/TopScorersPremierLeague.jsx";


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
                <Route path="/ranking/ligue-1-uber-eats" element={<TopScorersL1 />} />
                <Route path="/ranking/champions-league" element={<TopScorersChampionsLeague />} />
                <Route path="/ranking/premier-league" element={<TopScorersPremierLeague />} />

                {/* 404 page */}
                <Route path="*" element={<Error />} />
            </Routes>
        </main>
        </BrowserRouter>
    )
}