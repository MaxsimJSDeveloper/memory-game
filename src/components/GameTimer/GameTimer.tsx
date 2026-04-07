import { useState, useEffect } from "react";
import TxtWrap from "../../ui/TxtWrap/TxtWrap";
import { formatTime } from "../../utils/helpers/formatTime";
import styles from "./GameTimer.module.css";
import Icon from "../../ui/Icon";

interface GameTimerProps {
  isGameActive: boolean;
  isPreviewing: boolean;
  isWon: boolean;
}

const GameTimer = ({ isGameActive, isPreviewing, isWon }: GameTimerProps) => {
  const [time, setTime] = useState<number>(0);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;

    if (!isGameActive) {
      const resetTimeout = setTimeout(() => setTime(0), 0);
      return () => clearTimeout(resetTimeout);
    }

    const isRunning = isGameActive && !isPreviewing && !isWon;

    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isGameActive, isPreviewing, isWon]);
  return (
    <div className={styles.timer}>
      <Icon id="icon-timer" fill="#a0aec0" stroke="#a0aec0" />
      <TxtWrap>{formatTime(time)}</TxtWrap>
    </div>
  );
};

export default GameTimer;
