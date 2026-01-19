import { HapticTab } from "@/components/navigation/haptic-tab";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { Colors } from "@/constants/theme";
import { navigationTr, tNavigation } from "@/i18n/navigation";
import { language } from "@/redux/features/ui/uiSlice";
import { Tabs } from "expo-router";
import React from "react";
import { useSelector } from "react-redux";

export default function TabLayout() {
  const appLanguage = useSelector(language);
  navigationTr.locale = appLanguage;

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.light.tabIconSelected,
        headerShown: false,
        tabBarButton: HapticTab,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: tNavigation("home"),
          tabBarIcon: ({ color }) => (
            <IconSymbol size={24} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="courses"
        options={{
          title: tNavigation("courses"),
          tabBarIcon: ({ color }) => (
            <IconSymbol size={24} name="book" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: tNavigation("profile"),
          tabBarIcon: ({ color }) => (
            <IconSymbol size={24} name="person" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
