import React from 'react';
import { HeroCard } from '../components/players/HeroCard.jsx';
import TopScorersWorldCup from '../components/players/TopScorersWorldCup.jsx';


function Players() {
  return (
    <div>
      <HeroCard />

      <section>
        <div className='pt-8 max-w-[80%] mx-auto'>
          <TopScorersWorldCup />
        </div>
      </section>
    </div>
  )
}

export default Players;