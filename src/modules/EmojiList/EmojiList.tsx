import EmojiCard from "../../components/EmojiCard/EmojiCard";
import { Card } from "../../ts/types";
import styles from "./EmojiList.module.css";

interface EmojiListProps {
  emojis: Card[];
  template: null[];
  handleClick: (id: string) => void;
}

const EmojiList = ({ emojis, template, handleClick }: EmojiListProps) => {
  const columns = Math.sqrt(template.length);

  const cardsToRender = emojis.length > 0 ? emojis : template;

  return (
    <ul
      className={styles.emojiList}
      style={{
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
      }}
    >
      {cardsToRender.map((card, index) => (
        <EmojiCard
          key={(card as Card)?.id ?? index}
          card={card}
          handleClick={handleClick}
        />
      ))}
    </ul>
  );
};

export default EmojiList;
