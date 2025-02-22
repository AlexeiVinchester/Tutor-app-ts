import React, { forwardRef, useId } from 'react';
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

type TStyledSelectProps<T extends string | number> = {
  fieldState?: ControllerFieldState;
  options: TSelectOption<T>[];
  label: string;
} & Omit<SelectProps, 'label'>;

export const StyledSelect = forwardRef(
  <T extends string | number>(
    { fieldState, options, label, size, ...props }: TStyledSelectProps<T>,
    ref: React.Ref<HTMLSelectElement>) => {
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
          {
            options.map((option) => (
              <MenuItem
                key={String(option.value)}
                value={option.value}
                component='li'
              >
                {option.label}
              </MenuItem>
            ))
          }
        </Select>
        <FormHelperText>
          {fieldState?.error && fieldState.error.message}
        </FormHelperText>
      </FormControl>
    );
  }
);
