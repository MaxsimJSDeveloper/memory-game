import { useEffect, useRef, useState } from "react";
import { Card } from "../ts/types";
import { fetchEmoji } from "../api/emoji";
import { prepareMemoryEmojis } from "../utils/dataTransformers";
import { toast } from "react-toastify";
import { openCard, previewCards } from "../utils/cards";

export const useGameCards = (fieldSize: number, cardDelay: number) => {
  const [template, setTemplate] = useState<null[]>([]);

  const [emojis, setEmojis] = useState<Card[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState("");

  const [isPreviewing, setIsPreviewing] = useState<boolean>(true);

  const previewTimeout = useRef<ReturnType<typeof setTimeout>>();
  const pairTimeout = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    setTemplate(Array.from({ length: fieldSize }, () => null));
  }, [fieldSize]);

  const loadEmojis = async () => {
    try {
      setLoading(true);
      setError("");
      setEmojis([]);

      toast.dismiss();
      toast("Game start");

      const data = await fetchEmoji();
      if (!data) throw new Error("No data received");

      const cards = prepareMemoryEmojis(data, fieldSize);
      setEmojis(cards);
      setIsPreviewing(true);

      toast(`Time of previewing cards ${cardDelay} sec`);
      previewCards({ setEmojis, setIsPreviewing, previewTimeout, cardDelay });
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : "Unknown error";
      setError(errorMessage);
      toast.error(`Error: ${errorMessage}`);
    } finally {
      setLoading(false);
    }
  };

  const handleClick = (id: string) => {
    if (isPreviewing) return;

    setEmojis((emojis) => openCard({ id, emojis, setEmojis, pairTimeout }));
  };

  useEffect(() => {
    const preview = previewTimeout.current;
    const pair = pairTimeout.current;

    return () => {
      clearTimeout(preview);
      clearTimeout(pair);
    };
  }, []);

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
