import React, {
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { Animated, Easing, LayoutChangeEvent, View } from "react-native";

type AccordionItemProps = {
  children: ReactNode;
  showAccordion: boolean;
};
export default function AccordionItem({
  children,
  showAccordion,
}: Readonly<AccordionItemProps>) {
  const [contentHeight, setContentHeight] = useState(0);
  const hasInitialHeight = useRef(false);
  const animatedHeight = useRef(new Animated.Value(0)).current;

  const handleLayout = useCallback(
    (event: LayoutChangeEvent) => {
      const height = event.nativeEvent.layout.height;
      if (!hasInitialHeight.current || Math.abs(height - contentHeight) > 1) {
        setContentHeight(height);
        hasInitialHeight.current = true;
      }
    },
    [contentHeight],
  );

  useEffect(() => {
    Animated.timing(animatedHeight, {
      toValue: showAccordion ? contentHeight : 0,
      duration: 200,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start();
  }, [showAccordion, contentHeight, animatedHeight]);

  return (
    <Animated.View style={[{ height: animatedHeight, overflow: "hidden" }]}>
      <View
        className="absolute top-0 left-0 right-0"
        onLayout={(event) => handleLayout(event)}
      >
        {children}
      </View>
    </Animated.View>
  );
}
