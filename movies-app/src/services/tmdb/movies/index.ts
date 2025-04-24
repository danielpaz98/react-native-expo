// CLIENTS
import { movieClient } from "./client";
// MAPPERS
import { mapMoviesFromTMDB, mapMovieDetailsFromTMDB, mapMovieCastFromTMDB } from "./mappers";
// TYPES
import type { MoviesDBResponse, MovieDetailsDBResponse, MovieDBCreditsResponse } from "./types";

interface Pagination {
  page?: number;
  limit?: number;
}

export const fetchNowPlaying = async () => {
  try {
    const { data } = await movieClient.get<MoviesDBResponse>("/now_playing");
    const movies = data.results.map(mapMoviesFromTMDB);

    return movies;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const fetchPopularMovies = async () => {
  try {
    const { data } = await movieClient.get<MoviesDBResponse>("/popular");
    const movies = data.results.map(mapMoviesFromTMDB);

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
    const movies = data.results.map(mapMoviesFromTMDB);

    return movies;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const fetchUpcomingMovies = async () => {
  try {
    const { data } = await movieClient.get<MoviesDBResponse>("/upcoming");
    const movies = data.results.map(mapMoviesFromTMDB);

    return movies;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const fetchMovieDetailsById = async (id: number) => {
  try {
    const { data } = await movieClient.get<MovieDetailsDBResponse>(`/${id}`);
    const movie = mapMovieDetailsFromTMDB(data);

    return movie;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const fetchMovieCast = async (movieId: number) => {
  try {
    const { data } = await movieClient.get<MovieDBCreditsResponse>(`/${movieId}/credits`);
    const cast = data.cast.map(mapMovieCastFromTMDB);

    return cast;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
