import EmojiCard from "../../components/EmojiCard/EmojiCard";
import { Card } from "../../ts/types";
import styles from "./EmojiList.module.css";

interface EmojiListProps {
  emojis: (Card | null)[];
}

const EmojiList = ({ emojis }: EmojiListProps) => {
  const columns = Math.sqrt(emojis.length);

  return (
    <ul
      className={styles.emojiList}
      style={{
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
      }}
    >
      {emojis.map((emoji, index) => {
        return <EmojiCard key={emoji?.id || index} card={emoji} />;
      })}
    </ul>
  );
};

export default EmojiList;
