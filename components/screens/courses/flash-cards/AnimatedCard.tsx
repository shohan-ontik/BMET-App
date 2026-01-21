import { ThemedText } from "@/components/ui/basics/themed-text";
import { tCourse } from "@/i18n/courseLocal";
import { forwardRef, useEffect, useImperativeHandle } from "react";
import { Dimensions, Pressable, StyleSheet, View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { runOnJS } from "react-native-worklets";

const SWIPE_THRESHOLD = 120;
const { width, height } = Dimensions.get("screen");

export type FlipCardRef = {
  swipeLeft: () => void;
  swipeRight: () => void;
};

interface FlipCardProps {
  front: string;
  back: string;
  onSwiped: (direction: "left" | "right") => void;
  onFlipped: (side: "front" | "back") => void;
}

const FlipCard = forwardRef<FlipCardRef, FlipCardProps>(
  ({ front, back, onSwiped, onFlipped }, ref) => {
    const rotateY = useSharedValue(0);
    const isFlipped = useSharedValue(false);
    const translateX = useSharedValue(0);

    const frontAnimatedStyle = useAnimatedStyle(() => ({
      transform: [{ rotateY: `${rotateY.value}deg` }],
    }));

    const backAnimatedStyle = useAnimatedStyle(() => ({
      transform: [{ rotateY: `${rotateY.value + 180}deg` }],
    }));

    const handleFlip = () => {
      rotateY.value = withTiming(isFlipped.value ? 0 : 180, {
        duration: 500,
      });
      isFlipped.value = !isFlipped.value;
      if (isFlipped.value) {
        onFlipped("front");
      } else {
        onFlipped("back");
      }
    };

    const handleSwipeRight = () => {
      "worklet";
      translateX.value = withTiming(500, {}, () => {
        runOnJS(onSwiped)("right");
      });
    };

    const handleSwipeLeft = () => {
      "worklet";
      translateX.value = withTiming(-500, {}, () => {
        runOnJS(onSwiped)("left");
      });
    };

    useImperativeHandle(ref, () => ({
      swipeLeft: () => handleSwipeLeft(),
      swipeRight: () => handleSwipeRight(),
    }));

    const panGesture = Gesture.Pan()
      .onUpdate((e) => {
        translateX.value = e.translationX;
      })
      .onEnd(() => {
        if (translateX.value > SWIPE_THRESHOLD) {
          handleSwipeRight();
        } else if (translateX.value < -SWIPE_THRESHOLD) {
          handleSwipeLeft();
        } else {
          translateX.value = withSpring(0);
        }
      });

    const swipeStyle = useAnimatedStyle(() => {
      const rotateZ = interpolate(
        translateX.value,
        [-300, 0, 300],
        [-12, 0, 12],
      );

      return {
        transform: [
          { translateX: translateX.value },
          { rotateZ: `${rotateZ}deg` },
        ],
      };
    });

    useEffect(() => {
      translateX.value = 0;
      rotateY.value = 0;
      isFlipped.value = false;
    }, [front]);

    return (
      <GestureDetector gesture={panGesture}>
        <Animated.View style={swipeStyle}>
          <Pressable onPress={handleFlip}>
            <View style={styles.container}>
              {/* Front */}
              <Animated.View
                style={[styles.card, styles.front, frontAnimatedStyle]}
              >
                <ThemedText type="title" style={styles.title}>
                  {front}
                </ThemedText>
                <ThemedText className="text-white/80 mt-2">
                  {tCourse("tapToFlip")}
                </ThemedText>
              </Animated.View>

              {/* Back */}
              <Animated.View
                style={[styles.card, styles.back, backAnimatedStyle]}
              >
                <ThemedText style={styles.title}>{back}</ThemedText>
              </Animated.View>
            </View>
          </Pressable>
        </Animated.View>
      </GestureDetector>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    width: width - 48,
    height: height - 350,
  },
  card: {
    position: "absolute",
    width: "100%",
    height: "100%",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    backfaceVisibility: "hidden",
  },
  front: {
    backgroundColor: "#1E4ED8",
  },
  back: {
    backgroundColor: "#0EA5E9",
  },
  title: {
    fontSize: 28,
    color: "#fff",
    fontWeight: "600",
  },
  subtitle: {
    fontSize: 14,
    color: "#E5E7EB",
    marginTop: 8,
  },
});

FlipCard.displayName = "FlipCard";

export default FlipCard;
