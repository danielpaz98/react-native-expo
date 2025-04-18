// PLUGINS
import { useQuery } from "@tanstack/react-query";

// SERVICES
import {
  fetchNowPlaying,
  fetchPopularMovies,
  fetchTopRatedMovies,
  fetchUpcomingMovies,
} from "@/services/tmdb/movies";

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

  const topRatedQuery = useQuery({
    queryKey: ["movies", "top_rated"],
    queryFn: fetchTopRatedMovies,
    staleTime,
  });

  const upcomingQuery = useQuery({
    queryKey: ["movies", "upcoming"],
    queryFn: fetchUpcomingMovies,
    staleTime,
  });

  return { nowPlayingQuery, popularQuery, topRatedQuery, upcomingQuery };
};
