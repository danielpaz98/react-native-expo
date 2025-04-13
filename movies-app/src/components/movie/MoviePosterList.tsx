import { FlatList } from "react-native";

// COMPONENTS
import MoviePoster from "./MoviePoster";

// MODELS
import type { Movie } from "@/models/movie";
// UTILS
import { cn } from "@/utils";

interface Props {
  movies: Movie[];
  className?: string;
}

export default function MoviePosterList({ movies, className }: Props) {
  return (
    <FlatList
      horizontal
      data={movies}
      keyExtractor={(item) => `${item.id}`}
      className={cn(className)}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => <MoviePoster id={item.id} poster={item.poster} small />}
    />
  );
}
