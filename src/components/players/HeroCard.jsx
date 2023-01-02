import React from 'react';
import { NavLink } from 'react-router-dom';
import heroCards from '../../datas/hero-cards.json';
import heroCardCss from './heroCard.css';


export const HeroCard = () => {
    return (
        <section className='flex h-[80vh]'>
            {heroCards.map((heroCard) => {
                return (
                    <NavLink to={ heroCard.url } className='w-1/3 relative overflow-hidden card' key={heroCard.id}>
                        <img src={ require(`../../assets/img/${heroCard.img}`) } alt={ heroCard.title } className='h-full object-cover duration-300 ease' />
                        <div className='overlay'></div>
                        <h1 className='absolute bottom-[25px] left-[25px] text-white font-bold text-3xl'>{ heroCard.title }</h1>
                    </NavLink>
                )
            })}
        </section>
    )
}