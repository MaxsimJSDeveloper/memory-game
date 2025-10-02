import { useEffect, useRef, useState } from "react";
import { Card } from "../ts/types";
import { fetchEmoji } from "../api/emoji";
import { prepareMemoryEmojis } from "../utils/dataTransformers";
import { handleCardClick, previewCards, resolvePair } from "../utils/cards";

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

      if (emojis.length > 0) {
        setEmojis([]);
      }

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

  const handleClick = (id: string) =>
    handleCardClick(id, emojis, setEmojis, isPreviewing);

  useEffect(() => {
    const openCards = emojis.filter((c) => c.isOpen && !c.isMatched);

    if (openCards.length === 2) {
      const [first, second] = openCards;

      const timeoutId = setTimeout(
        () => resolvePair(first, second, setEmojis),
        500
      );

      return () => clearTimeout(timeoutId);
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
