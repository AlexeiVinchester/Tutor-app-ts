import { forwardRef, useId } from 'react';
import { ControllerFieldState } from 'react-hook-form';
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  SelectProps,
} from '@mui/material';
import { TSelectOption } from '../../types/selectOption';

type TCustomSelectProps = {
  fieldState?: ControllerFieldState;
  options: TSelectOption[];
  label: string;
};

type TStyledSelectProps = TCustomSelectProps &
  Omit<SelectProps, 'label' | 'labelId'>;

export const StyledSelect = forwardRef<HTMLSelectElement, TStyledSelectProps>(
  ({ fieldState, options, label, ...props }, ref) => {
    const labelId = useId();

    return (
      <FormControl fullWidth>
        <InputLabel id={labelId}>{label}</InputLabel>
        <Select ref={ref} fullWidth labelId={labelId} label={label} {...props}>
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.name}
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
