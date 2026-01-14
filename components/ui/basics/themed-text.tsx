import { cn } from "@/utils/cn";
import { Text, type TextProps } from "react-native";

export type ThemedTextProps = TextProps & {
  type?: "default" | "title" | "defaultSemiBold" | "subtitle" | "link";
};

export function ThemedText({
  className,
  type = "default",
  ...rest
}: ThemedTextProps) {
  return (
    <Text
      className={cn(
        "text-main-text",
        type === "default" && "text-base leading-6",
        type === "defaultSemiBold" && "text-base leading-6 font-semibold",
        type === "title" && "text-4xl font-bold",
        type === "subtitle" && "text-xl font-bold",
        type === "link" && "text-base leading-[30px] text-main-link",
        className
      )}
      {...rest}
    />
  );
}
