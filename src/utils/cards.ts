import { Card } from "../ts/types";

export interface OpenCardParams {
  id: string;
  emojis: Card[];
  setEmojis: React.Dispatch<React.SetStateAction<Card[]>>;
  pairTimeout: React.MutableRefObject<
    ReturnType<typeof setTimeout> | undefined
  >;
}

export const openCard = ({
  id,
  emojis,
  setEmojis,
  pairTimeout,
}: OpenCardParams): Card[] => {
  const openCards = emojis.filter((c) => c.isOpen && !c.isMatched);
  if (openCards.length >= 2) return emojis;

  const updated = emojis.map((c) => (c.id === id ? { ...c, isOpen: true } : c));

  const openedIds = updated
    .filter((c) => c.isOpen && !c.isMatched)
    .map((c) => c.id);

  if (openedIds.length === 2) {
    const [firstId, secondId] = openedIds;
    const firstCard = updated.find((c) => c.id === firstId)!;
    const secondCard = updated.find((c) => c.id === secondId)!;

    clearTimeout(pairTimeout.current);
    pairTimeout.current = setTimeout(() => {
      setEmojis((cards) =>
        cards.map((c) =>
          c.id === firstCard.id || c.id === secondCard.id
            ? {
                ...c,
                isOpen: false,
                isMatched: firstCard.character === secondCard.character,
              }
            : c
        )
      );
    }, 500);
  }

  return updated;
};

interface PreviewCardsParams {
  setEmojis: React.Dispatch<React.SetStateAction<Card[]>>;
  setIsPreviewing: React.Dispatch<React.SetStateAction<boolean>>;
  previewTimeout: React.MutableRefObject<
    ReturnType<typeof setTimeout> | undefined
  >;
  cardDelay: number;
}

export const previewCards = ({
  setEmojis,
  setIsPreviewing,
  previewTimeout,
  cardDelay,
}: PreviewCardsParams) => {
  clearTimeout(previewTimeout.current);

  previewTimeout.current = setTimeout(() => {
    setEmojis((emojis) => emojis.map((emoji) => ({ ...emoji, isOpen: false })));
    setIsPreviewing(false);
  }, cardDelay * 1000);
};
