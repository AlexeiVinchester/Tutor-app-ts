import { IconButton, IconButtonProps } from "@mui/material";
import { ButtonToltipWrapper } from "../ButtonTooltipWrapper/ButtonTooltipWrapper";

type TBoardHeaderStyledButtonProps = {
  icon: React.ElementType;
  toolTipTitle?: string;
} & IconButtonProps;

export const BoardHeaderStyledButton = ({ icon: Icon, toolTipTitle, ...props }: TBoardHeaderStyledButtonProps) => {
  return (
    <ButtonToltipWrapper title={toolTipTitle || ''}>
      <IconButton
        size="large"
        className="!text-send-data-button-text disabled:bg-gray-400"
        {...props}
      >
        <Icon fontSize="large" className="hover:text-main-turquoise" />
      </IconButton>
    </ButtonToltipWrapper>
  );
};