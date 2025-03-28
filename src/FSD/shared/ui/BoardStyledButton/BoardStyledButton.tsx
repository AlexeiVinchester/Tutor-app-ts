import { IconButton, IconButtonProps, IconProps } from "@mui/material";
import { ButtonToltipWrapper } from "../ButtonTooltipWrapper/ButtonTooltipWrapper";

type TBoardHeaderStyledButtonProps = {
  icon: React.ElementType;
  toolTipTitle?: string;
  iconSize?: IconProps['fontSize'];
} & IconButtonProps;

export const BoardStyledButton = ({
  icon: Icon,
  toolTipTitle,
  iconSize = 'large',
  ...props
}: TBoardHeaderStyledButtonProps) => {
  return (
    <ButtonToltipWrapper title={toolTipTitle || ''}>
      <IconButton
        size="large"
        className="hover:!text-main-turquoise !text-send-data-button-text disabled:!text-gray-400"
        {...props}
      >
        <Icon fontSize={iconSize} />
      </IconButton>
    </ButtonToltipWrapper>
  );
};