export async function fetchBooks() {
  const params = new URLSearchParams();
  let url = `${process.env.REACT_APP_SUPABASE_URL}/rest/v1/books?${params.toString()}`;
  const resp = await fetch(url, {
    headers: {
      apikey: process.env.REACT_APP_SUPABASE_KEY,
      Authorization: `Bearer ${process.env.REACT_APP_SUPABASE_KEY}`,
    },
  });
  const data = await resp.json();
  return data;
}
