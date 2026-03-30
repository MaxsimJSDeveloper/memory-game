import EmojiCard from "../../components/EmojiCard/EmojiCard";
import { Card } from "../../ts/types";
import styles from "./EmojiList.module.css";

interface EmojiListProps {
  emojis: Card[];
  template: { id: string }[];
  handleClick: (id: string) => void;
}

const EmojiList = ({ emojis, template, handleClick }: EmojiListProps) => {
  const columns = Math.sqrt(template.length);

  const isGameActive = emojis.length > 0;
  const cardsToRender = isGameActive ? emojis : template;

  return (
    <ul
      className={styles.emojiList}
      style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
    >
      {cardsToRender.map((item, index) => (
        <EmojiCard
          key={item.id}
          card={isGameActive ? (item as Card) : null}
          handleClick={handleClick}
          index={index}
        />
      ))}
    </ul>
  );
};

export default EmojiList;
