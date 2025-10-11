import Button from "../../ui/Button/Button";
import Icon from "../../ui/Icon";
import Score from "../Score/Score";
import styles from "./GameHeader.module.css";

interface GameHeaderProps {
  score: number;
  onSettingsClick: () => void;
}

const GameHeader = ({ score, onSettingsClick }: GameHeaderProps) => {
  return (
    <header className={styles.gameHeaderWrap}>
      <Score score={score} />
      <Button
        type="button"
        onClick={onSettingsClick}
        className={styles.settingBtn}
      >
        <Icon id="icon-setting" fill="#edf2f7" />
      </Button>
    </header>
  );
};

export default GameHeader;
