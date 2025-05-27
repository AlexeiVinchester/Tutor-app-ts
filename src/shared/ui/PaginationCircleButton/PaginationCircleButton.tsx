import { IconButtonProps } from "@mui/material";

type TPaginationButtonProps = {
  value: number;
} & IconButtonProps;

export const PaginationCircleButton = ({ value, ...props }: TPaginationButtonProps) => {
  return (
    <button
      className="text-white w-10 h-10 flex items-center justify-center border bg-gray-400 disabled:bg-send-data-button-text hover:bg-main-turquoise rounded-[50%]"
      {...props}
    >
      <span className="text-sm">{value}</span>
    </button>
  );
};