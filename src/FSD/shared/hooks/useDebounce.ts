import { useEffect, useRef } from "react"

export const useDebounce = <T,>(
  value: T,
  delay: number,
  callback: (value: T) => void
) => {
  const debounceTimerRef = useRef<number>(0);

  useEffect(() => {
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current)
    }

    debounceTimerRef.current = setTimeout(
      () => callback(value),
      delay
    );

    return () => clearTimeout(debounceTimerRef.current);
  }, [callback, delay, value]);
};