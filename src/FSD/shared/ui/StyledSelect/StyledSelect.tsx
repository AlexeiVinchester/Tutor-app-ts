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
import { TSelectOption } from '../../types/selectOption.type';

type TStyledSelectProps = {
  fieldState?: ControllerFieldState;
  options: TSelectOption[];
  label: string;
} & Omit<SelectProps, 'label'>;

export const StyledSelect = forwardRef<HTMLSelectElement, TStyledSelectProps>(
  ({ fieldState, options, label, size, ...props }, ref) => {
    const labelId = useId();

    return (
      <FormControl fullWidth>
        <InputLabel id={labelId} size={size === 'small' ? size : 'normal'}>
          {label}
        </InputLabel>
        <Select
          size={size}
          ref={ref}
          fullWidth
          labelId={labelId}
          label={label}
          {...props}
        >
          {options.map((option) => (
            <MenuItem key={option.name} value={option.value}>
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
