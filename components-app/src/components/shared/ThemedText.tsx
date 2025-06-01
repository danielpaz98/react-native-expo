import { Text } from "react-native";
// PLUGINS
import { cva, type VariantProps } from "class-variance-authority";
// UTILS
import { cn } from "@/utils";

export const textStyles = /* tw */ cva("text-base text-light-text dark:text-dark-text", {
  variants: {
    size: {
      h1: "text-3xl",
      h2: "text-2xl",
      h3: "text-xl",
      h4: "text-lg",
      h5: "text-base",
      h6: "text-sm",
    },
    variant: {
      link: "font-normal underline",
    },
  },
});

export type TextVariants = VariantProps<typeof textStyles>;
export type Props = React.ComponentProps<typeof Text> & TextVariants;

export default function ThemedText({ children, className, variant, size, ...restProps }: Props) {
  const classNames = cn(textStyles({ variant, size }), className);

  return (
    <Text className={classNames} {...restProps}>
      {children}
    </Text>
  );
}
