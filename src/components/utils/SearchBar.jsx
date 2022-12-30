import React from 'react';

export const SearchBar = () => {
    return (
        <input type="text" name="search" placeholder='Rechercher un joueur, un club, une nation, une league, un championnat' 
         className='outline-none rounded-md px-4 py-2 text-black w-64 placeholder:text-sm text-ellipsis' />
    )
}