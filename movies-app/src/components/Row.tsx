import { View, Text } from "react-native";

// UTILS
import { cn } from "@/utils";

interface Props extends React.ComponentPropsWithoutRef<typeof View> {
  title: string;
  titleClassName?: string;
}

export default function Row({ title, titleClassName, className, children, ...restProps }: Props) {
  const titleClassNames = cn("mb-2 px-4 text-3xl font-bold", titleClassName);

  return (
    <View className={className} {...restProps}>
      {title && <Text className={titleClassNames}>{title}</Text>}
      {children}
    </View>
  );
}
