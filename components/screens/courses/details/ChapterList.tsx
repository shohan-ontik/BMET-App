import { chapterListData } from "@/constants/courseData";
import React from "react";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import ChapterCard from "./ChapterCard";

export default function ChapterList() {
  return (
    <View className="px-4">
      <ScrollView className="bg-white rounded-3xl border-[1.5px] border-gray-200">
        {chapterListData.map((chapter, index) => (
          <ChapterCard
            key={chapter.id}
            chapter={chapter}
            isChapterOpen={index === 0}
          />
        ))}
      </ScrollView>
    </View>
  );
}
