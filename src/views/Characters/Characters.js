import React, { useState, useEffect } from 'react';
import Search from '../../components/Characters/Search/Search';
import SelectRace from '../../components/Characters/SelectRace/SelectRace';
import { fetchCharacters } from '../../services/characters';

export default function Characters() {
  const [characters, setCharacters] = useState([]);
  const [query, setQuery] = useState('');
  const [race, setRace] = useState('All');
  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await fetchCharacters(race, query);
        setCharacters(data);
      } catch (error) {
        alert(error.message);
      }
    };
    fetch();
  }, [race, query]);

  return (
    <div>
      <SelectRace {...{ setRace }} />
      <Search {...{ setQuery }} />
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
