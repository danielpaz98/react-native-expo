import { useEffect } from "react";
// PLUGINS
import "react-native-reanimated";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { GestureHandlerRootView } from "react-native-gesture-handler";
// CONSTANTS
import { allRoutes } from "@/constants/Routes";
// HOOKS
import { useThemeColor } from "@/hooks/useThemeColor";
// CONTEXTS
import { ThemeChangerProvider } from "@/contexts/ThemeChangerContext";
// GLOBAL STYLES
import "@/global.css";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const backgroundColor = useThemeColor({}, "background");

  const [loaded] = useFonts({
    SpaceMono: require("@/assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) SplashScreen.hideAsync();
  }, [loaded]);

  if (!loaded) return null;

  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor }}>
      <ThemeChangerProvider>
        <Stack
          screenOptions={{
            headerShadowVisible: false,
            contentStyle: { backgroundColor },
            headerStyle: { backgroundColor },
          }}
        >
          <Stack.Screen name="index" options={{ title: "" }} />

          {allRoutes.map(({ name, title }) => (
            <Stack.Screen
              key={name}
              name={name}
              options={{ title, headerShown: !title.includes("Slides") }}
            />
          ))}
        </Stack>
      </ThemeChangerProvider>
    </GestureHandlerRootView>
  );
}
