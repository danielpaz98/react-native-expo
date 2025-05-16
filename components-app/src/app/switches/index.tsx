import { useState } from "react";
// COMPONENTS
import { ThemedView, ThemedCard, ThemedSwitch } from "@/components/shared";

export default function SwitchesScreen() {
  const [state, setState] = useState({ isActive: true, isHungry: false, isHappy: true });

  return (
    <ThemedView className="m-2.5 flex-1">
      <ThemedCard>
        <ThemedSwitch
          text="Activo"
          value={state.isActive}
          onValueChange={(isActive) => setState({ ...state, isActive })}
        />

        <ThemedSwitch
          text="Hambriento"
          value={state.isHungry}
          onValueChange={(isHungry) => setState({ ...state, isHungry })}
        />

        <ThemedSwitch
          text="Feliz"
          value={state.isHappy}
          onValueChange={(isHappy) => setState({ ...state, isHappy })}
        />
      </ThemedCard>
    </ThemedView>
  );
}
