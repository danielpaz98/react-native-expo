// PLUGINS
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// EXPO
import { Stack } from "expo-router";
// NATIVE
import { GestureHandlerRootView } from "react-native-gesture-handler";
// GLOBAL STYLES
import "@/global.css";

const queryClient = new QueryClient();

export default function RootLayout() {
  return (
    <GestureHandlerRootView>
      <QueryClientProvider client={queryClient}>
        <Stack screenOptions={{ headerTitle: "Movies App" }} />
      </QueryClientProvider>
    </GestureHandlerRootView>
  );
}
