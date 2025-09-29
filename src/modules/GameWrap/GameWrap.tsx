import Store from "../../components/Store/Store";
import Timer from "../../components/Timer/Timer";
import SizeOfPlayField from "../SizeOfPlayField/SizeOfPlayField";
import styles from "./GameWrap.module.css";

interface GameWrapProps {
  fieldSize: (size: number) => void;
  delay: number;
  changeDellay: (delay: number) => void;
}

const GameWrap = ({ fieldSize, changeDellay, delay }: GameWrapProps) => {
  return (
    <div className={styles.gameSettingsWrap}>
      <Store />
      <SizeOfPlayField createField={fieldSize} />
      <Timer changeDellay={changeDellay} delay={delay} />
    </div>
  );
};

export default GameWrap;
