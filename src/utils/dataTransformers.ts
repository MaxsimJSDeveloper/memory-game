import { Emoji } from "../ts/types";

export const cutArray = (arr: Emoji[], size: number) => {
  if (size % 2) {
    return arr.slice(0, size - 1);
  }
  return arr.slice(0, size);
};

export const shuffleArray = (array: Emoji[]): Emoji[] => {
  const emojiArray = [...array];

  for (let i = emojiArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [emojiArray[i], emojiArray[j]] = [emojiArray[j], emojiArray[i]];
  }

  return emojiArray;
};

export const prepareMemoryEmojis = (arr: Emoji[], size: number): Emoji[] => {
  const shuffled = shuffleArray(arr);
  const uniqueCount = Math.floor(size / 2);
  const selected = shuffled.slice(0, uniqueCount);
  const duplicated = [...selected, ...selected];

  return duplicated;
};
