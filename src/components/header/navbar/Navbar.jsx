import React from 'react';
import { NavLink } from 'react-router-dom';
import { SearchBar } from '../../utils/SearchBar.jsx';
import { WhiteLogo } from '../../utils/WhiteLogo.jsx';

export const Navbar = () => {
    return (
        <nav className='flex justify-between items-center px-8 py-4 bg-[#A51B1B] text-white'>
            <div className='flex items-center'>
                <div className='w-56 sm:w-72 mr-10'>
                    <WhiteLogo />
                </div>

                <div className='text-lg'>
                    <NavLink to="/" className="mr-8 hover:underline">Accueil</NavLink>
                    <NavLink to="/players" className="mr-8 hover:underline">Joueurs</NavLink>
                    <NavLink to="/" className="mr-8 hover:underline">Clubs</NavLink>
                    <NavLink to="/" className="mr-8 hover:underline">Ligues</NavLink>
                    <NavLink to="/" className="hover:underline">Championnats</NavLink>
                </div>
            </div>
            
            <div>
                <SearchBar />
            </div>
        </nav>
    )
}