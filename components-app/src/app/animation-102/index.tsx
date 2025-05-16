import { useRef } from "react";
import { Animated, PanResponder } from "react-native";
// COMPONENTS
import { ThemedView } from "@/components/shared";

export default function Animation102Screen() {
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }], { useNativeDriver: false }),
    onPanResponderRelease: () => {
      Animated.spring(pan, { toValue: { x: 0, y: 0 }, useNativeDriver: false }).start();
    },
  });

  return (
    <ThemedView className="m-2.5 flex-1 items-center justify-center">
      <Animated.View
        className="bg-light-secondary dark:bg-dark-secondary rounded-xl size-36"
        {...panResponder.panHandlers}
        style={pan.getLayout()}
      />
    </ThemedView>
  );
}
