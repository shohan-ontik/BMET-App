import { ReactNode, useEffect, useRef } from "react";
import { Animated, ViewStyle } from "react-native";

type AccordionTriggerProps = {
  children: ReactNode;
  showAccordion: boolean;
  style?: ViewStyle;
};

export default function AccordionTrigger({
  children,
  showAccordion,
  style,
}: Readonly<AccordionTriggerProps>) {
  const rotateAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(rotateAnim, {
      toValue: showAccordion ? 1 : 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [showAccordion, rotateAnim]);

  const rotation = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "180deg"],
  });

  return (
    <Animated.View
      style={{
        transform: [{ rotate: rotation }],
        ...style,
      }}
    >
      {children}
    </Animated.View>
  );
}
