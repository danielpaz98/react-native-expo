import { SectionList } from "react-native";
// COMPONENTS
import { ThemedView, ThemedCard, ThemedText } from "@/components/shared";
// DATA
import { houses } from "./data";

export default function SectionListScreen() {
  return (
    <ThemedView className="mx-2.5">
      <ThemedCard className="">
        <SectionList
          keyExtractor={(item) => item}
          sections={houses}
          renderItem={({ item }) => <ThemedText>{item}</ThemedText>}
          ListHeaderComponent={
            <ThemedText size="h1" className="mb-3 font-bold">
              Personajes
            </ThemedText>
          }
          renderSectionHeader={({ section }) => (
            <ThemedText size="h2" className="p-2 rounded bg-light-background dark:bg-dark-background">
              {section.title}
            </ThemedText>
          )}
          stickySectionHeadersEnabled
          ListFooterComponent={
            <ThemedText
              size="h1"
              className="p-2 mb-10 font-bold rounded bg-light-background dark:bg-dark-background"
            >
              Secciones: {houses.length}
            </ThemedText>
          }
          showsVerticalScrollIndicator={false}
        />
      </ThemedCard>
    </ThemedView>
  );
}
