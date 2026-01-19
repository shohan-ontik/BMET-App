import { cn } from "@/utils/cn";
import { Text, type TextProps } from "react-native";

export type ThemedTextProps = TextProps & {
  type?:
    | "default"
    | "medium"
    | "title"
    | "defaultSemiBold"
    | "subtitle"
    | "link";
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
        type === "default" && "text-[16px] font-NotoSansRegular",
        type === "medium" && "text-[16px] font-NotoSansMedium",
        type === "defaultSemiBold" && "text-[16px] font-NotoSansSemiBold",
        type === "title" && "text-[32px] font-NotoSansBold",
        type === "subtitle" && "text-[20px] font-NotoSansSemiBold",
        type === "link" && "text-[16px] text-main-link font-NotoSansRegular",
        className,
      )}
      {...rest}
    />
  );
}
