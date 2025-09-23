import { Emoji } from "../ts/types";

export const clearArray = (arr: Emoji[]) => {
  return arr.slice(0, 8);
};

export const shuffleArray = (array: Emoji[]): Emoji[] => {
  const emojiArray = [...array];

  for (let i = emojiArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [emojiArray[i], emojiArray[j]] = [emojiArray[j], emojiArray[i]];
  }

  return emojiArray;
};
