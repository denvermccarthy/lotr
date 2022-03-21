import React, { useState, useEffect } from 'react';
import { fetchCharacters } from '../../services/characters';

export default function Characters() {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await fetchCharacters('All');
        setCharacters(data);
        console.log(data);
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
