import { IconButton, IconButtonProps, Tooltip } from "@mui/material";
import { ReactNode } from "react";

type TBoardHeaderStyledButtonProps = {
  icon: React.ElementType;
  toolTipTitle?: ReactNode;
} & IconButtonProps;

export const BoardHeaderStyledButton = ({ icon: Icon, toolTipTitle, ...props }: TBoardHeaderStyledButtonProps) => {
  return (
    <Tooltip
      disableFocusListener
      disableTouchListener
      title={toolTipTitle}
      slotProps={{
        popper: {
          modifiers: [
            {
              name: 'offset',
              options: {
                offset: [0, -14],
              },
            },
          ],
        },
        tooltip: {
          className: "!bg-white transition !text-main-turquoise !rounded-lg !p-2 shadow-md"
        }
      }}
    >
      <IconButton
        size="large"
        className="!text-send-data-button-text disabled:bg-gray-400"
        {...props}
      >
        <Icon fontSize="large" className="hover:text-main-turquoise" />
      </IconButton>
    </Tooltip>
  );
};