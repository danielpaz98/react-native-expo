// CLIENTS
import { movieClient } from "./client";
// MAPPERS
import { mapMovieFromTMDB } from "./mappers";
// TYPES
import type { MoviesDBResponse } from "./types";

interface Pagination {
  page?: number;
  limit?: number;
}

export const fetchNowPlaying = async () => {
  try {
    const { data } = await movieClient.get<MoviesDBResponse>("/now_playing");
    const movies = data.results.map(mapMovieFromTMDB);

    return movies;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const fetchPopularMovies = async () => {
  try {
    const { data } = await movieClient.get<MoviesDBResponse>("/popular");
    const movies = data.results.map(mapMovieFromTMDB);

    return movies;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const fetchTopRatedMovies = async ({ page = 1, limit = 10 }: Pagination) => {
  try {
    const { data } = await movieClient.get<MoviesDBResponse>("/top_rated", {
      params: { page, limit },
    });
    const movies = data.results.map(mapMovieFromTMDB);

    return movies;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const fetchUpcomingMovies = async () => {
  try {
    const { data } = await movieClient.get<MoviesDBResponse>("/upcoming");
    const movies = data.results.map(mapMovieFromTMDB);

    return movies;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
