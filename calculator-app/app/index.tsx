import { View } from "react-native";
// STYLES
import { calculatorStyles } from "@/styles/global";
// COMPONENTS
import { ThemeText, CalculatorButton } from "@/components";
// HOOKS
import { useCalculator } from "@/hooks";

export default function CalculatorApp() {
  const {
    formula,
    resultPreview,
    buildNumber,
    clean,
    toggleSign,
    deleteLast,
    addOperation,
    divideOperation,
    multiplyOperation,
    subtractOperation,
    calculateResult,
  } = useCalculator();

  return (
    <View style={calculatorStyles.container}>
      {/* Preview de la operación y resultado parcial */}
      <View style={{ paddingBottom: 20 }}>
        <ThemeText>{formula}</ThemeText>
        <ThemeText variant="h2">{resultPreview}</ThemeText>
      </View>

      {/* ROW 1 */}
      <View style={calculatorStyles.row}>
        <CalculatorButton color="lightGray" textColor="black" onPress={clean}>
          C
        </CalculatorButton>
        <CalculatorButton color="lightGray" textColor="black" onPress={toggleSign}>
          +/-
        </CalculatorButton>
        <CalculatorButton color="lightGray" textColor="black" onPress={deleteLast}>
          del
        </CalculatorButton>
        <CalculatorButton color="orange" onPress={divideOperation}>
          ÷
        </CalculatorButton>
      </View>

      {/* ROW 2 */}
      <View style={calculatorStyles.row}>
        <CalculatorButton color="darkGray" textColor="white" onPress={() => buildNumber("7")}>
          7
        </CalculatorButton>
        <CalculatorButton color="darkGray" textColor="white" onPress={() => buildNumber("8")}>
          8
        </CalculatorButton>
        <CalculatorButton color="darkGray" textColor="white" onPress={() => buildNumber("9")}>
          9
        </CalculatorButton>
        <CalculatorButton color="orange" textColor="white" onPress={multiplyOperation}>
          x
        </CalculatorButton>
      </View>

      {/* ROW 3 */}
      <View style={calculatorStyles.row}>
        <CalculatorButton color="darkGray" textColor="white" onPress={() => buildNumber("4")}>
          4
        </CalculatorButton>
        <CalculatorButton color="darkGray" textColor="white" onPress={() => buildNumber("5")}>
          5
        </CalculatorButton>
        <CalculatorButton color="darkGray" textColor="white" onPress={() => buildNumber("6")}>
          6
        </CalculatorButton>
        <CalculatorButton color="orange" textColor="white" onPress={subtractOperation}>
          -
        </CalculatorButton>
      </View>

      {/* ROW 4 */}
      <View style={calculatorStyles.row}>
        <CalculatorButton color="darkGray" textColor="white" onPress={() => buildNumber("1")}>
          1
        </CalculatorButton>
        <CalculatorButton color="darkGray" textColor="white" onPress={() => buildNumber("2")}>
          2
        </CalculatorButton>
        <CalculatorButton color="darkGray" textColor="white" onPress={() => buildNumber("3")}>
          3
        </CalculatorButton>
        <CalculatorButton color="orange" textColor="white" onPress={addOperation}>
          +
        </CalculatorButton>
      </View>

      {/* ROW 5 */}
      <View style={calculatorStyles.row}>
        <CalculatorButton wide color="darkGray" textColor="white" onPress={() => buildNumber("0")}>
          0
        </CalculatorButton>
        <CalculatorButton color="darkGray" textColor="white" onPress={() => buildNumber(".")}>
          .
        </CalculatorButton>
        <CalculatorButton color="orange" onPress={calculateResult}>
          =
        </CalculatorButton>
      </View>
    </View>
  );
}
