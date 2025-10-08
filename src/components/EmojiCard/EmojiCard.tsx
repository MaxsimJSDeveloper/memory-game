import styles from "./EmojiCard.module.css";
import { Card } from "../../ts/types";
import React from "react";
import { useSpring, a } from "@react-spring/web";

interface EmojiCardProps {
  card: Card | null;
  handleClick: (id: string) => void;
  index: number;
}

const EmojiCard = React.memo(({ card, index, handleClick }: EmojiCardProps) => {
  const isFlipped = !!card && (card.isOpen || card.isMatched);

  const { transform, opacity } = useSpring({
    opacity: isFlipped ? 1 : 0,
    transform: `perspective(600px) rotateY(${
      card && (card.isOpen || card.isMatched) ? 180 : 0
    }deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  if (card === null) {
    return <li className={`${styles.card}`} aria-hidden="true"></li>;
  }

  const isClickable = !card.isOpen && !card.isMatched;

  let ariaLabel = `Card ${index + 1}. `;
  if (isFlipped) {
    ariaLabel += `${card.character}. Matched.`;
  } else {
    ariaLabel += `Face down.`;
  }

  return (
    <li
      className={`${styles.card} ${card.isMatched ? styles.matched : ""}`}
      onClick={() => isClickable && handleClick(card.id)}
      aria-label={ariaLabel}
      role="button"
    >
      <a.div
        className={styles.cardFace}
        style={{
          opacity: opacity.to((o) => 1 - o),
          transform,
        }}
        aria-hidden="true"
      >
        ❓
      </a.div>
      <a.div
        className={styles.cardFace}
        style={{
          opacity,
          transform,
          rotateY: "180deg",
        }}
        aria-hidden="true"
      >
        {card.character}
      </a.div>
    </li>
  );
});

export default EmojiCard;
