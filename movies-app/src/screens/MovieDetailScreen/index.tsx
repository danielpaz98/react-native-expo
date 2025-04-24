import { View, Text, ScrollView } from "react-native";

// COMPONENTS
import { Row, StarRating, HorizontalList } from "@/components";
import { MovieDetailCard, MovieCastCard } from "@/components/movie/cards";
// TYPES
import type { MovieDetails, MovieCast } from "@/models/movie";
// UTILS
import { cn } from "@/utils";
import { formatDuration, formatPrice } from "@/utils/formatters";

interface Props {
  movie: MovieDetails;
  cast: MovieCast[];
}

const baseTitleClasses = "text-xl mb-0 p-0 text-neutral-900";

export default function MovieDetailScreen({ movie, cast }: Props) {
  return (
    <ScrollView className="bg-white">
      <MovieDetailCard>
        <MovieDetailCard.Background source={{ uri: movie.backdrop }}>
          <MovieDetailCard.Title>{movie.title}</MovieDetailCard.Title>
          <StarRating rating={movie.rating / 2} />
        </MovieDetailCard.Background>

        <View className="flex-row py-3">
          <MovieDetailCard.Meta label="Duración" value={formatDuration(movie.duration)} />
          <MovieDetailCard.Meta label="Género" value={movie.genres.join(", ")} />
          <MovieDetailCard.Meta label="Idioma" value={movie.languages.join(", ")} />
        </View>
      </MovieDetailCard>

      <View className="py-3">
        <Row className="mx-7" title="Sinopsis" titleClassName={baseTitleClasses}>
          <Text className="text-gray-500">{movie.description}</Text>
        </Row>

        <Row className="mx-7 mt-4" title="Presupuesto" titleClassName={baseTitleClasses}>
          <Text className="text-gray-500">{formatPrice(movie.budget)}</Text>
        </Row>

        <Row className="mt-4" title="Actores" titleClassName={cn(baseTitleClasses, "mx-7")}>
          <HorizontalList
            data={cast}
            className="px-3"
            renderItem={({ item, isLast }) => {
              return (
                <MovieCastCard className="mx-4" key={item.name}>
                  <MovieCastCard.Text>{item.name}</MovieCastCard.Text>
                  <MovieCastCard.Avatar className="my-1" rounded source={{ uri: item.avatar }} />
                  <MovieCastCard.Text>{item.character}</MovieCastCard.Text>
                </MovieCastCard>
              );
            }}
          />
        </Row>
      </View>
    </ScrollView>
  );
}
