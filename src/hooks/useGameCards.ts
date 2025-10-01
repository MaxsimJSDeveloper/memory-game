import { useEffect, useRef, useState } from "react";
import { Card } from "../ts/types";
import { fetchEmoji } from "../api/emoji";
import { prepareMemoryEmojis } from "../utils/dataTransformers";
import { previewCards } from "../utils/cards";

export const useGameCards = (fieldSize: number, cardDelay: number) => {
  const [template, setTemplate] = useState<null[]>([]);
  const [emojis, setEmojis] = useState<Card[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isPreviewing, setIsPreviewing] = useState<boolean>(true);

  const cleanupRef = useRef<() => void>();

  useEffect(() => {
    setTemplate(Array.from({ length: fieldSize }, () => null));
  }, [fieldSize]);

  useEffect(() => {
    return () => {
      cleanupRef.current?.();
    };
  }, []);

  const loadEmojis = async () => {
    try {
      setLoading(true);
      setError("");

      if (emojis.length > 0) setEmojis([]);

      const data = await fetchEmoji();
      if (!data) throw new Error("No data received");

      const cards = prepareMemoryEmojis(data, fieldSize);
      cleanupRef.current = previewCards({
        setIsPreviewing,
        setEmojis,
        cards,
        cardDelay,
      });
    } catch (err: unknown) {
      if (err instanceof Error) setError(err.message || "Unknown error");
      else setError("Unknown error");
    } finally {
      setLoading(false);
    }
  };

  const handleClick = (id: string) => {
    if (isPreviewing) return;

    const openCards = emojis.filter((c) => c.isOpen && !c.isMatched);
    if (openCards.length >= 2) return;

    setEmojis((prev) =>
      prev.map((card) => (card.id === id ? { ...card, isOpen: true } : card))
    );
  };

  useEffect(() => {
    const openCards = emojis.filter((c) => c.isOpen && !c.isMatched);

    if (openCards.length === 2) {
      const [first, second] = openCards;

      if (first.character === second.character) {
        setTimeout(() => {
          setEmojis((prev) =>
            prev.map((c) =>
              c.id === first.id || c.id === second.id
                ? { ...c, isOpen: false, isMatched: true }
                : c
            )
          );
        }, 500);
      } else {
        setTimeout(() => {
          setEmojis((prev) =>
            prev.map((c) =>
              c.id === first.id || c.id === second.id
                ? { ...c, isOpen: false }
                : c
            )
          );
        }, 1000);
      }
    }
  }, [emojis]);

  return {
    emojis,
    template,
    loading,
    error,
    loadEmojis,
    setEmojis,
    handleClick,
    isPreviewing,
  };
};
