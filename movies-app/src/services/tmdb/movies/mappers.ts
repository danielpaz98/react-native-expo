// TYPES
import type { Movie, MovieDetails, MovieCast } from "@/models/movie";
import type { MoviesDBResult, MovieDetailsDBResponse, MovieDBCast } from "@/services/tmdb/movies/types";

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
    genres: movie.genres.map((g) => g.name),
    duration: movie.runtime,
    budget: movie.budget,
    languages: movie.spoken_languages.map((l) => l.name),
    originalTitle: movie.original_title,
    productionCompanies: movie.production_companies.map((company) => company.name),
  };
};

export const mapMovieCastFromTMDB = (cast: MovieDBCast): MovieCast => {
  return {
    id: cast.id,
    name: cast.name,
    character: cast.character ?? "No character",
    avatar: cast.profile_path
      ? `https://image.tmdb.org/t/p/w500${cast.profile_path}`
      : "https://i.stack.imgur.com/l60Hf.png",
  };
};
