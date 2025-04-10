import { View, Text } from "react-native";
// PLUGINS
import { Redirect, useLocalSearchParams, useNavigation } from "expo-router";
// STORE
import { products } from "@/store/products";
import { useEffect } from "react";

export default function ProductScreen() {
  const { id } = useLocalSearchParams();
  const navigation = useNavigation();

  const product = products.find((item) => item.id === id);

  useEffect(() => {
    navigation.setOptions({ title: product?.title ?? "Producto" });
  }, [product]);

  if (!product) return <Redirect href="/" />;

  return (
    <View>
      <Text className="text-2xl font-work-black">{product?.title}</Text>
      <Text className="">{product?.description}</Text>
      <Text className="text-xl font-work-black">$ {product?.price}</Text>
    </View>
  );
}
