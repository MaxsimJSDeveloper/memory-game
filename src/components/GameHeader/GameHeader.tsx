import Button from "../../ui/Button/Button";
import Icon from "../../ui/Icon";
import GameTimer from "../GameTimer/GameTimer";
import Score from "../Score/Score";
import styles from "./GameHeader.module.css";

interface GameHeaderProps {
  score: number;
  isGameActive: boolean;
  isPreviewing: boolean;
  isWon: boolean;
  onSettingsClick: () => void;
}

const GameHeader = ({
  score,
  isGameActive,
  isPreviewing,
  isWon,
  onSettingsClick,
}: GameHeaderProps) => {
  return (
    <header className={styles.gameHeaderWrap}>
      <div className={styles.infoWrap}>
        <Score score={score} />
        <GameTimer
          isGameActive={isGameActive}
          isPreviewing={isPreviewing}
          isWon={isWon}
        />
      </div>
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
