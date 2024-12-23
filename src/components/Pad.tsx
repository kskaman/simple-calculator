import padStyles from "../styles/Pad.module.css";

const Pad = () => {
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
        >
          {tag}
        </button>
      ))}

      <button className={`${padStyles.delResetButton} ${padStyles.spanTwo}`}>
        RESET
      </button>
      <button className={`${padStyles.resultButton} ${padStyles.spanTwo}`}>
        =
      </button>
    </div>
  );
};

export default Pad;
