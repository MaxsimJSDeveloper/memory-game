import Store from "../../components/Store/Store";
import Timer from "../../components/Timer/Timer";
import SizeOfPlayField from "../SizeOfPlayField/SizeOfPlayField";
import styles from "./GameWrap.module.css";

interface GameWrapProps {
  fieldSize: (size: number) => void;
  changeDelay: (delay: number) => void;
  delay: number;
  disabled: boolean;
  score: number;
}

const GameWrap = ({
  fieldSize,
  changeDelay,
  delay,
  disabled,
  score,
}: GameWrapProps) => {
  return (
    <div className={styles.gameSettingsWrap}>
      <Store score={score} />
      <SizeOfPlayField createField={fieldSize} disabled={disabled} />
      <Timer changeDelay={changeDelay} delay={delay} disabled={disabled} />
    </div>
  );
};

export default GameWrap;
