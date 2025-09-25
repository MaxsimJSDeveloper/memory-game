import { ReactNode } from "react";
import styles from "./EmojiCard.module.css";

interface EmojiCardProps {
  children: ReactNode;
}

const EmojiCard = ({ children }: EmojiCardProps) => {
  return (
    <li className={styles.card}>
      <div>{children}</div>
    </li>
  );
};

export default EmojiCard;
