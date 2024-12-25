import { useState } from "react";

import calculatorStyles from "../styles/Calculator.module.css";
import Pad from "./Pad";

const Calculator = () => {
  const [display, setDisplay] = useState<string>("");

  // Format numbers with commas
  const formatNumber = (number: string) => {
    // Split the input by non-digit characters to format only the numbers

    return number
      .replace(/,/g, "")
      .replace(/(\d+)(?=\.\d+|\b)/g, (match) =>
        Number(match).toLocaleString("en-US")
      );
  };

  const getResult = (expression: string) => {
    // Replace "x" with "*" for multiplication and evaluate
    const expr = expression.replace(/x/g, "*").replace(/,/g, "");
    return formatNumber(eval(expr).toString());
  };

  const isDigit = (value: string) => /^[0-9]$/.test(value);

  const isOperator = (value: string) => ["+", "-", "/", "x"].includes(value);

  const handleUserInput = (input: string) => {
    const lastChar = display[display.length - 1];
    const secondLastChar = display[display.length - 2];

    // Handle Reset
    if (input === "RESET") {
      setDisplay("");
      return;
    }

    // Handle DEL
    if (input === "DEL") {
      if (display.length > 0) {
        if (lastChar === " " && isOperator(secondLastChar)) {
          // Remove operator and its preceding space (e.g., "7 + " => "7")
          setDisplay(formatNumber(display.slice(0, -3)));
        } else {
          // Remove the last character
          setDisplay(formatNumber(display.slice(0, -1)));
        }
      }
      return;
    }

    // 3. Handle digits
    if (isDigit(input)) {
      // Append the digit to the display
      setDisplay(formatNumber(display + input));
      return;
    }

    // 4. Handle operators
    if (isOperator(input)) {
      if (isDigit(lastChar)) {
        if (
          ["+", "-", "/", "x"].some((operator) => display.includes(operator))
        ) {
          const result = getResult(display);
          setDisplay(result.concat(` ${input} `));
        } else {
          setDisplay(display.concat(` ${input} `));
        }
      } else if (isOperator(secondLastChar)) {
        setDisplay(display.slice(0, -3) + ` ${input}`);
      }
    }

    // 5. Handle "="
    if (input === "=") {
      if (isDigit(lastChar)) {
        const result = getResult(display);
        setDisplay(result);
      }
      return;
    }
  };

  return (
    <div className={calculatorStyles.calculatorDiv}>
      <div className={calculatorStyles.screen}>
        <input value={display} placeholder="0" readOnly />
      </div>

      <Pad onUserInput={handleUserInput} />
    </div>
  );
};

export default Calculator;
