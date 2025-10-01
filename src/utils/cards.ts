import { Card } from "../ts/types";

interface PreviewCardsProps {
  setEmojis: React.Dispatch<React.SetStateAction<(Card | null)[]>>;
  cards: Card[];
  cardDelay: number;
}

export const previewCards = ({
  cards,
  setEmojis,
  cardDelay,
}: PreviewCardsProps) => {
  setEmojis(cards);

  const timeout = setTimeout(() => {
    setEmojis((prevCards) =>
      prevCards.map((card) => (card ? { ...card, isOpen: false } : card))
    );
  }, cardDelay * 1000);

  return () => clearTimeout(timeout);
};
