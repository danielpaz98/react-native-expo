// TYPES
import type { Movie } from "@/models/movie";
import type { MoviesDBResult } from "@/services/tmdb/movies/types";

export const mapMoviesFromTMDB = (movie: MoviesDBResult): Movie => {
  return {
    id: movie.id,
    title: movie.title,
    description: movie.overview,
    releaseDate: movie.release_date,
    poster: movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : "",
    backdrop: movie.backdrop_path ? `https://image.tmdb.org/t/p/w500${movie.backdrop_path}` : "",
    rating: movie.vote_average,
  };
};
