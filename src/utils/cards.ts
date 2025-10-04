import { Card } from "../ts/types";

interface PreviewCardsProps {
  setIsPreviewing: React.Dispatch<React.SetStateAction<boolean>>;
  setEmojis: React.Dispatch<React.SetStateAction<Card[]>>;
  cards: Card[];
  cardDelay: number;
}

export const previewCards = ({
  cards,
  setEmojis,
  cardDelay,
  setIsPreviewing,
}: PreviewCardsProps) => {
  setEmojis(cards);

  const timeout = setTimeout(() => {
    setEmojis((prevCards) =>
      prevCards.map((card) => (card ? { ...card, isOpen: false } : card))
    );
    setIsPreviewing(false);
  }, cardDelay * 1000);

  return () => clearTimeout(timeout);
};

export const resolvePair = (
  first: Card,
  second: Card,
  setEmojis: React.Dispatch<React.SetStateAction<Card[]>>
) => {
  if (first.character === second.character) {
    setEmojis((prev) =>
      prev.map((c) =>
        c.id === first.id || c.id === second.id
          ? { ...c, isOpen: false, isMatched: true }
          : c
      )
    );
  } else {
    setEmojis((prev) => prev.map((c) => ({ ...c, isOpen: false })));
  }
};

export const handleCardClick = (
  id: string,
  emojis: Card[],
  setEmojis: React.Dispatch<React.SetStateAction<Card[]>>,
  isPreviewing: boolean
) => {
  if (isPreviewing) return;

  const openCards = emojis.filter((c) => c.isOpen && !c.isMatched);
  if (openCards.length >= 2) return;

  setEmojis((prev) =>
    prev.map((card) => (card.id === id ? { ...card, isOpen: true } : card))
  );
};
