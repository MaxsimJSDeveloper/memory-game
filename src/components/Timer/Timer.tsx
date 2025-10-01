import css from "./Timer.module.css";

interface TimerProps {
  delay: number;
  changeDelay: (delay: number) => void;
}

const Timer = ({ delay, changeDelay }: TimerProps) => {
  return (
    <div className={css.timerContainer}>
      <input
        type="number"
        className={css.timerInput}
        min={1}
        max={60}
        value={delay}
        onChange={(e) => changeDelay(Number(e.target.value))}
      />
      <p>Current delay: {delay} sec</p>
    </div>
  );
};

export default Timer;
