"use strict";

// pages/characters/[id].js - Character detail page
"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

const CharacterPage = () => {
  const params = useParams();
  const id = params.characterId;
  const [characterData, setCharacterData] = useState(null);
  const formatDate = (dateString) =>
    new Date(dateString).toLocaleDateString("en-US");
  const fetchNameFromUrl = (url) => url; // Replace with actual fetch logic

  useEffect(() => {
    if (id) {
      fetch(`https://swapi.dev/api/people/${id}`)
        .then((response) => response.json())
        .then((data) => setCharacterData(data));
    }
  }, [id]);

  return (
    <div className="container">
      
      {characterData && (
        <div className="align-middle max-w-sm mx-auto bg-white rounded-lg border border-gray-200 shadow-md overflow-hidden">
          <div className="p-5">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              {characterData.name}
            </h2>
            <p className="mt-1 text-gray-500 text-sm">
              Birth Year: {characterData.birth_year}
            </p>
            <div className="mt-4">
              <p className="text-gray-700">Height: {characterData.height} cm</p>
              <p className="text-gray-700">Mass: {characterData.mass} kg</p>
              <p className="text-gray-700">
                Hair Color: {characterData.hair_color}
              </p>
              <p className="text-gray-700">
                Skin Color: {characterData.skin_color}
              </p>
              <p className="text-gray-700">
                Eye Color: {characterData.eye_color}
              </p>
              <p className="text-gray-700">Gender: {characterData.gender}</p>
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-medium text-gray-900">Films</h3>
              <ul className="list-disc pl-5 text-gray-600">
                {characterData.films.map((url) => (
                  <li key={url}>{url}</li>
                ))}
              </ul>
            </div>

            <div className="mt-4">
              <h3 className="text-lg font-medium text-gray-900">Vehicles</h3>
              <ul className="list-disc pl-5 text-gray-600">
                {characterData.vehicles.map((url) => (
                  <li key={url}>{url}</li>
                ))}
              </ul>
            </div>

            <div className="mt-4">
              <h3 className="text-lg font-medium text-gray-900">Starships</h3>
              <ul className="list-disc pl-5 text-gray-600">
                {characterData.starships.map((url) => (
                  <li key={url}>{url}</li>
                ))}
              </ul>
            </div>
                   {/* Homeworld Section */}
            <div className="mt-4">
              <h3 className="text-lg font-medium text-gray-900">Homeworld</h3>
              <p className="text-gray-600">{fetchNameFromUrl(characterData.homeworld)}</p>
            </div>

            {/* Species Section */}
            <div className="mt-4">
              <h3 className="text-lg font-medium text-gray-900">Species</h3>
              <ul className="list-disc pl-5 text-gray-600">
                {characterData.species.map(url => <li key={url}>{fetchNameFromUrl(url)}</li>)}
              </ul>
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-500">
                Profile created: {formatDate(characterData.created)}
              </p>
              <p className="text-sm text-gray-500">
                Last edited: {formatDate(characterData.edited)}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CharacterPage;
