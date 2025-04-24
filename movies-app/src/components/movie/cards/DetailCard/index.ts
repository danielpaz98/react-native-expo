// COMPONENTS
import MovieDetailCardBackground from "./Background";
import MovieDetailCardMeta from "./Meta";
import MovieDetailCard from "./Root";
import MovieDetailCardTitle from "./Title";

export default Object.assign(MovieDetailCard, {
  Background: MovieDetailCardBackground,
  Title: MovieDetailCardTitle,
  Meta: MovieDetailCardMeta,
});
