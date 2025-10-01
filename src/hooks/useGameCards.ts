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
      cleanupRef.current = previewCards({ setEmojis, cards, cardDelay });
    } catch (err: unknown) {
      if (err instanceof Error) setError(err.message || "Unknown error");
      else setError("Unknown error");
    } finally {
      setLoading(false);
    }
  };

  const handleClick = (id: string) => {
    setEmojis((emojis) =>
      emojis.map((card) =>
        card.id === id ? { ...card, isOpen: !card.isOpen } : card
      )
    );
  };

  return {
    emojis,
    loading,
    error,
    loadEmojis,
    setEmojis,
    handleClick,
    template,
  };
};
