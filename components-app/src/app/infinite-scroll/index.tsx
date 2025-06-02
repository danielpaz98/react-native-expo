import { useState } from "react";
import { FlatList } from "react-native";
// COMPONENTS
import { ThemedView } from "@/components/shared";
import { FadeInImage } from "@/components";

export default function InfiniteScrollScreen() {
  const [numbers, setNumbers] = useState<number[]>([0, 1, 2, 3, 4, 5]);

  const loadMore = () => {
    const nextNumbers = Array.from({ length: 5 }, (_, i) => numbers.length + i);
    setNumbers((prev) => [...prev, ...nextNumbers]);
  };

  return (
    <ThemedView className="px-5">
      <FlatList
        contentContainerClassName="gap-5"
        data={numbers}
        keyExtractor={(item) => item.toString()}
        onEndReached={loadMore}
        onEndReachedThreshold={0.6}
        renderItem={({ item }) => (
          <FadeInImage source={{ uri: `https://picsum.photos/800/700?random=${item}` }} />
        )}
      />
    </ThemedView>
  );
}
