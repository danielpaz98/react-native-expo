import { Text, Pressable } from "react-native";
// PLUGINS
import { type VariantProps } from "class-variance-authority";
// UTILS
import { cn } from "@/utils";
// COMPONENTS
import { ThemedText } from "@/components/shared";
// VARIANTS
import { textStyles } from "@/components/shared/ThemedText";

interface Props extends React.ComponentProps<typeof Pressable>, VariantProps<typeof textStyles> {
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
