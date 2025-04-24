import { View, Text } from "react-native";

// UTILS
import { cn } from "@/utils";

interface Props {
  className?: string;
  label: string;
  value: string;
}

export default function Meta({ className, label, value }: Props) {
  const classNames = cn("flex-1 items-center", className);

  return (
    <View className={classNames}>
      <Text className="text-lg font-bold text-neutral-900">{label}</Text>
      <Text className="text-center text-sm font-normal text-gray-500" numberOfLines={1} ellipsizeMode="tail">
        {value}
      </Text>
    </View>
  );
}
