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
    <div className={styles.gameHeaderWrap}>
      <Score score={score} />
      <Button type="button" onClick={onSettingsClick}>
        <Icon id="icon-setting" />
      </Button>
    </div>
  );
};

export default GameHeader;
