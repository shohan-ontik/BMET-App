import { useSession } from "@/hooks/useSession";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { View } from "react-native";
import "react-native-reanimated";
import { setupTrackPlayer } from "../music-player/setup/trackPlayerSetup";

export default function AppContent() {
  const { session } = useSession();

  useEffect(() => {
    setupTrackPlayer();
  }, []);

  return (
    <View className="flex-1">
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="loginScreen" />
        <Stack.Protected guard={!!session}>
          <Stack.Screen name="(tabs)" />
        </Stack.Protected>
        <Stack.Protected guard={!!session}>
          <Stack.Screen name="(course-details)" />
        </Stack.Protected>
      </Stack>
      <StatusBar style="auto" />
    </View>
  );
}
