import { ThemedText } from "@/components/ui/basics/themed-text";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Courses() {
  return (
    <SafeAreaView className="p-5">
      <ThemedText type="title" className="text-[26px]">
        Course Catalog
      </ThemedText>
      <ThemedText type="medium" className="text-gray-500 mt-1">
        Explore available language tracks
      </ThemedText>
    </SafeAreaView>
  );
}
