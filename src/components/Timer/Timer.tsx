import css from "./Timer.module.css";

interface TimerProps {
  delay: number;
  changeDellay: (delay: number) => void;
}

const Timer = ({ delay, changeDellay }: TimerProps) => {
  return (
    <div className={css.timerContainer}>
      <input
        type="number"
        className={css.timerInput}
        min={1}
        max={60}
        value={delay}
        onChange={(e) => changeDellay(Number(e.target.value))}
      />
      <p>Current delay: {delay} sec</p>
    </div>
  );
};

export default Timer;
