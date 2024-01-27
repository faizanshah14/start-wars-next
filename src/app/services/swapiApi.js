"use strict";

// services/swapiApi.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const swapiApi = createApi({
  reducerPath: "swapiApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://swapi.dev/api/" }),
  endpoints: (builder) => ({
    getPeople: builder.query({
      query: () => "people",
    }),
    getPerson: builder.query({
      query: (id) => `people/${id}`,
    }),
    getPlanets: builder.query({
      query: () => "planets",
    }),
    getPlanet: builder.query({
      query: (id) => `planets/${id}`,
    }),
    getFilms: builder.query({
      query: () => "films",
    }),
    getFilm: builder.query({
      query: (id) => `films/${id}`,
    }),
    getSpecies: builder.query({
      query: () => "species",
    }),
    getSpecie: builder.query({
      query: (id) => `species/${id}`,
    }),
    getVehicles: builder.query({
      query: () => "vehicles",
    }),
    getVehicle: builder.query({
      query: (id) => `vehicles/${id}`,
    }),
    getStarships: builder.query({
      query: () => "starships",
    }),
    getStarship: builder.query({
      query: (id) => `starships/${id}`,
    }),
  }),
});
export const {
  useGetPeopleQuery,
  useGetPersonQuery,
  useGetPlanetsQuery,
  useGetPlanetQuery,
  useGetFilmsQuery,
  useGetFilmQuery,
  useGetSpeciesQuery,
  useGetSpecieQuery,
  useGetVehiclesQuery,
  useGetVehicleQuery,
  useGetStarshipsQuery,
  useGetStarshipQuery,
} = swapiApi;
