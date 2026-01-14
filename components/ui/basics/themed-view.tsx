import { cn } from "@/utils/cn";
import { View, type ViewProps } from "react-native";

export type ThemedViewProps = ViewProps & {
  className?: string;
};

export function ThemedView({ className, ...otherProps }: ThemedViewProps) {
  return (
    <View className={cn("bg-main-background", className)} {...otherProps} />
  );
}
