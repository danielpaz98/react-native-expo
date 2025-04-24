// PLUGINS
import { useQuery } from "@tanstack/react-query";

// CONSTANTS
import { STALE_TIME as staleTime } from "@/constants";
// SERVICES
import { fetchMovieDetailsById, fetchMovieCast } from "@/services/tmdb/movies";

export const useMovieDetails = (id: number) => {
  const movieDetailsQuery = useQuery({
    queryKey: ["movie", id, "details"],
    queryFn: () => fetchMovieDetailsById(id),
    staleTime,
  });

  const movieCastQuery = useQuery({
    queryKey: ["movie", id, "cast"],
    queryFn: () => fetchMovieCast(id),
    staleTime,
  });

  return { movieDetailsQuery, movieCastQuery };
};
