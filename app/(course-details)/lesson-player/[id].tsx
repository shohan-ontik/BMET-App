import ThemedButton from "@/components/ui/basics/themed-button";
import CommonSheet from "@/components/ui/bottom-sheet/CommonSheet";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useLocalSearchParams } from "expo-router";
import React, { useRef } from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LessonPlayer() {
  const { id } = useLocalSearchParams();
  const bottomsheetRef = useRef<BottomSheetModal>(null);

  return (
    <SafeAreaView>
      <Text>[{id}]</Text>
      <ThemedButton onPress={() => bottomsheetRef?.current?.present()}>
        Click
      </ThemedButton>
      <CommonSheet bottomSheetRef={bottomsheetRef} snapPoints={["30%"]}>
        <Text>Hello </Text>
      </CommonSheet>
    </SafeAreaView>
  );
}
