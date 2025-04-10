import { View, Text, FlatList } from "react-native";
// PLUGINS
import { Link } from "expo-router";
// STORE
import { products } from "@/store/products";
// COMPONENTS
import { CustomButton } from "@/components/shared";

export default function ProductsScreen() {
  return (
    <View className="flex-1 px-4">
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className="mt-10">
            <Text className="text-2xl font-work-black">{item.title}</Text>
            <Text className="">{item.description}</Text>

            <View className="flex flex-row items-center justify-between">
              <Text className="text-xl font-work-black">$ {item.price}</Text>
              <Link href={`/products/${item.id}`} asChild>
                <CustomButton variant="text">Ver detalles</CustomButton>
              </Link>
            </View>
          </View>
        )}
      />
    </View>
  );
}
