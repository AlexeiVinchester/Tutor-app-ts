import { Tooltip, TooltipProps } from "@mui/material";
import { ReactElement } from "react";

type TButtonToltipWrapper = {
  title: string;
  children: ReactElement;
  placement?: TooltipProps['placement'];
};

export const ButtonToltipWrapper = ({ title, children, placement }: TButtonToltipWrapper) => {
  return (
    <Tooltip
      disableFocusListener
      disableTouchListener
      placement={placement}
      title={title}
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
      {children}
    </Tooltip>
  );
};