import EmojiCard from "../../components/EmojiCard/EmojiCard";
import { Emoji } from "../../ts/types";
import styles from "./EmojiList.module.css";

interface EmojiListProps {
  emojis: Emoji[];
  numberOfElements?: number; // необязательный, по дефолту 16
}

const EmojiList = ({ emojis, numberOfElements = 16 }: EmojiListProps) => {
  // создаём массив нужной длины
  const itemsArr = Array.from({ length: numberOfElements });

  return (
    <ul className={styles.emojiList}>
      {itemsArr.map((_, index) => {
        const emoji = emojis[index]; // берём смайлик, если он есть
        return (
          <EmojiCard key={index}>
            {emoji ? <p>{emoji.character}</p> : null /* пустой слот */}
          </EmojiCard>
        );
      })}
    </ul>
  );
};

export default EmojiList;
