import AppContent from "@/components/navigation/app-content";
import { persistor, store } from "@/redux/store";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { useFonts } from "expo-font";
import { SplashScreen } from "expo-router";
import { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "react-native-reanimated";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import "../global.css";

export default function RootLayout() {
  const [loaded, error] = useFonts({
    NotoSansRegular: require("../assets/fonts/NotoSansBengali-Regular.ttf"),
    NotoSansMedium: require("../assets/fonts/NotoSansBengali-Medium.ttf"),
    NotoSansSemiBold: require("../assets/fonts/NotoSansBengali-SemiBold.ttf"),
    NotoSansBold: require("../assets/fonts/NotoSansBengali-Bold.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  return (
    <GestureHandlerRootView>
      <SafeAreaProvider>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <BottomSheetModalProvider>
              <AppContent />
            </BottomSheetModalProvider>
          </PersistGate>
        </Provider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
