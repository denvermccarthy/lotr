import React, { useState, useEffect } from 'react';

export default function Books() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    return () => {
      const fetch = async () => {
        try {
          console.log('hi!');
        } catch (error) {
          alert(error.message);
        }
      };
      fetch();
    };
  }, []);
  return <div>Books</div>;
}
