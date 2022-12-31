import React from 'react';
import { useTopScorersL1 } from '../hooks/top-scorers/useTopScorers.jsx';
import { TopPlayer } from '../components/top-scorers/TopPlayer.jsx';
import { MainTitle } from '../components/utils/MainTitle';


function Players() {
  const {topScorers, isLoading, hasError} = useTopScorersL1();

  if(isLoading) {
    return <div>Loading..</div>
  }

  if(hasError) {
    return <div>Aucune donnée n'a été trouvée</div>
  }

  if(topScorers) {
    return (
        <div>
            <MainTitle content="Joueurs" />
            {topScorers.map((topScorer) => (
                <TopPlayer key={topScorer.player.id} topScorer={topScorer.player} />
            ))}
        </div>
    )
  }
}

export default Players;