import AccordionItem from "@/components/ui/accordion/AccordionItem";
import AccordionTrigger from "@/components/ui/accordion/AccordionTrigger";
import { ThemedText } from "@/components/ui/basics/themed-text";
import { tCourse } from "@/i18n/courseLocal";
import { language } from "@/redux/features/ui/uiSlice";
import { formatNumber } from "@/utils/conversions";
import FeatherIcons from "@expo/vector-icons/Feather";
import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";
import LessonCard from "./LessonCard";
type LessonItem = {
  id: number;
  type: "lesson" | "quiz";
  title?: string;
  duration?: string;
  isLocked: boolean;
};

type Chapter = {
  id: number;
  chapter: number;
  title: string;
  lessonList: LessonItem[];
};

export default function ChapterCard({
  chapter,
  isChapterOpen = false,
}: Readonly<{ chapter: Chapter; isChapterOpen: boolean }>) {
  const [isOpen, setIsOpen] = useState(isChapterOpen);
  const appLanguage = useSelector(language);

  return (
    <TouchableOpacity
      className={`rounded-xl ${isOpen ? "" : "pb-4"}`}
      onPress={() => setIsOpen(!isOpen)}
    >
      <View className="flex-row items-center justify-between p-4 pb-0">
        <View className="flex-row items-center gap-4">
          <View
            className={`bg-blue-100 h-9 w-9 items-center justify-center rounded-full`}
          >
            <ThemedText type="defaultSemiBold" className="text-blue-700">
              {formatNumber(chapter?.chapter, appLanguage)}
            </ThemedText>
          </View>
          <View>
            <ThemedText type="defaultSemiBold">
              {tCourse("chapter")} {formatNumber(chapter?.chapter, appLanguage)}
              : {chapter.title}
            </ThemedText>
          </View>
        </View>
        <AccordionTrigger showAccordion={isOpen}>
          <FeatherIcons size={18} name="chevron-down" color="#6b7280" />
        </AccordionTrigger>
      </View>
      <AccordionItem showAccordion={isOpen}>
        <View className="pt-4">
          {chapter.lessonList.map((lesson) => (
            <LessonCard
              key={lesson.id}
              type={lesson.type}
              title={lesson.title}
              duration={lesson.duration}
              isLocked={lesson.isLocked}
            />
          ))}
        </View>
      </AccordionItem>
    </TouchableOpacity>
  );
}
