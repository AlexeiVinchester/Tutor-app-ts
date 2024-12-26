import { forwardRef } from "react";
import { ControllerFieldState } from "react-hook-form";
import dayjs, { Dayjs } from "dayjs";
import { FormControl, FormHelperText } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker, DesktopDatePickerProps } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { PickerChangeHandlerContext, DateValidationError } from "@mui/x-date-pickers/models";

type TCustomDatePickerProps = {
    fieldState?: ControllerFieldState;
    handleChangeDate?: (date: dayjs.Dayjs | null, context: PickerChangeHandlerContext<DateValidationError>) => void
};

type TStyledDatePickerProps = DesktopDatePickerProps<Dayjs> & TCustomDatePickerProps;

export const StyledDatePicker = forwardRef<HTMLDivElement, TStyledDatePickerProps>(
    ({ fieldState, handleChangeDate, ...props }, ref) => {
        return (
            <FormControl fullWidth>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DesktopDatePicker
                        ref={ref}
                        value={props.value ? dayjs(props.value) : null}
                        onChange={handleChangeDate}
                    />
                </LocalizationProvider>
                <FormHelperText>{fieldState?.error && fieldState.error.message}</FormHelperText>
            </FormControl>
        );
    }
);