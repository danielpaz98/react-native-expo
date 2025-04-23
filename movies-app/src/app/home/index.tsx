import { View, ActivityIndicator, ScrollView } from "react-native";
// PLUGINS
import { SafeAreaView } from "react-native-safe-area-context";

// COMPONENTS
import { Row } from "@/components";
import { MovieCarousel, MoviePosterList } from "@/components/movie";
// HOOKS
import { useMovies } from "@/hooks";

export default function HomeScreen() {
  const { nowPlayingQuery, popularQuery, topRatedQuery, upcomingQuery } = useMovies();

  if (nowPlayingQuery.isLoading) {
    return (
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator color="purple" size={40} />
      </View>
    );
  }

  return (
    <ScrollView>
      <SafeAreaView className="pb-10 pt-2">
        <Row title="Estrenos">
          <MovieCarousel movies={nowPlayingQuery.data ?? []} />
        </Row>

        <Row title="Populares" titleClassName="mb-4">
          <MoviePosterList movies={popularQuery.data ?? []} />
        </Row>

        <Row title="Mejor calificadas" titleClassName="my-4">
          <MoviePosterList
            movies={topRatedQuery.data?.pages.flat() ?? []}
            loadNextPage={topRatedQuery.fetchNextPage}
          />
        </Row>

        <Row title="Próximamente" titleClassName="my-4">
          <MoviePosterList movies={upcomingQuery.data ?? []} />
        </Row>
      </SafeAreaView>
    </ScrollView>
  );
}
