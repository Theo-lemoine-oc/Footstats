import React from 'react';
import { useTopScorersPremierLeague } from '../../hooks/top-scorers/useTopScorers.jsx';
import { TopPlayer } from '../../components/top-scorers/TopPlayer.jsx';
import { MainTitle } from '../../components/utils/MainTitle.jsx';
import { Paragraph } from '../../components/utils/Paragraph.jsx';
import { Error } from '../../components/utils/Error.jsx';
import { Loading } from '../../components/utils/Loading.jsx';


function TopScorersPremierLeague() {
  const { topScorers, isLoading, hasError } = useTopScorersPremierLeague();

  if(isLoading) {
    return (
        <div className='my-8 max-w-[80%] mx-auto'>
            <MainTitle content="Classement des 20 meilleurs buteurs de la Premier League anglaise 2022" />
            <Paragraph content="Ce classement est automatiquement mis à jour par rapport au classement officiel mais peut subir de légers délais d'actualisation." />
            <Loading />
        </div>
      )
  }

  if(hasError) {
    return (
      <div className='my-8 max-w-[80%] mx-auto'>
          <MainTitle content="Classement des 20 meilleurs buteurs de la Premier League anglaise 2022" />
          <Paragraph content="Ce classement est automatiquement mis à jour par rapport au classement officiel mais peut subir de légers délais d'actualisation." />
          <Error />
      </div>
    )
  }

  if(topScorers) {
    return (
        <div className='my-8 max-w-[80%] mx-auto'>
            <MainTitle content="Classement des 20 meilleurs buteurs de la Premier League anglaise 2022" />
            <Paragraph content="Ce classement est automatiquement mis à jour par rapport au classement officiel mais peut subir de légers délais d'actualisation." />
            <div className='mt-12'>
              <div className='flex px-4 classement border-b-2 border-black mb-4'>
                <span className='w-[45%]'>Joueur</span>
                <span className='w-[10%]'>Âge</span>
                <span className='w-[15%]'>Nationalité</span>
                <span className='w-[10%]'>Buts</span>
                <span className='w-[10%]'><div className='bg-yellow-300 h-full w-4 rounded-sm'></div></span>
                <span className='w-[10%]'><div className='bg-red-500 h-full w-4 rounded-sm'></div></span>
                <span className='w-[10%]'>Équipe</span>
              </div>
              {topScorers.map((topScorer) => (
                  <TopPlayer key={topScorer.player.id} topScorer={topScorer} />
              ))}
            </div>
        </div>
    )
  }
}

export default TopScorersPremierLeague;