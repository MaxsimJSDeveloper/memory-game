import EmojiList from "../EmojiList/EmojiList";
import { Card } from "../../ts/types";
import styles from "./PlayField.module.css";

interface PlayFieldProps {
  emojis: Card[];
  template: null[];
  handleClick: (id: string) => void;
}

const PlayField = ({ emojis, template, handleClick }: PlayFieldProps) => {
  return (
    <div className={styles.playField}>
      <EmojiList
        emojis={emojis}
        template={template}
        handleClick={handleClick}
      />
    </div>
  );
};

export default PlayField;
