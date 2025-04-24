import { Link } from "expo-router";
import { View, useWindowDimensions } from "react-native";
// PLUGINS
import ReanimatedCarousel from "react-native-reanimated-carousel";

// COMPONENTS
import PosterCard from "./MoviePoster";

// MODELS
import type { Movie } from "@/models/movie";

interface Props {
  movies: Movie[];
}

export default function Carousel({ movies }: Props) {
  const width = useWindowDimensions().width;

  return (
    <View className="h-[250px] w-full">
      <ReanimatedCarousel
        width={200}
        height={250}
        data={movies}
        mode="parallax"
        defaultIndex={1}
        renderItem={({ item }) => (
          <Link asChild href={`/movie/${item.id}`}>
            <PosterCard id={item.id} poster={item.poster} />
          </Link>
        )}
        modeConfig={{ parallaxScrollingScale: 0.9, parallaxScrollingOffset: 50 }}
        style={{ width, height: 250, justifyContent: "center", alignItems: "center" }}
      />
    </View>
  );
}
