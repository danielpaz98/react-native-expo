import { useState } from "react";
import { View, ScrollView, KeyboardAvoidingView, Platform } from "react-native";
// COMPONENTS
import { ThemedView, ThemedCard, ThemedTextInput, ThemedText } from "@/components/shared";

const isIOS = Platform.OS === "ios";

export default function TextInputsScreen() {
  const [form, setForm] = useState({ name: "", email: "", phoneNumber: "" });

  const handleOnChangeText = (value: Partial<typeof form>) => {
    setForm((curr) => ({ ...curr, ...value }));
  };

  return (
    <KeyboardAvoidingView behavior={isIOS ? "height" : undefined} style={{ flex: 1 }}>
      <ScrollView>
        <ThemedView className="m-2.5">
          <View className="gap-2 mb-5">
            <ThemedTextInput
              placeholder="Nombre completo:"
              autoCapitalize="words"
              autoCorrect={false}
              value={form.name}
              onChangeText={(value) => handleOnChangeText({ name: value })}
            />

            <ThemedTextInput
              placeholder="Correo electrónico:"
              autoCorrect={false}
              keyboardType="email-address"
              value={form.email}
              onChangeText={(value) => handleOnChangeText({ email: value })}
            />

            <ThemedTextInput
              placeholder="Número de teléfono:"
              autoCorrect={false}
              keyboardType="phone-pad"
              value={form.phoneNumber}
              onChangeText={(value) => handleOnChangeText({ phoneNumber: value })}
            />
          </View>

          <ThemedCard className="my-2">
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedCard>
        </ThemedView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
