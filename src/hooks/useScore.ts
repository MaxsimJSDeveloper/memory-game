import { useEffect, useState } from "react";
import { Card } from "../ts/types";

export const useScore = (emojis: Card[]) => {
  const [score, setScore] = useState<number>(0);

  useEffect(() => {
    const matchedCount = emojis.filter((c) => c.isMatched).length;
    setScore(matchedCount / 2);
  }, [emojis]);

  return score;
};
