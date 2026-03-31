import { useState, useEffect, useRef } from "react";
import { Card } from "../ts/types";
import { prepareMemoryEmojis, getDemoEmojis } from "../utils/dataTransformers";
import { cardsManager } from "../utils/cards";
import { useTimeoutManager } from "./useTimeoutManager";

export const useAttractMode = (fieldSize: number, isActive: boolean) => {
  const [demoCards, setDemoCards] = useState<Card[]>([]);
  const deckRef = useRef<Card[]>([]);

  const { setSafeTimeout, clearAllTimeouts } = useTimeoutManager();

  useEffect(() => {
    if (!isActive) {
      clearAllTimeouts();
      return;
    }

    let isCancelled = false;

    const initializeDeck = () => {
      const demoEmojiData = getDemoEmojis(fieldSize / 2);
      const newCards = prepareMemoryEmojis(demoEmojiData, fieldSize).map(
        (c) => ({ ...c, isOpen: false }),
      );

      deckRef.current = newCards;
      setDemoCards(newCards);
    };

    const playNextMove = () => {
      if (isCancelled) return;

      const currentCards = deckRef.current;
      const closedCards = currentCards.filter((c) => !c.isOpen && !c.isMatched);

      if (closedCards.length < 2) {
        setSafeTimeout(
          "demo-reset",
          () => {
            if (isCancelled) return;
            const resetState = cardsManager.getResetState(deckRef.current);
            deckRef.current = resetState;
            setDemoCards(resetState);
            setSafeTimeout("demo-next", playNextMove, 1000);
          },
          2000,
        );
        return;
      }

      const idx1 = Math.floor(Math.random() * closedCards.length);
      let idx2 = Math.floor(Math.random() * closedCards.length);
      while (idx1 === idx2)
        idx2 = Math.floor(Math.random() * closedCards.length);

      const card1 = closedCards[idx1];
      const card2 = closedCards[idx2];

      const openedState = cardsManager.getOpenedMultipleCardsState(
        currentCards,
        [card1.id, card2.id],
      );
      deckRef.current = openedState;
      setDemoCards(openedState);

      setSafeTimeout(
        "demo-match",
        () => {
          if (isCancelled) return;

          const matchedState = cardsManager.getMatchedCardsState(
            deckRef.current,
            card1.id,
            card2.id,
          );
          deckRef.current = matchedState;
          setDemoCards(matchedState);

          setSafeTimeout("demo-next", playNextMove, 800);
        },
        1500,
      );
    };

    setSafeTimeout(
      "demo-init",
      () => {
        if (isCancelled) return;
        initializeDeck();
        setSafeTimeout("demo-next", playNextMove, 1000);
      },
      0,
    );

    return () => {
      isCancelled = true;
      clearAllTimeouts();
    };
  }, [isActive, fieldSize, setSafeTimeout, clearAllTimeouts]);

  return isActive ? demoCards : [];
};
