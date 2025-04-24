import { forwardRef } from "react";
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

const MoviePoster = forwardRef<React.ElementRef<typeof Pressable>, Props>(
  ({ id, className, imageClassName, small = false, poster, ...restProps }, ref) => {
    const classNames = cn(baseClasses, className);
    const imageClassNames = cn(baseImageClasses, { "w-[85px] h-[130px]": small }, imageClassName);

    return (
      <Pressable ref={ref} className={classNames} {...restProps}>
        <Image className={imageClassNames} source={{ uri: poster }} resizeMode="cover" />
      </Pressable>
    );
  },
);

MoviePoster.displayName = "MoviePoster";

export default MoviePoster;
