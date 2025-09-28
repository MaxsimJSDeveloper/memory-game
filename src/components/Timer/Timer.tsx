import css from "./Timer.module.css";

const Timer = () => {
  return (
    <div className={css.timerContainer}>
      <input type="text" className={css.timerInput} />
    </div>
  );
};

export default Timer;
