import React from 'react';

export default function SelectRace({ setRace }) {
  return (
    <select onChange={(e) => setRace(e.target.value)}>
      <option value="All">All</option>
      <option value="Dwarf">Dwarf</option>
      <option value="Elf">Elf</option>
      <option value="Hobbit">Hobbit</option>
      <option value="Human">Human</option>
      <option value="Maiar">Maiar</option>
      <option value="Orc">Orc</option>
    </select>
  );
}
