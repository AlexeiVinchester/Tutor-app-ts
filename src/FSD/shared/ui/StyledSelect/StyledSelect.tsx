import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  SelectProps,
} from '@mui/material';
import { forwardRef, useId } from 'react';
import { ControllerFieldState } from 'react-hook-form';

type TCustomSelectProps = {
  fieldState?: ControllerFieldState;
  options: string[];
};

export type TStyledSelectProps = SelectProps & TCustomSelectProps;

export const StyledSelect = forwardRef<HTMLSelectElement, TStyledSelectProps>(
  ({ fieldState, options, ...props }, ref) => {
    const labelId = useId();

    return (
      <FormControl fullWidth>
        <InputLabel id={labelId}>Select Student</InputLabel>
        <Select
          ref={ref}
          fullWidth
          {...props}
          labelId={labelId}
          label="Select student"
        >
          {options.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText>
          {fieldState?.error && fieldState.error.message}
        </FormHelperText>
      </FormControl>
    );
  }
);
