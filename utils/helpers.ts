import { tHome } from "@/i18n/homeLocal";
import * as SecureStore from "expo-secure-store";

export async function saveSecureValue(key: string, value: string) {
  await SecureStore.setItemAsync(key, value);
}

export async function getSecureValue(key: string) {
  let result = await SecureStore.getItemAsync(key);
  return result;
}

export async function deleteSecureValue(key: string) {
  await SecureStore.deleteItemAsync(key);
}

export function getGreetingByTime(date: Date = new Date()): string {
  const hour = date.getHours();

  if (hour >= 5 && hour < 12) {
    return tHome("goodMorning");
  }

  if (hour >= 12 && hour < 17) {
    return tHome("goodNoon");
  }

  return tHome("goodEvening");
}
