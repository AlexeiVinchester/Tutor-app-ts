import { forwardRef, useCallback } from "react";
import { ControllerFieldState, ControllerRenderProps } from "react-hook-form";
import dayjs, { Dayjs } from "dayjs";
import { FormControl } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker, DesktopDatePickerProps } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

type TCustomDatePickerProps = {
    field: ControllerRenderProps;
    fieldState: ControllerFieldState;
};

type TStyledDatePickerProps = DesktopDatePickerProps<Dayjs> & TCustomDatePickerProps;

export const StyledDatePicker = forwardRef<HTMLDivElement, TStyledDatePickerProps>(
    ({ field, ...props }, ref) => {
        const handleChangeDate = useCallback((date: dayjs.Dayjs | null) => {
            const isoDate = date ? date.format("YYYY-MM-DD") : null;
            field.onChange(isoDate)
        }, [field]);

        return (
            <FormControl fullWidth>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DesktopDatePicker
                        ref={ref}
                        value={field.value ? dayjs(field.value) : null}
                        onChange={handleChangeDate}
                        {...props}
                    />
                </LocalizationProvider>
            </FormControl>
        );
    }
);