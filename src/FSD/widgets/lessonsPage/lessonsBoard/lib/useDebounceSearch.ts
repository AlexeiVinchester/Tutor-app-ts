import { useState, useRef, startTransition, useEffect } from "react";

type TUseDebouncePaginationSearchParams = {
  changePage: (page: number) => void;
  delay: number;
}

export const useDebouncePaginationSearch = (
  { changePage, delay }: TUseDebouncePaginationSearchParams
) => {
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
    }, delay);
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
