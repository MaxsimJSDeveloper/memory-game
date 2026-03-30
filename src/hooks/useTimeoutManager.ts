import { useRef, useEffect, useCallback } from "react";

export const useTimeoutManager = () => {
  const timeouts = useRef<Record<string, ReturnType<typeof setTimeout>>>({});

  const setSafeTimeout = useCallback(
    (key: string, callback: () => void, delay: number) => {
      if (timeouts.current[key]) {
        clearTimeout(timeouts.current[key]);
      }
      timeouts.current[key] = setTimeout(callback, delay);
    },
    [],
  );

  const clearSafeTimeout = useCallback((key: string) => {
    if (timeouts.current[key]) {
      clearTimeout(timeouts.current[key]);
      delete timeouts.current[key];
    }
  }, []);

  const clearAllTimeouts = useCallback(() => {
    Object.values(timeouts.current).forEach(clearTimeout);
    timeouts.current = {};
  }, []);

  useEffect(() => {
    return clearAllTimeouts;
  }, [clearAllTimeouts]);

  return { setSafeTimeout, clearSafeTimeout, clearAllTimeouts };
};
