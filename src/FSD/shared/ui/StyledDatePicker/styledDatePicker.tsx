import { forwardRef } from 'react';
import { ControllerFieldState } from 'react-hook-form';
import dayjs, { Dayjs } from 'dayjs';
import { FormControl, FormHelperText, TextFieldProps } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import {
  DesktopDatePicker,
  DesktopDatePickerProps,
} from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import {
  PickerChangeHandlerContext,
  DateValidationError,
} from '@mui/x-date-pickers/models';

type TCustomDatePickerProps = {
  fieldState?: ControllerFieldState;
  handleChangeDate?: (
    date: dayjs.Dayjs | null,
    context: PickerChangeHandlerContext<DateValidationError>
  ) => void;
  size?: TextFieldProps['size'];
};

type TStyledDatePickerProps = DesktopDatePickerProps<Dayjs> &
  TCustomDatePickerProps;

export const StyledDatePicker = forwardRef<
  HTMLDivElement,
  TStyledDatePickerProps
>(({ fieldState, handleChangeDate, size, ...props }, ref) => {
  console.log('Date value type: ', props.value)
  return (
    <FormControl fullWidth>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DesktopDatePicker
          sx={{
            '& .MuiInputBase-root': {
              height: size === 'small' ? 40 : 56, 
              fontSize: size === 'small' ? '0.875rem' : '1rem', 
            },
          }}
          ref={ref}
          value={props.value ? dayjs(props.value) : null}
          onChange={handleChangeDate}
        />
      </LocalizationProvider>
      <FormHelperText>
        {fieldState?.error && fieldState.error.message}
      </FormHelperText>
    </FormControl>
  );
});
