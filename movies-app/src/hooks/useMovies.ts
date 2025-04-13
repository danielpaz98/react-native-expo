// PLUGINS
import { useQuery } from "@tanstack/react-query";

// SERVICES
import { fetchNowPlaying } from "@/services/tmdb/movies";

export const useMovies = () => {
  const nowPlayingQuery = useQuery({
    queryKey: ["movies", "nowPlaying"],
    queryFn: fetchNowPlaying,
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
  });

  return { nowPlayingQuery };
};
