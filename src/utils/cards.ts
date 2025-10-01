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
