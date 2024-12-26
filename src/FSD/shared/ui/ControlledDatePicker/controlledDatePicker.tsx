import { Controller, useFormContext } from 'react-hook-form';
import dayjs, { Dayjs } from 'dayjs';
import {
  PickerChangeHandlerContext,
  DateValidationError,
} from '@mui/x-date-pickers/models';
import { DesktopDatePickerProps } from '@mui/x-date-pickers/DesktopDatePicker';
import { StyledDatePicker } from '../StyledDatePicker/styledDatePicker';

type TControlledDatePickerProps = {
  name: string;
} & DesktopDatePickerProps<Dayjs>;

export const ControlledDatePicker = ({
  name,
  ...props
}: TControlledDatePickerProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => {
        const handleChangeDate = (
          date: dayjs.Dayjs | null,
          context: PickerChangeHandlerContext<DateValidationError>
        ) => {
          const isoDate = date ? date.format('YYYY-MM-DD') : null;
          onChange(isoDate, context);
        };
        return (
          <StyledDatePicker
            handleChangeDate={handleChangeDate}
            value={dayjs(value)}
            {...props}
          />
        );
      }}
    />
  );
};
