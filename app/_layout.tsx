import { useEffect } from "react";
// PLUGINS
import { SplashScreen, Slot } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useFonts } from "expo-font";
// GLOBAL STYLES
import "./global.css";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    "WorkSans-Black": require("../assets/fonts/WorkSans-Black.ttf"),
    "WorkSans-Light": require("../assets/fonts/WorkSans-Light.ttf"),
    "WorkSans-Medium": require("../assets/fonts/WorkSans-Medium.ttf"),
  });

  useEffect(() => {
    if (error) throw error;

    if (loaded) SplashScreen.hideAsync();
  }, [loaded]);

  if (!loaded && !error) return null;

  return (
    <GestureHandlerRootView className="flex-1">
      <Slot />
    </GestureHandlerRootView>
  );
}
