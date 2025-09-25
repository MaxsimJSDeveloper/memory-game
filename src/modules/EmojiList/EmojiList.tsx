import EmojiCard from "../../components/EmojiCard/EmojiCard";
import { Emoji } from "../../ts/types";
import styles from "./EmojiList.module.css";

interface EmojiListProps {
  emojis: Emoji[];
}

const EmojiList = ({ emojis }: EmojiListProps) => {
  return (
    <ul className={styles.emojiList}>
      {emojis.map((emoji) => (
        <EmojiCard key={emoji.codePoint}>{emoji.character}</EmojiCard>
      ))}
    </ul>
  );
};

export default EmojiList;
