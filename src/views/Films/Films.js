import React, { useState, useEffect } from 'react';
import { fetchFilms } from '../../services/films';

export default function Films() {
  const [films, setFilms] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await fetchFilms();
        setFilms(data);
        console.log(data);
      } catch (error) {
        alert(error.message);
      }
    };
    fetch();
  }, []);

  return (
    <div>
      {films.map((film) => (
        <div key={film.id}>
          <h3>{film.title}</h3>
          <p>Academy Award Nominations: {film.academy_award_nominations}</p>
          <p>Box Office Total: {film.box_office_total}</p>
        </div>
      ))}
    </div>
  );
}
