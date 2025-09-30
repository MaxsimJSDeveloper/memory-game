import { Card, Emoji } from "../ts/types";

const generateId = (prefix: string) =>
  prefix + "-" + Math.random().toString(36).substr(2, 9);

const shuffleArray = <T>(array: T[]): T[] => {
  const emojiArray = [...array];

  for (let i = emojiArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [emojiArray[i], emojiArray[j]] = [emojiArray[j], emojiArray[i]];
  }

  return emojiArray;
};

export const prepareMemoryEmojis = (arr: Emoji[], size: number): Card[] => {
  const shuffled = shuffleArray(arr);

  const sizeOfArr = Math.floor(size / 2);
  const cutArr = shuffled.slice(0, sizeOfArr);
  const duplicated = [...cutArr, ...cutArr];

  return shuffleArray(
    duplicated.map((emoji) => ({
      id: generateId(emoji.slug),
      ...emoji,
      isFlipped: false,
      isMatched: false,
    }))
  );
};
