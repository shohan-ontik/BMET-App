import FeatherIcons from "@expo/vector-icons/Feather";
import { ComponentProps } from "react";
import { OpaqueColorValue, StyleProp, TextStyle } from "react-native";

const MAPPING = {
  home: "home",
  "chevron.right": "chevron-right",
  person: "user",
  book: "book-open",
} satisfies Record<string, ComponentProps<typeof FeatherIcons>["name"]>;

type IconSymbolName = keyof typeof MAPPING;

export function IconSymbol({
  name,
  size = 24,
  color,
  style,
}: Readonly<{
  name: IconSymbolName;
  size?: number;
  color: string | OpaqueColorValue;
  style?: StyleProp<TextStyle>;
}>) {
  return (
    <FeatherIcons
      name={MAPPING[name]}
      size={size}
      color={color}
      style={style}
    />
  );
}
