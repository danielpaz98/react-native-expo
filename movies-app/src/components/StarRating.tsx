import { Ionicons } from "@expo/vector-icons";
import { View } from "react-native";

interface Props {
  rating: number;
  max?: number;
  size?: number;
  color?: string;
}

export default function StarRating({ rating, max = 5, size = 18, color = "#fbb040" }: Props) {
  return (
    <View style={{ flexDirection: "row" }} accessibilityLabel={`${rating} stars`} accessible>
      {Array.from({ length: max }).map((_, i) => {
        const starIndex = i + 1;
        const isFull = starIndex <= rating;
        const isHalf = !isFull && starIndex - 0.5 <= rating;

        return (
          <Ionicons
            key={i}
            name={isFull ? "star" : isHalf ? "star-half" : "star-outline"}
            size={size}
            color={color}
          />
        );
      })}
    </View>
  );
}
