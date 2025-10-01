import css from "./Timer.module.css";

interface TimerProps {
  delay: number;
  disabled: boolean;
  changeDelay: (delay: number) => void;
}

const Timer = ({ delay, disabled, changeDelay }: TimerProps) => {
  return (
    <div className={css.timerContainer}>
      <input
        type="number"
        className={css.timerInput}
        min={1}
        max={60}
        value={delay}
        onChange={(e) => changeDelay(Number(e.target.value))}
        disabled={disabled}
      />
      <p>Current delay: {delay} sec</p>
    </div>
  );
};

export default Timer;
