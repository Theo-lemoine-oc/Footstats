import React from 'react';
import { MainTitle } from '../components/utils/MainTitle';
import { Paragraph } from '../components/utils/Paragraph';
import BannerImg from '../assets/img/footstats-hero.png';


function Home() {
  return (
    <section className='bg-gray-200'>
      <div className='flex flex-col tablet:flex-row pt-8 md:py-0 max-w-[80%] mx-auto'>
        <div className='flex flex-col justify-center text-center tablet:w-1/2 tablet:text-left'>
          <MainTitle content="Gardez l'œil sur le football du moment" />
          <Paragraph content=
            "Retrouvez toutes les statistiques du football en direct, en allant des joueurs aux clubs en passant par les ligues et les grands championnats."
          />
        </div>

        <div className='tablet:w-1/2 flex justify-center items-center'>
          <img src={ BannerImg } alt="Cristiano Ronaldo, Kylian Mbappé, Lionel Messi" className='w-[350px] tablet:w-[500px]' />
        </div>
      </div>
    </section>
  );
}

export default Home;