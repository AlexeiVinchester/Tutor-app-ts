import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loadStudentsNames } from '../../entities/student/api/loadStudentsNames';
import { useState } from 'react';
import { Spinner } from '../../../components/Spinner/Spinner';
import { Button } from '@mui/material';
import { defaultValues } from './model/defaultValues';
import {
  schemaCreateNewLessonForm,
  TSchemaCreateNewLessonFrom,
} from './model/schema';

import { FormWrapper } from '../../shared/ui/FormWrapper/formWrapper';
import { ControlledInputField } from '../../shared/ui/ControlledInputField/controlledInputField';
import { ControlledSelectField } from '../../shared/ui/ControlledSelectField/controlledSelectField';
import { createSelectOptions } from '../../shared/utils/createSelectOption';
import { ControlledCheckboxField } from '../../shared/ui/ControlledCheckboxField/controlledCheckBoxField';
import { ControlledDatePicker } from '../../shared/ui/ControlledDatePicker/controlledDatePicker';

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
      <ControlledDatePicker name="lessonDate" />
      <ControlledCheckboxField name="paidStatus" label="Paid" />
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
