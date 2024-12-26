import { useFormContext, Controller } from 'react-hook-form';
import { SelectProps } from '@mui/material';
import { StyledSelect } from '../StyledSelect/StyledSelect';
import { TSelectOption } from '../../types/selectOption';

type TControlledSelectFieldProps = {
  name: string;
  label: string;
  options: TSelectOption[];
} & Omit<SelectProps, 'name'>;

export const ControlledSelectField = ({
  options,
  name,
  ...props
}: TControlledSelectFieldProps) => {
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
