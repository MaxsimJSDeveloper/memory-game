import EmojiList from "../EmojiList/EmojiList";
import { Card } from "../../ts/types";
import styles from "./PlayField.module.css";

interface PlayFieldProps {
  emojis: Card[];
  template: null[];
}

const PlayField = ({ emojis, template }: PlayFieldProps) => {
  return (
    <div className={styles.playField}>
      <EmojiList emojis={emojis} template={template} />
    </div>
  );
};

export default PlayField;
