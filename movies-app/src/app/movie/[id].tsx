import { useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";

import { fetchMovieDetailsById } from "@/services/tmdb/movies";

export default function MovieScreen() {
  const { id } = useLocalSearchParams();

  fetchMovieDetailsById(+id);

  return (
    <View>
      <Text>MovieScreen</Text>
    </View>
  );
}
