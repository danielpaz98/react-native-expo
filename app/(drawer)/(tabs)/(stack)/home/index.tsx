import { View, SafeAreaView } from "react-native";
// PLUGINS
import { Link } from "expo-router";
// COMPONENTS
import { CustomButton } from "@/components/shared";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <View className="flex-col gap-2 px-10 mt-5">
        <Link href="/products" asChild>
          <CustomButton>Productos</CustomButton>
        </Link>

        <Link href="/profile" asChild>
          <CustomButton color="secondary">Perfil</CustomButton>
        </Link>

        <Link href="/settings" asChild>
          <CustomButton color="tertiary">Ajustes</CustomButton>
        </Link>
      </View>
    </SafeAreaView>
  );
}
