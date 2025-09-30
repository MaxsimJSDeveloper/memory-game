import styles from "./EmojiCard.module.css";
import { Card } from "../../ts/types";
import React from "react";

interface EmojiCardProps {
  card: Card | null;
}

const EmojiCard = React.memo(({ card }: EmojiCardProps) => {
  return (
    <li className={styles.card}>{card ? <p>{card.character}</p> : null}</li>
  );
});

export default EmojiCard;
