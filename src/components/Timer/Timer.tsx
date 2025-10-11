import TxtWrap from "../../ui/TxtWrap/TxtWrap";
import styles from "./Timer.module.css";

interface TimerProps {
  delay: number;
  disabled: boolean;
  changeDelay: (delay: number) => void;
}

const Timer = ({ delay, disabled, changeDelay }: TimerProps) => {
  return (
    <div className={styles.timerContainer}>
      <TxtWrap style={{ color: "#a0aec0" }}>Card display time:</TxtWrap>
      <div className={styles.timerInputWrap}>
        <input
          type="number"
          className={styles.timerInput}
          min={1}
          max={60}
          value={delay}
          onChange={(e) => changeDelay(Number(e.target.value))}
          disabled={disabled}
        />
        <TxtWrap>Current delay: {delay} sec</TxtWrap>
      </div>
    </div>
  );
};

export default Timer;
