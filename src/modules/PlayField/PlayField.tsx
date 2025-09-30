import EmojiList from "../EmojiList/EmojiList";
import { Card } from "../../ts/types";
import styles from "./PlayField.module.css";

interface PlayFieldProps {
  emojis: (Card | null)[];
}

const PlayField = ({ emojis }: PlayFieldProps) => {
  return (
    <div className={styles.playField}>
      <EmojiList emojis={emojis} />
    </div>
  );
};

export default PlayField;
