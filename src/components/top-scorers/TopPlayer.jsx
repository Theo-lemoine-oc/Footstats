import React from "react";
import { NavLink } from "react-router-dom";
import topPlayer from './topPlayer.css'

export const TopPlayer = ({ topScorer }) => {

    return (
        <NavLink to={`/player/${ topScorer.player.id }`} className="flex items-center border-b border-gray-300 px-4 hover:bg-gray-100">
            <div className="w-[10%]">
                <img src={ topScorer.player.photo} alt="" className="w-16 rounded-full" />
            </div>
            <span className="w-[35%]">{ topScorer.player.name } <span className="block italic text-sm">({ topScorer.player.firstname } { topScorer.player.lastname })</span></span>
            <span className="w-[10%]">{ topScorer.player.age }</span>
            <span className="w-[15%]">{ topScorer.player.nationality }</span>
            <span className="w-[10%]">{ topScorer.statistics[0].goals.total }</span>
            <span className="w-[10%]">{ topScorer.statistics[0].cards.yellow }</span>
            <span className="w-[10%]">{ topScorer.statistics[0].cards.red }</span>
            <div className="w-[10%]">
            <img src={ topScorer.statistics[0].team.logo } alt={ topScorer.statistics[0].team.name } className="w-10" />
            </div>
        </NavLink>
    )
}

export default TopPlayer;