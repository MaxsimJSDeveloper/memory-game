// utils/cards.ts
import { Card } from "../ts/types";

export const cardsManager = {
  // Відкриває одну картку
  getOpenedCardsState(emojis: Card[], idToOpen: string): Card[] {
    const openCards = emojis.filter((c) => c.isOpen && !c.isMatched);
    if (openCards.length >= 2) return emojis;

    return emojis.map((c) => (c.id === idToOpen ? { ...c, isOpen: true } : c));
  },

  // Відкриває кілька карток (корисно для демо-режиму)
  getOpenedMultipleCardsState(emojis: Card[], idsToOpen: string[]): Card[] {
    return emojis.map((c) =>
      idsToOpen.includes(c.id) ? { ...c, isOpen: true } : c,
    );
  },

  // Перевіряє збіг і закриває або фіксує пару
  getMatchedCardsState(
    emojis: Card[],
    firstId: string,
    secondId: string,
  ): Card[] {
    const firstCard = emojis.find((c) => c.id === firstId);
    const secondCard = emojis.find((c) => c.id === secondId);

    if (!firstCard || !secondCard) return emojis;

    const isMatch = firstCard.character === secondCard.character;

    return emojis.map((c) => {
      if (c.id === firstId || c.id === secondId) {
        return { ...c, isOpen: false, isMatched: isMatch || c.isMatched };
      }
      return c; // ВАЖЛИВО: повертаємо інші картки без змін!
    });
  },

  // Закриває всі незіставлені картки
  getResetState(emojis: Card[]): Card[] {
    return emojis.map((c) => ({ ...c, isOpen: false, isMatched: false }));
  },
};
