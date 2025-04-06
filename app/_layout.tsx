import { View, Platform } from "react-native";
// PLUGINS
import { useFonts } from "expo-font";
import * as NavigationBar from "expo-navigation-bar";
// COMPONENTS
import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
// STYLES
import { globalStyles } from "@/styles/global";

const isAndroid = Platform.OS === "android";

if (isAndroid) NavigationBar.setBackgroundColorAsync("black");

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  if (!loaded) return null;

  return (
    <View style={globalStyles.container}>
      <Slot />

      <StatusBar style="auto" />
    </View>
  );
}
