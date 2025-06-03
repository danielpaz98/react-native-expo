import { useEffect, useState, useCallback, createContext, use } from "react";
// PLUGINS
import AsyncStorage from "@react-native-async-storage/async-storage";
import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { useColorScheme as useNativeWindScheme } from "nativewind";

type ThemeOption = "light" | "dark" | "system";
const STORAGE_KEY = "colorScheme";

const isValidTheme = (value: unknown): value is ThemeOption =>
  value === "light" || value === "dark" || value === "system";

const getThemePreferenceFromStorage = async (): Promise<ThemeOption> => {
  const stored = await AsyncStorage.getItem(STORAGE_KEY);
  return isValidTheme(stored) ? stored : "system";
};

const useThemeState = () => {
  const { colorScheme, setColorScheme } = useNativeWindScheme();
  const [themePreference, setThemePreference] = useState<ThemeOption>("system");

  const isSystemTheme = themePreference === "system";
  const effectiveColorScheme = isSystemTheme ? colorScheme : themePreference;
  const isDarkMode = effectiveColorScheme === "dark";

  const toggleTheme = useCallback(async () => {
    const next: ThemeOption = isDarkMode ? "light" : "dark";

    setThemePreference(next);
    setColorScheme(next);

    await AsyncStorage.setItem(STORAGE_KEY, next);
  }, [isDarkMode, setColorScheme]);

  const setSystemTheme = useCallback(
    async (enable: boolean) => {
      const next: ThemeOption = enable ? "system" : "light";

      setThemePreference(next);
      setColorScheme(next);

      await AsyncStorage.setItem(STORAGE_KEY, next);
    },
    [setColorScheme],
  );

  useEffect(() => {
    getThemePreferenceFromStorage().then((initial) => {
      setThemePreference(initial);
      setColorScheme(initial);
    });
  }, [setColorScheme]);

  return {
    themePreference,
    isDarkMode,
    isSystemTheme,
    effectiveColorScheme,
    toggleTheme,
    setSystemTheme,
  };
};

const ThemeChangerContext = createContext<ReturnType<typeof useThemeState> | undefined>(undefined);

interface Props {
  children: React.ReactNode | ((value: ReturnType<typeof useThemeState>) => React.ReactNode);
}

const ThemeChangerProvider = ({ children }: Props) => {
  const value = useThemeState();

  return (
    <ThemeProvider value={value.effectiveColorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <ThemeChangerContext.Provider value={value}>
        {typeof children === "function" ? children(value) : children}
      </ThemeChangerContext.Provider>
    </ThemeProvider>
  );
};

const useThemeChangerContext = () => {
  const context = use(ThemeChangerContext);

  if (!context) throw new Error("useThemeChangerContext must be used within a ThemeChangerProvider");

  return context;
};

export { ThemeChangerProvider, useThemeChangerContext };
