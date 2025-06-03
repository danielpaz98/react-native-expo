// COMPONENTS
import { ThemedView, ThemedCard, ThemedSwitch } from "@/components/shared";
// HOOKS
import { useThemeChangerContext } from "@/contexts/ThemeChangerContext";

export default function ThemesScreen() {
  const { isDarkMode, isSystemTheme, toggleTheme, setSystemTheme } = useThemeChangerContext();

  return (
    <ThemedView className="m-2.5">
      <ThemedCard>
        <ThemedSwitch
          className="border-b-2 border-b-gray-200/50 dark:border-b-gray-800/50"
          text="Dark Mode"
          value={isDarkMode}
          onValueChange={toggleTheme}
          disabled={isSystemTheme}
        />
        <ThemedSwitch text="System Mode" value={isSystemTheme} onValueChange={setSystemTheme} />
      </ThemedCard>
    </ThemedView>
  );
}
