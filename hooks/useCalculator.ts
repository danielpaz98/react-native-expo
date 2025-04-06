import { useCallback, useMemo, useState } from "react";

// Valid visual operators and their actual equivalents
const OPERATOR_MAP: Record<string, string> = {
  "+": "+",
  "-": "-",
  x: "*",
  "÷": "/",
};

// Returns the string with actual operators
const normalizeExpression = (expression: string): string => {
  return expression.replace(/[x÷]/g, (match) => OPERATOR_MAP[match] || match);
};

// Calculates the expression using eval with normalized operators
export const calculateExpression = (expression: string): number => {
  try {
    const result = eval(normalizeExpression(expression));
    return isNaN(result) ? 0 : result;
  } catch {
    return 0;
  }
};

export const useCalculator = () => {
  const [formula, setFormula] = useState("0");
  const [isResultFinal, setIsResultFinal] = useState(false);

  const currentResult = useMemo(() => calculateExpression(formula), [formula]);

  const buildNumber = useCallback(
    (num: string) => {
      if (isResultFinal) {
        setFormula(num === "." ? "0." : num);
        setIsResultFinal(false);
        return;
      }

      setFormula((prev) => {
        if (prev === "0") return num === "." ? "0." : num;
        if (num === "." && prev.endsWith(".")) return prev;
        return prev + num;
      });
    },
    [isResultFinal],
  );

  const addOperator = useCallback((op: keyof typeof OPERATOR_MAP) => {
    setFormula((prev) => {
      const lastChar = prev[prev.length - 1];
      const validOps = Object.keys(OPERATOR_MAP);

      if (validOps.includes(lastChar)) return prev.slice(0, -1) + op;

      return prev + op;
    });
    setIsResultFinal(false);
  }, []);

  const toggleSign = useCallback(() => {
    setFormula(`${-currentResult}`);
    setIsResultFinal(true);
  }, [currentResult]);

  const deleteLast = useCallback(() => {
    setFormula((prev) => {
      if (isResultFinal || prev.length === 1) return "0";
      return prev.slice(0, -1);
    });
  }, [isResultFinal]);

  const clean = useCallback(() => {
    setFormula("0");
    setIsResultFinal(false);
  }, []);

  const calculateResult = useCallback(() => {
    setFormula(`${currentResult}`);
    setIsResultFinal(true);
  }, [currentResult]);

  const resultPreview = useMemo(() => {
    return `${currentResult}`;
  }, [currentResult]);

  return {
    // PROPS
    formula,
    resultPreview,
    // METHODS
    clean,
    buildNumber,
    toggleSign,
    deleteLast,
    addOperation: () => addOperator("+"),
    subtractOperation: () => addOperator("-"),
    multiplyOperation: () => addOperator("x"),
    divideOperation: () => addOperator("÷"),
    calculateResult,
  };
};
