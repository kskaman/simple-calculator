import Calculator from "./components/Calculator";
import Header from "./components/Header";
import appStyles from "./styles/App.module.css";

const App = () => {
  return (
    <div className={appStyles.calculatorContainer}>
      <Header />
      <Calculator />
    </div>
  );
};

export default App;
