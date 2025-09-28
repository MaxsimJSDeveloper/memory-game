import Store from "../../components/Store/Store";
import Timer from "../../components/Timer/Timer";
import SizeOfPlayField from "../SizeOfPlayField/SizeOfPlayField";
import styles from "./GameWrap.module.css";

interface GameWrapProps {
  fieldSize: (size: number) => void;
}

const GameWrap = ({ fieldSize }: GameWrapProps) => {
  return (
    <div className={styles.gameSettingsWrap}>
      <Store />
      <SizeOfPlayField createField={fieldSize} />
      <Timer />
    </div>
  );
};

export default GameWrap;
