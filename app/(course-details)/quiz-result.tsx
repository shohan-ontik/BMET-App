import ThemedButton from "@/components/ui/basics/themed-button";
import { ThemedText } from "@/components/ui/basics/themed-text";
import { ThemedView } from "@/components/ui/basics/themed-view";
import { quizResultTr, tQuizResult } from "@/i18n/quizResultLocal";
import { language } from "@/redux/features/ui/uiSlice";
import AntDesign from '@expo/vector-icons/AntDesign';
import { router, useLocalSearchParams } from "expo-router";
import React from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";

export default function QuizResult() {
  const { score, total } = useLocalSearchParams();
  const appLanguage = useSelector(language);
  quizResultTr.locale = appLanguage;

  const scoreValue = parseInt(score as string) || 0;
  const totalValue = parseInt(total as string) || 0;
  const percentage = totalValue > 0 ? (scoreValue / totalValue) * 100 : 0;

  const handleBackToCourse = () => {
    router.back();
  };

  const handlePracticeAgain = () => {
    router.back();
    // You can add additional logic here to reset the quiz
  };

  return (
    <ThemedView className="flex-1 items-center justify-center px-6">
      {/* Success Icon */}
      <View className="mb-6 h-20 w-20 items-center justify-center rounded-full bg-green-200">
          <AntDesign name="check" size={24} color="green" />
      </View>

      {/* Title */}
      <ThemedText className="mb-2 text-2xl font-semibold text-gray-800">
        {tQuizResult("quizResult").pass}
      </ThemedText>

      {/* Score */}
      <ThemedText className="mb-12 text-base text-gray-500">
        {tQuizResult("quizResult").score} {scoreValue}/{totalValue}
      </ThemedText>

      {/* Action Buttons */}
      <View className="w-full gap-4">
        <ThemedButton
          onPress={handleBackToCourse}
          className="w-full rounded-xl bg-blue-600 py-4"
        >
          <ThemedText type="medium" className="text-center text-[14px] text-white">
            {tQuizResult("quizResult").backToCourse}
          </ThemedText>
        </ThemedButton>

        <ThemedButton
          onPress={handlePracticeAgain}
          variant="ghost"
          className="w-full py-4"
        >
          <ThemedText type="medium" className="text-center text-blue-600">
            {tQuizResult("quizResult").practiceAgain}
          </ThemedText>
        </ThemedButton>
      </View>
    </ThemedView>
  );
}
