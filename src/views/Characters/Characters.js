import React, { useState, useEffect } from 'react';
import SelectRace from '../../components/Characters/SelectRace/SelectRace';
import { fetchCharacters, fetchRaces } from '../../services/characters';

export default function Characters() {
  const [characters, setCharacters] = useState([]);
  const [race, setRace] = useState('All');
  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await fetchCharacters(race);
        setCharacters(data);
      } catch (error) {
        alert(error.message);
      }
    };
    fetch();
  }, [race]);

  return (
    <div>
      <SelectRace {...{ setRace }} />
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
