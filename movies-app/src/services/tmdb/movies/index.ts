// CLIENTS
import { movieClient } from "./client";
// MAPPERS
import { mapMovieFromTMDB } from "./mappers";
// TYPES
import type { MovieDBResponse } from "./types";

export const fetchNowPlaying = async () => {
  try {
    const { data } = await movieClient.get<MovieDBResponse>("/now_playing");
    const movies = data.results.map(mapMovieFromTMDB);

    return movies;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const fetchPopularMovies = async () => {
  try {
    const { data } = await movieClient.get<MovieDBResponse>("/popular");
    const movies = data.results.map(mapMovieFromTMDB);

    return movies;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
