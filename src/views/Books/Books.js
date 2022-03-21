import React, { useState, useEffect } from 'react';
import { fetchBooks } from '../../services/books';

export default function Books() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await fetchBooks();
        console.log(data);
        setBooks(data);
      } catch (error) {
        alert(error.message);
      }
    };
    fetch();
  }, []);
  return (
    <div>
      {books.map((book) => (
        <div key={book.id}>
          <h3>{book.title}</h3>
        </div>
      ))}
    </div>
  );
}
