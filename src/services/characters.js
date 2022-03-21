import { checkError, client } from './client';

export async function fetchCharacters(race, query = '') {
  const urlParams = new URLSearchParams();
  if (race !== 'All') {
    urlParams.set('race', `eq.${race}`);
  }
  if (query.length > 0) {
    urlParams.set('name', `ilike.%${query}%`);
  }
  urlParams.set('select', '*');

  const resp = await fetch(
    `${process.env.REACT_APP_SUPABASE_URL}/rest/v1/characters?${urlParams.toString()}`,
    {
      headers: {
        apikey: process.env.REACT_APP_SUPABASE_KEY,
        Authorization: `Bearer ${process.env.REACT_APP_SUPABASE_KEY}`,
      },
    }
  );
  const data = await resp.json();
  return data;
}

export async function fetchRaces() {
  const resp = await client.from('characters').select('race');
  const data = checkError(resp);
  const array = data.map((item) => item.race);
  return [...new Set(array)];
}
