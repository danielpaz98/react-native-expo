import { useLocalSearchParams } from "expo-router";
import { View, ActivityIndicator } from "react-native";

// HOOKS
import { useMovieDetails } from "@/hooks";
// SCREENS
import { MovieDetailScreen } from "@/screens";

export default function MovieScreen() {
  const { id } = useLocalSearchParams();
  const { movieDetailsQuery, movieCastQuery } = useMovieDetails(+id);

  const isLoading =
    movieDetailsQuery.isLoading ||
    !movieDetailsQuery.data ||
    movieCastQuery.isLoading ||
    !movieCastQuery.data;

  if (isLoading) {
    return (
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator color="purple" size={40} />
      </View>
    );
  }

  return <MovieDetailScreen movie={movieDetailsQuery.data} cast={movieCastQuery.data} />;
}
