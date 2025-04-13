import { Pressable, Image } from "react-native";

// MODELS
import type { Movie } from "@/models/movie";
// UTILS
import { cn } from "@/utils";

type TMoviePoster = Pick<Movie, "id" | "poster">;

interface Props extends Omit<React.ComponentPropsWithoutRef<typeof Pressable>, "id">, TMoviePoster {
  imageClassName?: string;
  small?: boolean;
}

const baseClasses = "active:opacity-90 px-2";
const baseImageClasses = "rounded-2xl shadow-lg w-[150px] h-[250px]";

export default function MoviePoster({ className, imageClassName, small = false, poster }: Props) {
  const classNames = cn(baseClasses, className);
  const imageClassNames = cn(baseImageClasses, { "w-[85px] h-[130px]": small }, imageClassName);

  return (
    <Pressable className={classNames}>
      <Image className={imageClassNames} source={{ uri: poster }} resizeMode="cover" />
    </Pressable>
  );
}
