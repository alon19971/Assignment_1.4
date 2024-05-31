import React, { useEffect, useState } from 'react';
import './App.css';

const Games = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch('http://fs1.co.il/bus/xbox1.php');
        const data = await response.json();
        const filteredGames = data.filter(game => game.Year.toString() === '2005');
        setGames(filteredGames);
      } catch (error) {
        console.error('Error fetching games data:', error);
      }
    };

    fetchGames();
  }, []);

  return (
    <div>
      <h2>Games from 2005</h2>
      <ul>
        {games.map(game => (
          <li key={game.Game}>
            <p>Name: {game.Game}</p>
            <p>Publisher: {game.Publisher}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Games;
