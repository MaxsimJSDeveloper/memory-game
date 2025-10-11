import Icon from "../../ui/Icon";
import TxtWrap from "../../ui/TxtWrap/TxtWrap";
import styles from "./Score.module.css";

interface StoreProps {
  score: number;
}

const Score = ({ score }: StoreProps) => {
  return (
    <div className={styles.scoreWrap}>
      <Icon id="icon-star" fill="#f6e05e" stroke="#f6e05e" />
      <TxtWrap>{score}</TxtWrap>
    </div>
  );
};

export default Score;
