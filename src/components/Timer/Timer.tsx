import styles from "./Timer.module.css";

interface TimerProps {
  delay: number;
  disabled: boolean;
  changeDelay: (delay: number) => void;
}

const Timer = ({ delay, disabled, changeDelay }: TimerProps) => {
  return (
    <div className={styles.timerContainer}>
      <p>Card display time:</p>
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
        <p>Current delay: {delay} sec</p>
      </div>
    </div>
  );
};

export default Timer;
