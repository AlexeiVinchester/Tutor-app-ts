import { IconButtonProps } from "@mui/material";

type TPaginationButtonProps = {
  value: number;
} & IconButtonProps;

export const PaginationButton = ({ value, ...props }: TPaginationButtonProps) => {
  return (
    <button
      className="rounded-2 border px-4 py-2 bg-send-data-button-text disabled:bg-gray-500 hover:bg-main-turquoise"
      {...props}
    >
      {value}
    </button>
  );
};