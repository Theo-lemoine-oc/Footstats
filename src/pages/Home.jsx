import React from 'react';
import { MainTitle } from '../components/utils/MainTitle';
import { Paragraph } from '../components/utils/Paragraph';
import BannerImg from '../assets/img/footstats-hero.png';


function Home() {
  return (
    <section className='bg-gray-200'>
      <div className='flex py-8 md:py-0 max-w-[80%] mx-auto'>
        <div className='flex flex-col items-center justify-center w-1/2 px-8'>
          <MainTitle content="Gardez l'œil sur le football du moment" />
          <Paragraph content=
            "Retrouvez toutes les statistiques du football en direct, en allant des joueurs aux clubs en passant par les ligues et les grands championnats."
          />
        </div>

        <div className='w-1/2 flex justify-center items-center'>
          <img src={ BannerImg } alt="Cristiano Ronaldo, Kylian Mbappé, Lionel Messi" className='w-[500px]' />
        </div>
      </div>
    </section>
  );
}

export default Home;