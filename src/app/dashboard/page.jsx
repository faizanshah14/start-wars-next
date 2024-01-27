"use strict";

// pages/index.js - Home page with character list and pagination
"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useGetPeopleQuery } from "../services/swapiApi";
const HomePage = () => {
  const [characters, setCharacters] = useState([]);
  // const { data: people, error, isLoading } = useGetPeopleQuery(); 
  const [data, setData] = useState(null);
  const [apiUrl, setApiUrl] = useState('https://swapi.dev/api/people/?page=1');
  const router = useRouter();
  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {setCharacters(data.results); setData(data);});
    console.log(characters);
  }, [apiUrl]);
  const handleNextPage = () => {
    setApiUrl(data.next);
  };
  const handlePreviousPage = () => {  
    if(data.previous){
      setApiUrl(data.previous);
    }
  };
  return (
    <div className="mx-4 place-content-center">
      <div className="grid grid-cols-12 md:grid-cols-12 lg:grid-cols-12 items-center">
        {/* <!-- Left Section - Using 3 out of 12 columns --> */}
        <div className="col-span-3 flex justify-center">
          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-black m-4 cursor-pointer hover:bg-gray-900">
            <div className="px-6 py-4 flex items-center justify-center" onClick={handlePreviousPage}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
            </svg>
            </div>
          </div>
        </div>

        {/* <!-- Middle Section - Using 6 out of 12 columns --> */}
        <div className="col-span-6">
          <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 ">
            {characters && characters.map((character, index) => (
              <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
                <div
                  key={index}
                  className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4"
                  onClick={() => {
                    const id = extractId(character.url);
                    router.push(`/characters/${id}`);
                  }}
                >
                  <div className="px-6 py-4">
                    <h2 className="font-sans text-black">{character.name}</h2>
                    <p className="text-gray-700 text-base">
                      Height: {character.height} cm
                      <br />
                      Mass: {character.mass} kg
                      <br />
                      Hair Color: {character.hair_color}
                      <br />
                      Skin Color: {character.skin_color}
                      <br />
                      Eye Color: {character.eye_color}
                      <br />
                      Birth Year: {character.birth_year}
                      <br />
                      Gender: {character.gender}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* 
    <!-- Right Section - Using 3 out of 12 columns --> */}
        <div className="col-span-3 flex justify-center">
          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-black m-4 cursor-pointer hover:bg-gray-900">
            <div className="px-6 py-4 flex items-center justify-center" onClick={handleNextPage}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m15 15 6-6m0 0-6-6m6 6H9a6 6 0 0 0 0 12h3" />
            </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const extractId = (url) => {
  const idPattern = /people\/(\d+)\//;
  const match = url.match(idPattern);
  return match ? match[1] : null;
};

export default HomePage;
