import { useState, useCallback } from "react";
import { fetchEmoji } from "../api/emoji";
import { Emoji } from "../ts/types";

export const useEmojiApi = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState("");

  const getEmojis = useCallback(async (): Promise<Emoji[] | undefined> => {
    setLoading(true);
    setError("");

    try {
      const data = await fetchEmoji();
      if (!data) throw new Error("No data received");
      return data;
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : "Unknown error";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  }, []);

  return { getEmojis, loading, error };
};
