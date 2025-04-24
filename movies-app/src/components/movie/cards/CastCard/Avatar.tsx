import { Image } from "react-native";

// UTILS
import { cn } from "@/utils";

interface Props extends React.ComponentProps<typeof Image> {
  small?: boolean;
  rounded?: boolean;
}

export default function MovieCastCardAvatar({
  className,
  small = false,
  rounded = false,
  ...restProps
}: Props) {
  const borderRadius = rounded ? "rounded-full" : "rounded-2xl";
  let sizeClass = small ? "w-[80px] h-[100px]" : "w-[100px] h-[150px]";
  if (rounded) sizeClass = small ? "w-16 h-16" : "w-20 h-20";

  const classNames = cn("shadow", sizeClass, borderRadius, className);

  return <Image className={classNames} resizeMode="cover" {...restProps} />;
}
