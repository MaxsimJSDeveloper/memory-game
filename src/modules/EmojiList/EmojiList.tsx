import EmojiCard from "../../components/EmojiCard/EmojiCard";
import { Card } from "../../ts/types";
import styles from "./EmojiList.module.css";

interface EmojiListProps {
  emojis: Card[];
  fieldSize: number;
  handleClick: (id: string) => void;
}

const EmojiList = ({ emojis, fieldSize, handleClick }: EmojiListProps) => {
  const columns = Math.sqrt(fieldSize);

  return (
    <ul
      className={styles.emojiList}
      style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
    >
      {emojis.map((card, index) => (
        <EmojiCard
          key={card.id}
          card={card}
          handleClick={handleClick}
          index={index}
        />
      ))}
    </ul>
  );
};

export default EmojiList;
