// PLUGINS
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

// CONSTANTS
import { STALE_TIME as staleTime } from "@/constants";
// SERVICES
import {
  fetchNowPlaying,
  fetchPopularMovies,
  fetchTopRatedMovies,
  fetchUpcomingMovies,
} from "@/services/tmdb/movies";

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

  const topRatedQuery = useInfiniteQuery({
    initialPageParam: 1,
    staleTime,
    queryKey: ["movies", "top_rated"],
    queryFn: ({ pageParam: page }) => fetchTopRatedMovies({ page }),
    getNextPageParam: (_, pages) => pages.length + 1,
  });

  const upcomingQuery = useQuery({
    queryKey: ["movies", "upcoming"],
    queryFn: fetchUpcomingMovies,
    staleTime,
  });

  return { nowPlayingQuery, popularQuery, topRatedQuery, upcomingQuery };
};
