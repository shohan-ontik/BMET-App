import { useSession } from "@/hooks/useSession";
import { Redirect } from "expo-router";
import { Stack } from "expo-router/stack";
import React from "react";

export default function Layout() {
  const { session } = useSession();

  if (session) {
    return <Redirect href="/(tabs)" />;
  }
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="index" />
    </Stack>
  );
}
