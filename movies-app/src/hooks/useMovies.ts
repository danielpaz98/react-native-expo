// PLUGINS
import { useQuery } from "@tanstack/react-query";

// SERVICES
import { fetchNowPlaying, fetchPopularMovies } from "@/services/tmdb/movies";

const staleTime = 1000 * 60 * 60 * 24; // 24 hours

export const useMovies = () => {
  const nowPlayingQuery = useQuery({
    queryKey: ["movies", "nowPlaying"],
    queryFn: fetchNowPlaying,
    staleTime,
  });

  const popularQuery = useQuery({
    queryKey: ["movies", "popular"],
    queryFn: fetchPopularMovies,
    staleTime,
  });

  return { nowPlayingQuery, popularQuery };
};
