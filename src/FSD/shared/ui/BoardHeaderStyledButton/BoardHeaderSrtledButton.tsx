import { IconButton, IconButtonProps } from "@mui/material";

type TBoardHeaderStyledButtonProps = {
  icon: React.ElementType
} & IconButtonProps;

export const BoardHeaderStyledButton = ({ icon: Icon, ...props }: TBoardHeaderStyledButtonProps) => {
  return (
    <IconButton
      size="large"
      className="!text-send-data-button-text disabled:bg-gray-400"
      {...props}
    >
      <Icon fontSize="large" className="hover:text-main-turquoise" />
    </IconButton>
  );
};