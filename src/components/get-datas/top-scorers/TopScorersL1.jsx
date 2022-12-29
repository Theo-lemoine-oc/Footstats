import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TopPlayer from './TopPlayer';

export default function TopScorersL1() {

  const [topScorers, setTopScorers] = useState([]);

  const getData = () => {
    axios.get('https://api-football-v1.p.rapidapi.com/v3/players/topscorers', {
      params: {
        league: '61',
        season: '2022'
      },
      headers: {
        'X-RapidAPI-Key': '08c0554fa3msh52161d019b3ee8dp1ab3a3jsn08feb1e81ad2',
        'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
      }
    })
    .then((res) => setTopScorers(res.data.response))
    .catch((err) => console.log(err))
  };

  useEffect(() => {
    getData();
  }, []);


  return (
    <div className='flex flex-col'>
      {topScorers.map((topScorer) => (
        <TopPlayer key={topScorer.player.id} player={topScorer.player} />
      ))}
    </div>
  )
}