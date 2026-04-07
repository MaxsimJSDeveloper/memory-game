import { useEffect } from "react";
import { Card } from "../ts/types";
import { toast } from "react-toastify";

export const useScore = (emojis: Card[]) => {
  const matchedCount = emojis.filter((c) => c.isMatched).length;
  const score = matchedCount / 2;
  const isWon = emojis.length > 0 && matchedCount === emojis.length;

  useEffect(() => {
    if (isWon) {
      toast("You win!");
    }
  }, [isWon]);

  return { score, isWon };
};
