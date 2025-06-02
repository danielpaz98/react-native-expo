import { useRef, useState } from "react";
import {
  View,
  FlatList,
  useWindowDimensions,
  type NativeSyntheticEvent,
  type NativeScrollEvent,
} from "react-native";
// PLUGINS
import { router } from "expo-router";
// COMPONENTS
import { FadeInImage } from "@/components";
import { ThemedView, ThemedText, ThemedButton } from "@/components/shared";
// DATA
import { items, type Slide } from "@/data/slides";

const SlideItem = ({ item }: { item: Slide }) => {
  const { width } = useWindowDimensions();
  const { title, desc, img } = item;

  return (
    <ThemedView className="justify-center flex-1 px-10" style={{ width }}>
      <FadeInImage
        source={img}
        className="bg-transparent border-0 shadow-none aspect-square"
        style={{ width: width * 0.7, height: width * 0.7 }}
      />

      <View className="gap-5">
        <ThemedText size="h1" className="text-light-primary dark:text-dark-primary">
          {title}
        </ThemedText>

        <ThemedText>{desc}</ThemedText>
      </View>
    </ThemedView>
  );
};

export default function SlidesScreen() {
  const flatListRef = useRef<FlatList>(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isScrollEnabled, setIsScrollEnabled] = useState(false);

  const handleOnScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (isScrollEnabled) return;

    const { contentOffset, layoutMeasurement } = event.nativeEvent;
    const currentIndex = Math.floor(contentOffset.x / layoutMeasurement.width);
    setCurrentSlideIndex(currentIndex > 0 ? currentIndex : 0);
    setIsScrollEnabled(currentIndex === items.length - 1);
  };

  const scrollToNextSlide = (index: number) => {
    if (!flatListRef.current) return;

    flatListRef.current.scrollToIndex({ index, animated: true });
  };

  return (
    <ThemedView className="flex-1">
      <FlatList
        ref={flatListRef}
        data={items}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => <SlideItem item={item} />}
        horizontal
        pagingEnabled
        scrollEnabled={isScrollEnabled}
        onScroll={handleOnScroll}
      />

      {currentSlideIndex === items.length - 1 ? (
        <ThemedButton className="absolute bottom-14 right-5 w-36" onPress={() => router.dismiss()}>
          Finalizar
        </ThemedButton>
      ) : (
        <ThemedButton
          className="absolute bottom-14 right-5 w-36"
          onPress={() => scrollToNextSlide(currentSlideIndex + 1)}
        >
          Siguiente
        </ThemedButton>
      )}
    </ThemedView>
  );
}
