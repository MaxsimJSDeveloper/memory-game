import Button from "../../ui/Button/Button";
import TxtWrap from "../../ui/TxtWrap/TxtWrap";
import styles from "./GameControls.module.css";

interface GameControlsProps {
  isPlaying: boolean;
  onStart: () => void;
  onStop: () => void;
}

const GameControls = ({ isPlaying, onStart, onStop }: GameControlsProps) => {
  return (
    <div>
      <div className={styles.controlsWrap}>
        <Button onClick={onStart} type="button">
          {isPlaying ? "Play again" : "Play"}
        </Button>
        {isPlaying && (
          <Button onClick={onStop} type="button">
            Stop Game
          </Button>
        )}
      </div>
      {!isPlaying && <TxtWrap>Click the button to start playing</TxtWrap>}
    </div>
  );
};

export default GameControls;
