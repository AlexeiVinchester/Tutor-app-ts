import { useState, useRef, startTransition, useEffect } from "react";

export const useDebounceSearch = (changePage: (page: number) => void) => {
  const [inputValue, setInputValue] = useState('');
  const [search, setSearch] = useState('');

  const debounceTimerRef = useRef<number>(0);

  const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newInputValue = e.target.value;
    setInputValue(newInputValue);

    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current)
    }

    debounceTimerRef.current = setTimeout(() => {
      startTransition(() => {
        setSearch(newInputValue);
        changePage(1);
      })
    }, 500)
  };

  useEffect(() => {
    return () => clearTimeout(debounceTimerRef.current);
  }, []);

  return {
    inputValue,
    search,
    handleChangeSearch
  };
};
