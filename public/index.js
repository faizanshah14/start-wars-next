'use strict'

// pages/index.js - Home page with character list and pagination

import Link from 'next/link';
import { useState, useEffect } from 'react';

const HomePage = () => {
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch(`https://swapi.dev/api/people/?page=${currentPage}`)
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
  }, [currentPage]);

  return (
    <div>
      {characters.map((character, index) => (
        <div key={index}>
          <Link href={`/characters/${extractId(character.url)}`}>
            <a>{character.name}</a>
          </Link>
        </div>
      ))}
      <button onClick={() => setCurrentPage(currentPage - 1)}>Previous</button>
      <button onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
    </div>
  );
};

const extractId = (url) => {
  const idPattern = /people\/(\d+)\//;
  const match = url.match(idPattern);
  return match ? match[1] : null;
};

export default HomePage;
