import { useState } from "react";
import { View, ActivityIndicator, Animated, type ImageProps } from "react-native";
// UTILS
import { cn } from "@/utils";
// HOOKS
import { useThemeColor } from "@/hooks/useThemeColor";
import { useAnimation } from "@/hooks/useAnimation";

interface Props extends React.ComponentProps<typeof View>, Pick<ImageProps, "source" | "resizeMode"> {
  imageClassName?: string;
  imageStyle?: ImageProps["style"];
}

export default function FadeInImage({
  className,
  imageClassName,
  imageStyle,
  source,
  resizeMode = "contain",
  ...restProps
}: Props) {
  const imageClassNames = cn("size-full", imageClassName);
  const classNames = cn(
    "aspect-[8/7] items-center justify-center mx-auto overflow-hidden",
    "border border-neutral-800 bg-neutral-900 rounded-xl shadow-sm",
    className,
  );

  const [isLoading, setIsLoading] = useState(true);
  const primaryColor = useThemeColor({}, "primary");
  const { animatedOpacity, fadeIn } = useAnimation();

  const handleOnLoadEnd = () => {
    fadeIn({ duration: 500 });
    setIsLoading(false);
  };

  return (
    <View className={classNames} {...restProps}>
      {isLoading && (
        <ActivityIndicator
          size={30}
          color={primaryColor}
          className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
        />
      )}
      <Animated.Image
        source={source}
        className={imageClassNames}
        resizeMode={resizeMode}
        onLoadEnd={handleOnLoadEnd}
        style={[{ opacity: animatedOpacity }, imageStyle]}
      />
    </View>
  );
}
