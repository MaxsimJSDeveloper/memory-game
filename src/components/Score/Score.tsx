import Icon from "../../ui/Icon";
import styles from "./Score.module.css";

interface StoreProps {
  score: number;
}

const Score = ({ score }: StoreProps) => {
  return (
    <div className={styles.scoreWrap}>
      <Icon id="icon-star" fill="#fafafa" stroke="#fafafa" />
      <p>{score}</p>
    </div>
  );
};

export default Score;
