import { TextFieldProps } from '@mui/material';
import { useFormContext, Controller } from 'react-hook-form';
import { StyledInput } from '../StyledInput/styledInput';

type TControlledInput = {
  name: string;
  label: string;
  placeholder: string;
  customHandler?: (event?: React.ChangeEvent<HTMLInputElement>) => void
} & Omit<TextFieldProps, 'name' | 'label' | 'placeholder'>;

export const ControlledInputField = ({
  name,
  customHandler,
  ...props
}: TControlledInput) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, ...restField }, fieldState }) => {
        const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
          onChange(event);
          if (customHandler) {
            customHandler(event);
          }
        };

        return (
          <StyledInput
            {...props}
            {...restField}
            onChange={onChangeHandler}
            fieldState={fieldState}
            name={name}
            fullWidth
          />
        );
      }}
    />
  );
};
