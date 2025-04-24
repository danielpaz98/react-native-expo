import { ImageBackground, View, ImageSourcePropType } from "react-native";

// UTILS
import { cn } from "@/utils";

interface Props {
  source: ImageSourcePropType;
  children?: React.ReactNode;
  className?: string;
}

export default function MovieDetailBackground({ source, children, className }: Props) {
  const classNames = cn("h-48 w-full justify-end px-4 pb-4", className);

  return (
    <ImageBackground source={source} className={classNames} resizeMode="cover">
      <View className="rounded-md bg-black/40 p-2">{children}</View>
    </ImageBackground>
  );
}
