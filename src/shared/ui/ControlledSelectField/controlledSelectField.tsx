import { useFormContext, Controller } from 'react-hook-form';
import { SelectProps } from '@mui/material';
import { StyledSelect } from '../StyledSelect/StyledSelect';
import { TSelectOption } from '../../types/selectOption.type';

type TControlledSelectFieldProps<T extends string | number> = {
  name: string;
  label: string;
  options: TSelectOption<T>[];
} & Omit<SelectProps, 'name' | 'label'>;

export const ControlledSelectField = <T extends string | number, >({
  options,
  name,
  ...props
}: TControlledSelectFieldProps<T>) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <StyledSelect
          options={options}
          fieldState={fieldState}
          {...props}
          {...field}
        />
      )}
    />
  );
};
