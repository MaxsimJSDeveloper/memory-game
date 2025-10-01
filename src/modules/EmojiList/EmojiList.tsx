import EmojiCard from "../../components/EmojiCard/EmojiCard";
import { Card } from "../../ts/types";
import styles from "./EmojiList.module.css";

interface EmojiListProps {
  emojis: Card[];
  template: null[];
}

const EmojiList = ({ emojis, template }: EmojiListProps) => {
  // Колонки считаем по шаблону (он всегда есть и равен fieldSize)
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
        <EmojiCard key={(card as Card)?.id ?? index} card={card} />
      ))}
    </ul>
  );
};

export default EmojiList;
