import { Emoji } from "../ts/types";

export const clearArray = (arr: Emoji[]) => {
  return arr.filter((emoji) => emoji.character !== "🛖").slice(0, 8);
};

export const shuffleArray = (array: Emoji[]) => {
  return array.sort(() => Math.random() - 0.5);
};
