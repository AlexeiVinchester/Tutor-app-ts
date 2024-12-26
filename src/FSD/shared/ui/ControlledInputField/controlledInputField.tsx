import { TextFieldProps } from '@mui/material';
import { useFormContext, Controller } from 'react-hook-form';
import { StyledInput } from '../StyledInput/styledInput';

type TControlledInput = {
  name: string;
  label: string;
  placeholder: string;
} & Omit<TextFieldProps, 'name' | 'label' | 'placeholder'>;

export const ControlledInputField = ({
  name,
  label,
  placeholder,
  ...props
}: TControlledInput) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => {
        return (
          <StyledInput
            {...props}
            {...field}
            fieldState={fieldState}
            fullWidth
            name={name}
            label={label}
            placeholder={placeholder}
          />
        );
      }}
    />
  );
};
