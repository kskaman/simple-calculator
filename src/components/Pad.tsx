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

  const keyToPadTag: Record<string, string> = {
    Backspace: "DEL",
    "+": "+",
    "-": "-",
    "/": "/",
    "*": "x",
    ".": ".",
    "0": "0",
    "1": "1",
    "2": "2",
    "3": "3",
    "4": "4",
    "5": "5",
    "6": "6",
    "7": "7",
    "8": "8",
    "9": "9",
    // We'll handle Enter, =, and Escape separately
  };

  // Keydown handler on the container <div>
  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const { key } = event;

    if (keyToPadTag[key]) {
      onUserInput(keyToPadTag[key]);
    } else if (key === "Enter" || key === "=") {
      onUserInput("=");
    } else if (key === "Escape") {
      onUserInput("RESET");
    }
  };

  return (
    // We add tabIndex={0} so this div can receive focus and key events
    <div className={padStyles.pad} tabIndex={0} onKeyDown={handleKeyDown}>
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
