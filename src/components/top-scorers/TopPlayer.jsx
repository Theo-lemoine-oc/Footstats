import React from "react";
import { NavLink } from "react-router-dom";

export const TopPlayer = ({ player }) => {
    console.log(player)

    return (
        <NavLink to={`/player/${ player.id }`}>
            <span>{ player.name } (<span>{ player.firstname } { player.lastname }</span>)</span>
            <span>{ player.age }</span>
            <img src={ player.photo} alt="" />
        </NavLink>
    )
}

export default TopPlayer;
