import padStyles from "../styles/Pad.module.css";

interface Props {
  onUserInput: (input: string) => void;
}

const Pad = ({ onUserInput }: Props) => {
  const padButtonsTags = [
    "7",
    "8",
    "9",
    "DEL",
    "4",
    "5",
    "6",
    "+",
    "1",
    "2",
    "3",
    "-",
    ".",
    "0",
    "/",
    "x",
  ];

  return (
    <div className={padStyles.pad}>
      {padButtonsTags.map((tag) => (
        <button
          key={tag}
          className={
            tag === "DEL" ? padStyles.delResetButton : padStyles.inputButton
          }
          onClick={() => onUserInput(tag)}
        >
          {tag}
        </button>
      ))}

      <button
        className={`${padStyles.delResetButton} ${padStyles.spanTwo}`}
        onClick={() => onUserInput("RESET")}
      >
        RESET
      </button>
      <button
        className={`${padStyles.resultButton} ${padStyles.spanTwo}`}
        onClick={() => onUserInput("=")}
      >
        =
      </button>
    </div>
  );
};

export default Pad;
