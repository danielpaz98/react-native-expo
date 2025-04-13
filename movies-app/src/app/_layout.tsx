// PLUGINS
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// EXPO
import { Stack } from "expo-router";
// GLOBAL STYLES
import "@/global.css";

const queryClient = new QueryClient();

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <Stack screenOptions={{ headerShown: false }} />
    </QueryClientProvider>
  );
}
