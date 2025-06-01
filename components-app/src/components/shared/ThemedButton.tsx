import { Pressable } from "react-native";
// UTILS
import { cn } from "@/utils";
// COMPONENTS
import ThemedText, { textStyles, type TextVariants } from "./ThemedText";

interface Props extends React.ComponentProps<typeof Pressable>, TextVariants {
  children?: React.ReactNode;
  textClassName?: string;
}

export default function ThemedButton({
  children,
  className,
  textClassName,
  variant,
  size,
  ...restProps
}: Props) {
  const classNames = cn(
    "bg-light-primary items-center rounded-xl px-6 py-2 dark:bg-dark-primary active:opacity-80",
    className,
  );
  const textClassNames = cn(textStyles({ variant, size }), textClassName);

  return (
    <Pressable className={classNames} {...restProps}>
      <ThemedText className={textClassNames}>{children}</ThemedText>
    </Pressable>
  );
}
