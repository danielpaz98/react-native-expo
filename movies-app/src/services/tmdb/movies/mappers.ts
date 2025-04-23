// TYPES
import type { Movie, MovieDetails } from "@/models/movie";
import type { MoviesDBResult, MovieDetailsDBResponse } from "@/services/tmdb/movies/types";

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

export const mapMovieDetailsFromTMDB = (movie: MovieDetailsDBResponse): MovieDetails => {
  return {
    id: movie.id,
    title: movie.title,
    description: movie.overview,
    releaseDate: movie.release_date,
    poster: movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : "",
    backdrop: movie.backdrop_path ? `https://image.tmdb.org/t/p/w500${movie.backdrop_path}` : "",
    rating: movie.vote_average,
    genres: movie.genres.map((genre) => genre.name),
    duration: movie.runtime,
    budget: movie.budget,
    originalTitle: movie.original_title,
    productionCompanies: movie.production_companies.map((company) => company.name),
  };
};
