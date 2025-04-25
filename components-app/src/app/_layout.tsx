import { useEffect } from "react";
import { Text } from "react-native";
// GLOBAL STYLES
import "@/global.css";
// PLUGINS
import "react-native-reanimated";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
// COMPONENTS
import { ThemedView } from "@/components/shared";
// HOOKS
import { useColorScheme } from "@/hooks/useColorScheme";
import { useThemeColor } from "@/hooks/useThemeColor";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const backgroundColor = useThemeColor({}, "background");

  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) SplashScreen.hideAsync();
  }, [loaded]);

  if (!loaded) return null;

  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor }}>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <ThemedView>
          <Text className="text-3xl text-light-text dark:text-dark-text">Hello World</Text>
        </ThemedView>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
