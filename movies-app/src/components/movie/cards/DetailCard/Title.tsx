import { Text } from "react-native";

// UTILS
import { cn } from "@/utils";

type Props = React.ComponentProps<typeof Text>;

export default function Title({ children, className, ...restProps }: Props) {
  const classNames = cn("text-2xl font-bold text-white", className);

  return (
    <Text className={classNames} {...restProps}>
      {children}
    </Text>
  );
}
