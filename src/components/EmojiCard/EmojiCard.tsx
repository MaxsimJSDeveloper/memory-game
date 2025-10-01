import styles from "./EmojiCard.module.css";
import { Card } from "../../ts/types";
import React from "react";

interface EmojiCardProps {
  card: Card | null;
  handleClick: (id: string) => void;
}

const EmojiCard = React.memo(({ card, handleClick }: EmojiCardProps) => {
  const isClickable = card && !card.isOpen && !card.isMatched;

  return (
    <li
      className={`${styles.card} ${card?.isMatched ? styles.matched : ""}`}
      onClick={() => isClickable && handleClick(card.id)}
    >
      {card ? (
        <p>{card.isOpen || card.isMatched ? card.character : "❓"}</p>
      ) : null}
    </li>
  );
});

export default EmojiCard;
