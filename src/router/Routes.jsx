import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Error from "../pages/Error.jsx";
import { Navbar } from "../components/header/navbar/Navbar.jsx";


export const RoutesPage = () => {
    return (
        <BrowserRouter>
        <header>
            <Navbar />
        </header>
        <main>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </main>
        </BrowserRouter>
    )
}