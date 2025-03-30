import { useQueryClient } from "@tanstack/react-query";

export const useUpdateDataByClick = (queryKey: string[]) => {
  const client = useQueryClient();

  const handleClick = () => {
    client.invalidateQueries({ queryKey });
  };

  return handleClick;
};