import React from 'react';
import { NavLink } from 'react-router-dom';

import Logo from '../../assets/img/logo-white-line.svg';
 
export const WhiteLogo = () => {
    return (
        <NavLink to="/">
            <img src={ Logo } alt="Logo de FootStats" />
        </NavLink>
    )
}