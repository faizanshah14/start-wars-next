'use strict'

// pages/characters/[id].js - Character detail page
'use client'
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const CharacterPage = () => {
  const router = useRouter();
  // const { id } = router.query;
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    // if (id) {
      fetch(`https://swapi.dev/api/people/${1}`)
        .then((response) => response.json())
        .then((data) => setCharacter(data));
    // }
  }, []);

  return (
    <div>
      {/* Display character details here */}
      {character && (
        <div>
          <h1>{character.name}</h1>
          {/* Other character details */}
        </div>
      )}
    </div>
  );
};

export default CharacterPage;
