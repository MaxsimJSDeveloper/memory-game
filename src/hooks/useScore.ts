import { useEffect, useState } from "react";
import { Card } from "../ts/types";
import { toast } from "react-toastify";

export const useScore = (emojis: Card[]) => {
  const [score, setScore] = useState<number>(0);

  useEffect(() => {
    if (!emojis.length) return;

    const matchedCount = emojis.filter((c) => c.isMatched).length;
    setScore(matchedCount / 2);

    if (matchedCount === emojis.length) toast("You win!");
  }, [emojis]);

  return score;
};
