import EmojiCard from "../../components/EmojiCard/EmojiCard";
import { Emoji } from "../../ts/types";
import styles from "./EmojiList.module.css";

interface EmojiListProps {
  emojis: Emoji[];
  numberOfElements: number;
}

const EmojiList = ({ emojis, numberOfElements }: EmojiListProps) => {
  const itemsArr = Array.from({ length: numberOfElements });

  const columns = Math.sqrt(numberOfElements);

  return (
    <ul
      className={styles.emojiList}
      style={{
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
      }}
    >
      {itemsArr.map((_, index) => {
        const emoji = emojis[index];
        return (
          <EmojiCard key={index}>
            {emoji ? <p>{emoji.character}</p> : null}
          </EmojiCard>
        );
      })}
    </ul>
  );
};

export default EmojiList;
