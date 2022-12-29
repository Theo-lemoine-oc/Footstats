import React from "react";
import { NavLink } from "react-router-dom";

const TopPlayer = ({ player }) => {
    console.log(player)

    return (
        <NavLink to={`/player/${ player.id }`}>
            <span>{ player.name } (<span>{ player.firstname } { player.lastname }</span>)</span>
            <span>{ player.age }</span>
        </NavLink>
    )
}

export default TopPlayer;
