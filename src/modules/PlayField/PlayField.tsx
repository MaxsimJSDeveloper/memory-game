import EmojiList from "../EmojiList/EmojiList";
import { Emoji } from "../../ts/types";
import styles from "./PlayField.module.css";

interface PlayFieldProps {
  emojis: Emoji[];
}

const PlayField = ({ emojis }: PlayFieldProps) => {
  return (
    <div className={styles.playField}>
      <EmojiList emojis={emojis} />
    </div>
  );
};

export default PlayField;
