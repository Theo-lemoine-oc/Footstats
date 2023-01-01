import React from "react";
import { NavLink } from "react-router-dom";

export const TopPlayer = ({ topScorer }) => {

    return (
        <NavLink to={`/player/${ topScorer.id }`}>
            <span>{ topScorer.name } (<span>{ topScorer.firstname } { topScorer.lastname }</span>)</span>
            <span>{ topScorer.age }</span>
            <img src={ topScorer.photo} alt="" />
        </NavLink>
    )
}

export default TopPlayer;
