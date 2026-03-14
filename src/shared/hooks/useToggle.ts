import { useCallback, useState } from "react";

const useToggle = () => {
  const [value, setValue] = useState<boolean>(false);
  const toggleTrue = useCallback(
    () => setValue(true),
    []
  );
  const toggleFalse = useCallback(
    () => setValue(false),
    []
  );
  const toggle = useCallback(
    () => setValue((prev) => !prev),
    []
  );

  return {
    value,
    toggle,
    toggleFalse,
    toggleTrue,
  };
}

export { useToggle };