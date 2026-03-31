import { useState, useCallback } from "react";
import { Card } from "../ts/types";
import { prepareMemoryEmojis } from "../utils/dataTransformers";
import { toast } from "react-toastify";
import { cardsManager } from "../utils/cards";
import { useTimeoutManager } from "./useTimeoutManager";
import { useEmojiApi } from "./useEmojiApi";

export const useGameCards = (fieldSize: number, cardDelay: number) => {
  const [emojis, setEmojis] = useState<Card[]>([]);
  const [isPreviewing, setIsPreviewing] = useState<boolean>(false);

  const { setSafeTimeout, clearAllTimeouts } = useTimeoutManager();

  const { getEmojis, loading, error } = useEmojiApi();

  const startGame = async () => {
    try {
      clearAllTimeouts();
      setEmojis([]);
      setIsPreviewing(false);

      toast.dismiss();
      toast("Game start");

      const rawEmojis = await getEmojis();

      if (!rawEmojis) {
        toast.error("Failed to load emojis");
        return;
      }

      const cards = prepareMemoryEmojis(rawEmojis, fieldSize);
      setEmojis(cards);
      setIsPreviewing(true);

      toast(`Time of previewing cards ${cardDelay} sec`);

      setSafeTimeout(
        "preview",
        () => {
          setEmojis((currentEmojis) =>
            currentEmojis.map((emoji) => ({ ...emoji, isOpen: false })),
          );
          setIsPreviewing(false);
        },
        cardDelay * 1000,
      );
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : "Unknown error";
      toast.error(`Error: ${errorMessage}`);
    }
  };

  const handleClick = useCallback(
    (id: string) => {
      if (isPreviewing) return;

      setEmojis((prevEmojis) => {
        const nextState = cardsManager.getOpenedCardsState(prevEmojis, id);

        const openedCards = nextState.filter((c) => c.isOpen && !c.isMatched);

        if (openedCards.length === 2) {
          const [firstId, secondId] = openedCards.map((c) => c.id);

          setSafeTimeout(
            "pair",
            () => {
              setEmojis((current) =>
                cardsManager.getMatchedCardsState(current, firstId, secondId),
              );
            },
            500,
          );
        }

        return nextState;
      });
    },
    [isPreviewing, setSafeTimeout],
  );

  const stopGame = () => {
    clearAllTimeouts();
    setEmojis([]);
    setIsPreviewing(false);
    toast.dismiss();
    toast("Game stopped");
  };

  return {
    emojis,
    loading,
    error,
    startGame,
    handleClick,
    stopGame,
    isPreviewing,
  };
};
