// PLUGINS
import { useQuery } from "@tanstack/react-query";

// CONSTANTS
import { STALE_TIME as staleTime } from "@/constants";
// SERVICES
import { fetchMovieDetailsById } from "@/services/tmdb/movies";

export const useMovie = (id: number) => {
  const movieDetailsQuery = useQuery({
    queryKey: ["movie", "details", id],
    queryFn: () => fetchMovieDetailsById(id),
    staleTime,
  });

  return { movieDetailsQuery };
};
