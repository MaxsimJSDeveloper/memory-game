import Timer from "../../components/Timer/Timer";
import SizeOfPlayField from "../SizeOfPlayField/SizeOfPlayField";
import styles from "./GameSettings.module.css";

interface GameSettingsProps {
  fieldSize: (size: number) => void;
  changeDelay: (delay: number) => void;
  delay: number;
  disabled: boolean;
}

const GameSettings = ({
  fieldSize,
  changeDelay,
  delay,
  disabled,
}: GameSettingsProps) => {
  return (
    <div className={styles.gameSettingsWrap}>
      <SizeOfPlayField createField={fieldSize} disabled={disabled} />
      <Timer changeDelay={changeDelay} delay={delay} disabled={disabled} />
    </div>
  );
};

export default GameSettings;
