// CLIENTS
import { movieClient } from "./client";
// MAPPERS
import { mapMovieFromTMDB } from "./mappers";
// TYPES
import type { MovieDBResponse } from "./types";

interface Pagination {
  page?: number;
  limit?: number;
}

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

export const fetchTopRatedMovies = async ({ page = 1, limit = 10 }: Pagination) => {
  try {
    const { data } = await movieClient.get<MovieDBResponse>("/top_rated", {
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
    const { data } = await movieClient.get<MovieDBResponse>("/upcoming");
    const movies = data.results.map(mapMovieFromTMDB);

    return movies;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
