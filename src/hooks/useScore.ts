import { Card } from "../ts/types";
import { toast } from "react-toastify";
import { useEffect } from "react";

export const useScore = (emojis: Card[]) => {
  const matchedCount = emojis.filter((c) => c.isMatched).length;
  const score = matchedCount / 2;

  useEffect(() => {
    if (emojis.length > 0 && matchedCount === emojis.length) {
      toast("You win!");
    }
  }, [matchedCount, emojis.length]);

  return score;
};
