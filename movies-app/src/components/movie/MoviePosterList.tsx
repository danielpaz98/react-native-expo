import { Link } from "expo-router";
import { useEffect, useRef } from "react";
import { FlatList, type NativeScrollEvent, type NativeSyntheticEvent } from "react-native";

// COMPONENTS
import MoviePoster from "./MoviePoster";

// MODELS
import type { Movie } from "@/models/movie";
// UTILS
import { cn } from "@/utils";

interface Props {
  className?: string;
  movies: Movie[];
  loadNextPage?: () => void;
}

export default function MoviePosterList({ className, movies, loadNextPage }: Props) {
  const isLoading = useRef(false);

  const handleOnScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (isLoading.current) return;

    const { contentOffset, layoutMeasurement, contentSize } = e.nativeEvent;

    const isEndReached = contentOffset.x + layoutMeasurement.width + 600 >= contentSize.width;

    if (!isEndReached) return;

    isLoading.current = true;

    loadNextPage?.();
  };

  useEffect(() => {
    setTimeout(() => (isLoading.current = false), 200);
  }, [movies]);

  return (
    <FlatList
      horizontal
      data={movies}
      keyExtractor={(item, i) => `${item.id}-${i}`}
      className={cn(className)}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => (
        <Link asChild href={`/movie/${item.id}`}>
          <MoviePoster id={item.id} poster={item.poster} small />
        </Link>
      )}
      onScroll={handleOnScroll}
    />
  );
}
