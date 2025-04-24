import { Text } from "react-native";

// UTILS
import { cn } from "@/utils";

type Props = React.ComponentProps<typeof Text>;

export default function MovieCastCardText({ children, className, ...restProps }: Props) {
  const classNames = cn("text-sm font-normal text-gray-600 max-w-20", className);

  return (
    <Text className={classNames} numberOfLines={1} ellipsizeMode="tail" {...restProps}>
      {children}
    </Text>
  );
}
