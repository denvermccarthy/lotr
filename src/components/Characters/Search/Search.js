import React, { useState, useEffect } from 'react';

export default function Search({ setQuery }) {
  const [debounced, setDebounced] = useState('');
  useEffect(() => {
    const searchTimer = setTimeout(() => setQuery(debounced), 500);
    return () => {
      clearTimeout(searchTimer);
    };
  }, [debounced, setQuery]);

  return <input type="text" value={debounced} onChange={(e) => setDebounced(e.target.value)} />;
}
