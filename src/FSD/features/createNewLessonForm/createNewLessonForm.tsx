import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loadStudentsNames } from '../../entities/student/api/loadStudentsNames';
import { useState } from 'react';
import { Spinner } from '../../../components/Spinner/Spinner';
import { Button, Checkbox } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import { defaultValues } from './model/defaultValues';
import {
  schemaCreateNewLessonForm,
  TSchemaCreateNewLessonFrom,
} from './model/schema';
import { StyledDatePicker } from '../../shared/ui/StyledDatePicker/styledDatePicker';

import dayjs from 'dayjs';
import {
  PickerChangeHandlerContext,
  DateValidationError,
} from '@mui/x-date-pickers/models';
import { FormWrapper } from '../../shared/ui/FormWrapper/formWrapper';
import { ControlledInputField } from '../../shared/ui/ControlledInputField/controlledInputField';
import { ControlledSelectField } from '../../shared/ui/ControlledSelectField/controlledSelectField';
import { createSelectOptions } from '../../shared/utils/createSelectOption';

export const CreateNewLessonForm = () => {
  const [options, setOptions] = useState<string[]>([]);
  const methods = useForm<TSchemaCreateNewLessonFrom>({
    resolver: zodResolver(schemaCreateNewLessonForm),
    defaultValues: async () => {
      const studentNames = await loadStudentsNames();
      setOptions(studentNames);
      return defaultValues;
    },
    mode: 'onChange',
  });

  const handleSubmitForm = (data: TSchemaCreateNewLessonFrom) => {
    console.log(data);
  };

  if (methods.formState.isLoading) {
    return <Spinner />;
  }

  return (
    <FormWrapper
      methods={methods}
      onSubmit={handleSubmitForm}
      className="flex flex-col gap-3"
    >
      <ControlledSelectField
        name="studentName"
        options={createSelectOptions(options)}
        label="Student"
      />
      <ControlledInputField
        name="price"
        label="Price"
        placeholder="Enter price of lesson"
        variant="outlined"
      />
      <Controller
        control={methods.control}
        name="lessonDate"
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
            />
          );
        }}
      />
      <Controller
        control={methods.control}
        name="paidStatus"
        render={({ field }) => (
          <FormControlLabel label="Paid" control={<Checkbox {...field} />} />
        )}
      />
      <Button
        type="submit"
        variant="contained"
        fullWidth
        sx={{
          borderRadius: '15px',
          bgcolor: 'rgb(255, 92, 53)',
          padding: '16px',
          color: 'white',
          ':hover': {
            bgcolor: 'rgb(80, 201, 173)',
          },
        }}
      >
        Create new Lesson
      </Button>
    </FormWrapper>
  );
};
