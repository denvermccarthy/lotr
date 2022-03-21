import React, { useState, useEffect } from 'react';
import { fetchCharacters, fetchRaces } from '../../services/characters';

export default function Characters() {
  const [characters, setCharacters] = useState([]);
  const [races, setRaces] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await fetchCharacters('All');
        setCharacters(data);
        const races = await fetchRaces();
        console.log(races);
      } catch (error) {
        alert(error.message);
      }
    };
    fetch();
  }, []);
  return (
    <div>
      {characters.map((char) => (
        <div key={char.id}>
          <h3>{char.name}</h3>
          <p>Race: {char.race}</p>
          <p>
            {char.birth} / {char.death}
          </p>
        </div>
      ))}
    </div>
  );
}
