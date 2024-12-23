import calculatorStyles from "../styles/Calculator.module.css";
import Pad from "./Pad";

const Calculator = () => {
  return (
    <div className={calculatorStyles.calculatorDiv}>
      <div className={calculatorStyles.screen}>
        <input placeholder="0" readOnly />
      </div>

      <Pad />
    </div>
  );
};

export default Calculator;
