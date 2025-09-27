import EmojiList from "../EmojiList/EmojiList";
import { Emoji } from "../../ts/types";
import styles from "./PlayField.module.css";

interface PlayFieldProps {
  emojis: Emoji[];
  size: number;
}

const PlayField = ({ emojis, size }: PlayFieldProps) => {
  return (
    <div className={styles.playField}>
      <EmojiList numberOfElements={size} emojis={emojis} />
    </div>
  );
};

export default PlayField;
