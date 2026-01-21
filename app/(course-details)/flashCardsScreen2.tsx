import { useRef, useState } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import FlipCard, {
  FlipCardRef,
} from "@/components/screens/courses/flash-cards/AnimatedCard";
import { ThemedText } from "@/components/ui/basics/themed-text";
import ProgressBar from "@/components/ui/common/progress-bar";
import { courseTr, tCourse } from "@/i18n/courseLocal";
import { language } from "@/redux/features/ui/uiSlice";
import { formatNumber } from "@/utils/conversions";
import FeatherIcons from "@expo/vector-icons/Feather";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";

const CARDS = [
  { id: "1", front: "Hello", back: "হ্যালো" },
  { id: "2", front: "Thanks", back: "ধন্যবাদ" },
  { id: "3", front: "Yes", back: "হ্যাঁ" },
  { id: "4", front: "No", back: "না" },
  { id: "5", front: "Please", back: "দয়া করে" },
  { id: "6", front: "Sorry", back: "দুঃখিত" },
  { id: "7", front: "Good morning", back: "সুপ্রভাত" },
  { id: "8", front: "Good night", back: "শুভ রাত্রি" },
  { id: "9", front: "How are you?", back: "কেমন আছেন?" },
  { id: "10", front: "I love you", back: "আমি তোমাকে ভালোবাসি" },
];

const { width, height } = Dimensions.get("screen");

export default function FlashCardsScreen2() {
  const [index, setIndex] = useState(0);
  const [cardSide, setCardSide] = useState<"front" | "back">("front");
  const cardRef = useRef<FlipCardRef>(null);
  const appLanguage = useSelector(language);
  courseTr.locale = appLanguage;

  const handleSwiped = (direction: "left" | "right") => {
    setIndex((prev) => prev + 1);
  };

  const handleFlipped = (side: "front" | "back") => {
    setCardSide(side);
  };

  return (
    <SafeAreaView className="flex-1">
      <View className="px-5 flex-row items-center justify-between mb-3">
        <TouchableOpacity className="pr-2" onPress={() => router.back()}>
          <FeatherIcons size={22} name="x" color={"#4b5563"} />
        </TouchableOpacity>
        <ThemedText className="text-gray-600">
          {formatNumber(index + 1, appLanguage)}/
          {formatNumber(CARDS.length, appLanguage)}
        </ThemedText>
      </View>
      <View className="px-5">
        <ProgressBar percentage={((index + 1) / CARDS.length) * 100} />
      </View>

      {index >= CARDS.length ? (
        <Text>No more cards 🎉</Text>
      ) : (
        <View className="flex-1 items-center justify-center">
          {CARDS[index + 1] && (
            <View style={styles.nextCard}>
              <ThemedText style={styles.previewText}>
                {CARDS[index + 1].front}
              </ThemedText>
            </View>
          )}
          <FlipCard
            ref={cardRef}
            front={CARDS[index].front}
            back={CARDS[index].back}
            onSwiped={handleSwiped}
            onFlipped={handleFlipped}
          />
        </View>
      )}
      <View className="h-[90px] px-5 pb-5">
        {cardSide === "back" && (
          <View className="flex-row items-center justify-between px-1.5 gap-5">
            <TouchableOpacity
              onPress={() => {
                cardRef.current?.swipeLeft();
                setCardSide("front");
              }}
              className="bg-red-100 flex-1 py-3 rounded-lg items-center border border-red-200"
            >
              <ThemedText type="title" className="text-[16px] text-red-500">
                {tCourse("skip")}
              </ThemedText>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                cardRef.current?.swipeRight();
                setCardSide("front");
              }}
              className="bg-green-100 flex-1 py-4 rounded-lg items-center border border-green-200"
            >
              <ThemedText type="title" className="text-[16px] text-green-600">
                {tCourse("gotIt")}
              </ThemedText>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  nextCard: {
    position: "absolute",
    width: width - 48,
    height: height - 350,
    borderRadius: 16,
    backgroundColor: "#93C5FD",
    justifyContent: "center",
    alignItems: "center",
    transform: [{ scale: 0.95 }],
  },
  previewText: {
    color: "#fff",
    fontSize: 22,
    opacity: 0.8,
  },
});
