// utils/cards.ts (повний і чистий вигляд)
import { Card } from "../ts/types";

export const getOpenedCardsState = (id: string, emojis: Card[]): Card[] => {
  const openCards = emojis.filter((c) => c.isOpen && !c.isMatched);
  if (openCards.length >= 2) return emojis;

  return emojis.map((c) => (c.id === id ? { ...c, isOpen: true } : c));
};

export const getMatchedCardsState = (
  emojis: Card[],
  firstId: string,
  secondId: string,
): Card[] => {
  const firstCard = emojis.find((c) => c.id === firstId);
  const secondCard = emojis.find((c) => c.id === secondId);

  if (!firstCard || !secondCard) return emojis;

  const isMatched = firstCard.character === secondCard.character;

  return emojis.map((c) =>
    c.id === firstId || c.id === secondId
      ? { ...c, isOpen: false, isMatched: isMatched || c.isMatched }
      : c,
  );
};
