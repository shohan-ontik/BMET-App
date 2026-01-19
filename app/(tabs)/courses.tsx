import LanguageCard from "@/components/screens/courses/languageCard";
import { ThemedText } from "@/components/ui/basics/themed-text";
import { languagesList } from "@/constants/courseData";
import { courseTr, tCourse } from "@/i18n/courseLocal";
import { language } from "@/redux/features/ui/uiSlice";
import React from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";

export default function Courses() {
  const appLanguage = useSelector(language);
  courseTr.locale = appLanguage;

  return (
    <SafeAreaView className="p-5">
      <ThemedText type="title" className="text-[26px]">
        {tCourse("catalog")}
      </ThemedText>
      <ThemedText type="medium" className="text-gray-500 mt-1">
        {tCourse("exploreLangs")}
      </ThemedText>
      <ScrollView className="mt-6" contentContainerStyle={{ gap: 12 }}>
        {languagesList?.map((language, index) => (
          <LanguageCard
            key={language.id}
            language={language}
            isCardOpen={index === 0}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
