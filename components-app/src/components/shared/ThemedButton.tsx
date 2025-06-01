import { Pressable } from "react-native";
// PLUGINS
import { cva, type VariantProps } from "class-variance-authority";
// UTILS
import { cn } from "@/utils";
// COMPONENTS
import ThemedText, { textStyles, type TextVariants } from "./ThemedText";

const buttonVariants = /* tw */ cva(
  "inline-flex items-center justify-center rounded-xl bg-light-primary dark:bg-dark-primary active:opacity-80",
  {
    variants: {
      size: {
        default: "px-6 py-2",
        icon: "size-8 rounded-md",
      },
    },
    defaultVariants: {
      size: "default",
    },
  },
);

interface Props extends React.ComponentProps<typeof Pressable>, VariantProps<typeof buttonVariants> {
  children?: React.ReactNode;
  textClassName?: string;
  textVariant?: TextVariants["variant"];
  textSize?: TextVariants["size"];
}

export default function ThemedButton({
  children,
  className,
  size,
  textClassName,
  textVariant,
  textSize,
  ...restProps
}: Props) {
  return (
    <Pressable className={cn(buttonVariants({ size, className }))} {...restProps}>
      <ThemedText
        className={cn(textStyles({ variant: textVariant, size: textSize, className: textClassName }))}
        variant={textVariant}
        size={textSize}
      >
        {children}
      </ThemedText>
    </Pressable>
  );
}
