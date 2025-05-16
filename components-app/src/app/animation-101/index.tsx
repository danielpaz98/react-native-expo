import { Animated, Easing } from "react-native";
// COMPONENTS
import { ThemedView, ThemedButton } from "@/components/shared";
// HOOKS
import { useAnimation } from "@/hooks/useAnimation";

export default function Animation101Screen() {
  const { animatedTop, animatedOpacity, fadeIn, fadeOut, slideInFromTop } = useAnimation();

  return (
    <ThemedView className="m-2.5 flex-1 items-center justify-center gap-5">
      <Animated.View
        className="bg-light-secondary dark:bg-dark-secondary rounded-xl size-36"
        style={{ opacity: animatedOpacity, transform: [{ translateY: animatedTop }] }}
      />

      <ThemedButton
        onPress={() => {
          fadeIn();
          slideInFromTop({ easing: Easing.bounce, duration: 700 });
        }}
      >
        FadeIn
      </ThemedButton>

      <ThemedButton onPress={() => fadeOut()}>FadeOut</ThemedButton>
    </ThemedView>
  );
}
