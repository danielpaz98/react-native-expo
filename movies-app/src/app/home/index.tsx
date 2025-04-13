import { View, ActivityIndicator } from "react-native";
// PLUGINS
import { SafeAreaView } from "react-native-safe-area-context";

// COMPONENTS
import { Row } from "@/components";
import { MovieCarousel } from "@/components/movie";
// HOOKS
import { useMovies } from "@/hooks/useMovies";

export default function HomeScreen() {
  const { nowPlayingQuery } = useMovies();

  if (nowPlayingQuery.isLoading) {
    return (
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator color="purple" size={40} />
      </View>
    );
  }

  return (
    <SafeAreaView className="mt-2">
      <Row title="Movies App">
        <MovieCarousel movies={nowPlayingQuery.data ?? []} />
      </Row>
    </SafeAreaView>
  );
}
