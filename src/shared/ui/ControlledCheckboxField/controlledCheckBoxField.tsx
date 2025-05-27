import {
  FormControlLabel,
  Checkbox,
  FormControlLabelProps,
} from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

type TControlledCheckboxFieldProps = {
  name: string;
  label: string;
} & Omit<FormControlLabelProps, 'control' | 'label'>;

export const ControlledCheckboxField = ({
  name,
  label,
  ...props
}: TControlledCheckboxFieldProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => {
        return (
          <FormControlLabel
            label={label}
            control={<Checkbox {...field} checked={field.value} />}
            {...props}
          />
        );
      }

      }
    />
  );
};
